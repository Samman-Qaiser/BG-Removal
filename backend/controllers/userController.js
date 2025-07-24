import userModel from "../models/userModel.js";
import { Webhook } from 'svix';

export const ClerkWebHook = async (req, res) => {
  try {
    
       // Required for svix verify
       const whook=new Webhook(process.env.CLERK_WEBHOOK_SECRET)
       await whook.verify(JSON.stringify(req.body),{
         "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
       })

    const { data, type } = req.body;

    switch (type) {
      case "user.created":
        await userModel.create({
          clerkId: data.id,
          email: data.email_addresses?.[0]?.email_address,
          photo: data.image_url,
          firstName: data.first_name,
          lastName: data.last_name,
        });
        res.status(200).json({ success: true, message: "User created." });
        break;

      case "user.updated":
        await userModel.findOneAndUpdate(
          { clerkId: data.id },
          {
            email: data.email_addresses[0].email_address,
            photo: data.image_url,
            firstName: data.first_name,
            lastName: data.last_name,
          }
        );
        res.status(200).json({ success: true, message: "User updated." });
        break;

      case "user.deleted":
        await userModel.findOneAndDelete({ clerkId: data.id });
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

export const userCredit = async (req, res) => {
  try {
    const { clerkId } = req;
    const user = await userModel.findOne({ clerkId });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.json({ success: true, creditBalance:user.creditBalance ,firstName:user.firstName });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, message: error.message });
  }
};

