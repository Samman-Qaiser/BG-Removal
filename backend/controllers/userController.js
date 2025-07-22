import userModel from "../models/userModel.js";
import { Webhook } from 'svix';
//function to handle webhooks /api/user/webhooks
export const ClerkWebHook = async (req, res) => {
  try {
    const payload = req.body; // raw buffer
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"]
    };

    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    const evt = wh.verify(payload, headers); // returns parsed JSON if valid
    const { data, type } = evt;

    switch (type) {
      case "user.created": {
        const user = {
          clerkId: data.id,
          email: data.email_addresses[0].email_address,
          photo: data.image_url,
          firstName: data.first_name,
          lastName: data.last_name
        };
        await userModel.create(user);
        return res.status(200).json({ success: true, message: "User created" });
      }

      case "user.updated": {
        const update = {
          email: data.email_addresses[0].email_address,
          photo: data.image_url,
          firstName: data.first_name,
          lastName: data.last_name
        };
        await userModel.findOneAndUpdate({ clerkId: data.id }, update);
        return res.status(200).json({ success: true, message: "User updated" });
      }

      case "user.deleted": {
        await userModel.findOneAndDelete({ clerkId: data.id });
        return res.status(200).json({ success: true, message: "User deleted" });
      }

      default:
        return res.status(200).json({ success: true, message: "Unhandled event" });
    }
  } catch (err) {
    console.error(err);
    return res.status(400).json({ success: false, message: err.message });
  }
};
export const userCredit=async (req,res)=>{
  try{
    const {clerkId}=req.body
    const user=await userModel.find({clerkId})
      res.json({success:true,creditBalance:user.creditBalance})
  }
  catch(error){
   console.error(err);
    return res.status(400).json({ success: false, message: err.message }); 
  }
}