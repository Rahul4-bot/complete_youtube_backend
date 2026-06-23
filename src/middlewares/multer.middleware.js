import multer from "multer"; /// file store krne kr liye middleware ke use me multer ka use hota h


const storage = multer.diskStorage({
    destination: function(req, file, cb) { // file only multer ke pass hi hoga req toh jon se mil jata h
        cb(null, "./public/temp")
    },
    filename: function(req, file, cb) {

        cb(null, file.originalname) // cb callback
    }
})

export const upload = multer({
        storage: storage
    }) // multer server me file save krne me use hota h