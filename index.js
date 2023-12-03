import express from "express";
import dotenv from 'dotenv'
import mongoose from "mongoose";
import cors from 'cors'
import cookieParser from 'cookie-parser'
import authRoute from './api/routes/auth.js'
import usersRoute from './api/routes/users.js'
import roomsRoute from './api/routes/rooms.js'
import bookingsRoute from './api/routes/bookings.js'
dotenv.config()

const port = process.env.PORT || 3000

const app = express()

const connect = async () => {

    try {
        await mongoose.connect(process.env.MONGO)
        console.log('Connected to MongoDB');

    } catch (error) {

        console.log('MongoDB Connection Failed');
        throw error
    }
}

app.get('/', (req, res) => {

    res.send("Hello World")
})

// middleware
app.use(cors({
    origin: 'https://travelnest-client.web.app/',
    credentials: true
}))
app.use(cookieParser())
app.use(express.json());
app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api", roomsRoute)
app.use("/api", bookingsRoute)

// Handle Error
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
    });
});

app.listen(port, () => {
    connect()
    console.log("Connect to backend");
})