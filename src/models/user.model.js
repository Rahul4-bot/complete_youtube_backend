import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken" //password unique ke liye
import bcrypt from "bcrypt"

const userSchema = newSchema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    avatar: {
        type: String, //cloudnary service jha video file se ak url deta h
        required: true
    },
    coverImage: {
        type: String,
        required: true,
    },
    watchHistory: [{
        type: Schema.Types.ObjectId,
        ref: "Video"
    }],
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    refreshToken: {
        type: String
    }


}, {
    timestamps: true
})


userSchema.pre("save", async function(next) {
        if (!this.isModified("password")) return next();
        this.password = await bcrypt.hash(this.password, 10)
        next()
    }) // save krne pr kya kya chalan h middleware password ko encrypt kr rhe h modification ke according


userSchema.methods.isPasswordCorrect = async function(password) {
        return await bcrypt.compare(password, this.password)
    } // password check krna ka method h  jo use hota h yeah isliye check kr rhe h kyuki password encrypted h or check krna pdega shi h ya glt or bcrypt method provide krta h

userSchema.methods.generateAccessToken = function() {
    jwt.sign({
                _id: this.id,
                email: this.email,
                username: this.username,
                fullname: this.fullname,
            }, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRY
            }




        ) //yeah jwt me token generate krta h or yeah payzode pass krna hota h jo chije database se aa rhi h)
}

userSchema.methods.generateRefreshToken = function() {
    jwt.sign({
                _id: this.id,

            }, process.env.REFRESH_TOKEN_SECRET, {
                expiresIn: process.env.REFRESH_TOKEN_EXPIRY
            }




        ) //yeah jwt me token generate krta h or yeah payzode pass krna hota h jo chije database se aa rhi h)
}

userSchema.methods.generateRefreshToken = function() {}

export const User = mongoose.model("User", userSchema)