import jwt from 'jsonwebtoken'
///function to decode jwt token to get clerkid
export const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.status(400).json({ success: false, message: 'Unauthorized, please login again' });
    }
    const token_decode = jwt.decode(token);
   
    if (!token_decode?.clerkId) {
      return res.status(400).json({ success: false, message: 'Invalid token' });
    }
    req.clerkId = token_decode.clerkId;
    next();
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, message: error.message });
  }
};
