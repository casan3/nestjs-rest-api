import { Schema } from 'dynamoose';

export const UserSchema = new Schema(
  {
    userId: {
      type: String,
      hashKey: true,
    },
    relationKey: {
      type: String,
      rangeKey: true,
      index: {
        type: 'global',
        name: 'relationKeyGlobalIndex',
        rangeKey: 'createdAt',
      },
    },
    name: String,
    email: String,
    /** `Cart` */
    currency: String,
    balance: Number,
  },
  { timestamps: true },
);

export const USER_SCHEMA_KEYS = [UserSchema.hashKey, UserSchema.rangeKey];
