import { model, models, Schema } from 'mongoose';

const orderSchema = new Schema(
  {
    client: { type: String, required: true, maxLength: 300 },
    address: { type: String, required: true, maxLength: 100, unique: true },
    products: [{ type: String, required: true }],
    totalPrice: { type: Number, required: true, maxLength: 100, trim: true },
    tel: { type: Number, required: true, maxLength: 15, trim: true },
    orderStatue: {
      payment: Boolean,
      inProgresses: Boolean,
      delivered: Boolean,
      annulation: Boolean,
    },

    note: { type: String, required: true, maxLength: 300 },
  },
  { timestamps: true }
);

export default model('Order', orderSchema) || models.Order;
