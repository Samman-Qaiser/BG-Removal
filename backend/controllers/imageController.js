import axios from 'axios';
import fs from 'fs';
import FormData from 'form-data';
import userModel from '../models/userModel.js'; // update path as needed

export const removeImg = async (req, res) => {
  try {
    const { clerkId } = req;
    const user = await userModel.findOne({ clerkId });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    if (user.creditBalance === 0) {
      return res.status(403).json({ success: false, message: 'No credits left' });
    }
    if (!req.file) {
  return res.status(400).json({ success: false, message: 'No file uploaded' });
}

    const imgPath = req.file.path;
    const imgFile = fs.createReadStream(imgPath);

    const form = new FormData();
    form.append('image_file', imgFile);

    const { data } = await axios.post(
      'https://clipdrop-api.co/remove-background/v1',
      form,
      {
        headers: {
          ...form.getHeaders(), // ✅ sets 'multipart/form-data' with correct boundary
          'x-api-key': process.env.CLIPDROP_API,
        },
        responseType: 'arraybuffer', // to receive binary buffer
      }
    );

    // Convert to base64
    const base64img = Buffer.from(data, 'binary').toString('base64');
    const resultimg = `data:image/png;base64,${base64img}`;

    fs.unlinkSync(imgPath); // Clean up uploaded file

    user.creditBalance -= 1;
    await user.save();

    return res.status(200).json({
      success: true,
      resultimg,
      creditBalance: user.creditBalance,
    });

  } catch (error) {
    console.error(error?.response?.data || error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

