import mongoose from "mongoose";

// Schema
const bannerSchema = mongoose.Schema({
  image: String,
  description: String,
  title: String
}, { timestamps: true });

// Model
const Banner = mongoose.model("Banner", bannerSchema);
export default Banner;
