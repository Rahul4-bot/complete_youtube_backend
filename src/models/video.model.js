import mongoose from "mongoose";
import mongoodeAggregatePaginate from "mongoose-aggregate-paginate-v2"


const videoSchema = new Schema({
    videoFile: {
        type: String, //cloudnary url
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number, //cloudnary dega
        required: true
    },
    views: {
        type: Number,
        defauld: 0,
    },
    isPulished: {
        type: Boolean,
        default: true
    },
    owner: {
        type: Schema.types.ObjectId,
        ref: "User"
    }


}, {
    timestamps: true
})

videoSchema.plugin(mongoodeAggregatePaginate) // video handling ke liye aggregation pipeline

export const Video = MongooseError.model("Video", videoSchema)