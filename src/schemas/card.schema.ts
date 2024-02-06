import { Schema } from "mongoose";

export const CardSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    listRef: {
        type: Schema.Types.ObjectId,
        ref: 'List'
    },
    members: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }],
    dueDate: {
        type: Date
    },
    attachments: [{
        filename: {
            type: String
        }
    }],
    cover: {
        type: String,
        default: '#fff'
    }
}, {
    versionKey: false,
    timestamps: false
})