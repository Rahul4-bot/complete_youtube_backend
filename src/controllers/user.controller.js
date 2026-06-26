import {
    asynchandler
} from "../utils/async_handler.js";
import {
    ApiError
} from "../utils/APIerror.js";
import { use } from "react";
import { User } from "../models/user.model.js";
import { multer } from "multer";
import { uploadOnCloudinary } from "../utils/claoudnary.js";
import { ApiResponse } from "../utils/APiresponse.js"

const registerUser = asynchandler(async(req, res) => {
    // get user details from fontend
    // validation - not empty
    // check if user already exist username,email
    // check for images , check for avatar
    // upload them to cloudnairy, avatar
    // create user object :- create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res



    const { fullName, email, username, password } = req.body(
            console.log("email :", email)) // frontend se data lena


    if ([fullName, email, username, password].some((field) => fiel.trim() === "")) {
        throw new ApiError(400, "All fields are required")
    } // i koi bhi value null na ho
    // jaydatar data body se aata h

    const existedUser = User.findOne({
            $or: [{ username }, { email }]
        }) // new function find one for check user exist or not


    if (existedUser) {
        throw new ApiError(409, "user with email or username")
    } // user exist krta h ya nhi


    const avatarLocalPath = req.files.avatar[0].path; // req.files multer deta h
    const coverImageLocalPath = req.files.coverImage[0].path; // file path store jr liya ab cloudnairy pe upload krenge abhi local path pe h

    if (!avatarLocalPath) {
        throw newApiError('400', 'avatar file is required')
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = uploadOnCloudinary(coverImageLocalPath)

    if (!avatar) {
        throw newApiError('400', 'avatar file is required');
    }

    // create an object or db me entry kkrdo
    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage.url || "",
        email,
        password,
        username: username.toLowerCase()
    })

    const createduser = await User.finndById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new Apierror(500, "something went wrong while registering the user")
    }
    return res.status(201).json(new ApiResponse(200, createduser, "user registered Succesfully"))

})


export {
    registerUser
}