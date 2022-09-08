import { model, models, Schema } from 'mongoose';

const pizzaSchema = new Schema(
  {
    news: { type: String, required: true, maxlength: 100 },
    title: { type: String, required: true, maxlength: 100, unique: true },
    type: { meat: Boolean, fish: Boolean, withoutMeat: Boolean },
    price: { type: Number, required: true, maxlength: 100, trimp: true },
    size: [String],
    desc: { type: String, required: true, maxlength: 300 },
    img: { type: String, required: true, maxlength: 500 },
    promo: { type: Number, required: true, maxlength: 20, default: 0 },
    ingredient: [String],
    extra: [String],
  },
  { timestamps: true }
);

export default model('pizza', pizzaSchema) || models.pizza;
