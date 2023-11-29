import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
    {
        roomNumbers: {
            type: String,
            required: true,
        },
        unavailableDates: {
            type: [Date]
        },
        title: {
            type: String,
            required: true,
        },
        size: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        adult_capacity: {
            type: String,
            required: true,
        },
        children_capacity: {
            type: String,
            required: true,
        },
        beds: {
            type: String,
            required: true,
        },
        bathroom: {
            type: String,
            required: true,
        },
        photos: {
            type: [String],
        },
        description: {
            type: String,
            required: true,
        },
        room_facilities: {
            type: [String],
        },
        price: {
            type: Number,
            required: true,
        },
        maxPeople: {
            type: Number,
            required: true,
        },
        rating: {
            type: Number,
            min: 0,
            max: 5,
        },
        featured: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);