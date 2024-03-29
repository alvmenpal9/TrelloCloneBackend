import { Schema } from 'mongoose';

export const CardSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    listRef: {
      type: Schema.Types.ObjectId,
      ref: 'List',
    },
    members: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      },
    ],
    dueDate: {
      type: Date,
    },
    cover: {
      type: String,
      default: '#000',
    },
    status: {
      type: String,
      default: 'active',
    },
    taskList: [
      {
        task: {
          type: String,
        },
      },
    ],
  },
  {
    versionKey: false,
    timestamps: false,
  },
);
