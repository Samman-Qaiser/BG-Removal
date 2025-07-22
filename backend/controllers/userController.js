import userModel from "../models/userModel.js";
import { Webhook } from 'svix';

export const ClerkWebHook = async (req, res) => {
  try {
    const payload = JSON.stringify(req.body); // Required for svix verify
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    const evt = wh.verify(payload, headers);

    const { data, type } = evt;

    switch (type) {
      case "user.created":
        await UserModel.create({
          clerkId: data.id,
          email: data.email_addresses?.[0]?.email_address,
          photo: data.image_url,
          firstName: data.first_name,
          lastName: data.last_name,
        });
        res.status(200).json({ success: true, message: "User created." });
        break;

      case "user.updated":
        await UserModel.findOneAndUpdate(
          { clerkId: data.id },
          {
            email: data.email_addresses?.[0]?.email_address,
            photo: data.image_url,
            firstName: data.first_name,
            lastName: data.last_name,
          }
        );
        res.status(200).json({ success: true, message: "User updated." });
        break;

      case "user.deleted":
        await UserModel.findOneAndDelete({ clerkId: data.id });
        res.status(200).json({ success: true, message: "User deleted." });
        break;

      default:
        res.status(200).json({ success: true, message: "Event ignored." });
    }
  } catch (error) {
    console.error("Webhook error:", error);
    res.status(400).json({
      success: false,
      message: error.message || "Webhook error",
    });
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