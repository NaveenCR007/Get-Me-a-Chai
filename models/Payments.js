import mongoose from "mongoose";

const paymentSchema = mongoose.Schema({
    name: { type: String, required: true },
    to_user: { type: String, required: true },
    order_id: { type: String },
    amount: { type: Number, required: true },
    message: { type: String },
    status: { type: Boolean, required: true }
})

// if the model already exist, then use it otherwise create new one
export const Payment = mongoose.models.Payment || mongoose.model("Payment", paymentSchema)