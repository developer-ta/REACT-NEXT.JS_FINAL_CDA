import { model, models, Schema } from 'mongoose';
import { isEmail } from 'validator';
import bcrypt from 'bcrypt';
const adminSchema = new Schema(
  {
    adminPseudo: { type: String, required: true, maxLength: 300, unique: true, trim: true },
    email: {
      type: String,
      required: true,
      maxLength: 100,
      unique: true,
      validate: { isEmail },
      lowerCase: true,
    },
    password: { type: String, required: true, trim: true, minLength: 8 },
  },
  { timestamps: true }
);
adminSchema.pre('save', async function (next) {
  const slat = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, slat);
  next();
});
export default model('Admin', adminSchema) || models.Admin;
