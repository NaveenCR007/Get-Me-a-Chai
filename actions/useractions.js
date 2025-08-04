"use server"
import { Payment } from "@/models/Payments"
import Razorpay from "razorpay"
import { User } from "@/models/Users"
import mongoose from "mongoose"


export const initiate = async (amount, to_user, paymentform) => {
    await mongoose.connect("mongodb://localhost:27017/GetMeaChai");

    var instance = new Razorpay({key_id : process.env.KEY_ID, key_secret : process.env.KEY_SECRET})

    let options = {
        amount : Number.parseInt(amount),
        currency : "INR"
    }

    let x = await instance.orders.create(options)

    // create a payment object which shows pending status in database
    await Payment.create({oid : x.id, amount: amount, to_user: to_user, name: paymentform.name, message: paymentform.message, status: "pending"});

    return x;
}