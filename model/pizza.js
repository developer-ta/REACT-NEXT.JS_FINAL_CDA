import { model, models, Schema } from 'mongoose';

const pizzaSchema = new Schema(
  {
    news: { type: String, maxLength: 100, default: '' },
    title: { type: String, required: true, maxLength: 100, unique: true },
    type: { meat: Boolean, fish: Boolean, withoutMeat: Boolean },
    price: { type: Number, required: true, maxLength: 100, trim: true },
    size: [String],
    desc: { type: String, maxLength: 1000 },
    img: { type: String, required: true, maxLength: 2024, trim: true },
    promo: { type: Number, maxLength: 100, default: 0, trim: true },
    ingredient: [String],
    extra: [String],
  },
  { timestamps: true }
);

export default model('Pizza', pizzaSchema) || models.Pizza;
