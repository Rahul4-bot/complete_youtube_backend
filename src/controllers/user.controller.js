import {
    asynchandler
} from "../utils/async_handler.js";
const registerUser = asynchandler(async(req, res) => {
    res.status(200).json({
        message: "chai or code"
    })
})


export {
    registerUser
}