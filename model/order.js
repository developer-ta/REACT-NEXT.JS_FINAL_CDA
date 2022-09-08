import { model, models, Schema } from 'mongoose';

const orderSchema = new Schema(
  {
    client: { type: String, required: true, maxlength: 300 },
    address: { type: String, required: true, maxlength: 100, unique: true },
    products: [{ type: String, required: true }],
    totalPrice: { type: Number, required: true, maxlength: 100, trimp: true },
    tel: { type: Number, required: true, maxlength: 15, trimp: true },
    orderStatue: {
      payment: Boolean,
      inProgresses: Boolean,
      delivered: Boolean,
      annulation: Boolean,
    },

    note: { type: String, required: true, maxlength: 300 },
  },
  { timestamps: true }
);

export default model('order', orderSchema) || models.order;
