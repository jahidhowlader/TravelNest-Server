import Room from "../models/Room.js";

// CHECK AAVAIABLE ROOM 
export const updateRoomAvailability = async (req, res, next) => {

    try {

        await Room.findByIdAndUpdate(req.params.id, {
            $push: {
                unavailableDates: req.body.dates
            }
        });

        res.status(200).json("Successful Booking!!.");

    } catch (err) {
        next(err);
    }
};

// GET SINGLE ROOMS
export const getRoom = async (req, res, next) => {

    try {
        const room = await Room.findById(req.params.id);
        res.status(200).json(room);

    } catch (err) {
        next(err);
    }
};

// GET ALL ROOM IN HOTEL
export const getRooms = async (req, res, next) => {

    const query = req.query

    console.log(query);

    try {

        if (query.room === 'all') {

            const rooms = await Room.find();
            res.status(200).json(rooms);

        } else {

            const rooms = await Room.find({
                $or: [
                    { beds: { $lte: +req.query.room } },
                    { adult_capacity: { $lte: +req.query.adult } },
                    { children_capacity: { $lte: +req.query.children } }
                ]
            });

            // console.log(roo);

            res.status(200).json(rooms);
        }

    } catch (err) {
        next(err);
    }
};