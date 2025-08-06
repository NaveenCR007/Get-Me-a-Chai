"use server"
import mongoose from "mongoose";
import Razorpay from "razorpay";
import { Payment } from "@/models/Payments";

export const initiate = async (amount, to_user, paymentform) => {
  await mongoose.connect("mongodb://localhost:27017/GetMeaChai");

  const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  const options = {
    amount: amount * 100,
    currency: "INR",
  };

  const order = await instance.orders.create(options);

  await Payment.create({
    order_id: order.id,
    amount,
    to_user,
    name: paymentform.name,
    message: paymentform.message,
    status: false,
  });

  return order;
};
