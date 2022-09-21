import mongoose from "mongoose";
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId


export const HouseSchema = new Schema({
  bedrooms: { type: Number, required: true, minlength: 1 },
  bathrooms: { type: Number, required: true, minlength: 1 },
  levels: { type: Number, required: true, minlength: 1 },
  imgUrl: { type: String, default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxDuY_IKEsdyCbdh7IrhzvROPplAMBw1f28Q&usqp=CAU' },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: false },
  sellerId: { type: ObjectId, required: true, ref: 'Account' }
}, { timestamps: true, toJSON: { virtuals: true } })