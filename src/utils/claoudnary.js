import { v2 as cloudinary } from 'cloudinary'
import fs from "fs" // node me file system milta h fs



cloudinary.config({
    cloud_name: 'process.env.CLOUDINARY_CLOUD_NAME',
    api_key: 'process.env.CLOUDINARY_API_KEY',
    api_secret: 'process.env.CLOUDINARY_API_SECRET'
});

const uploadOnCloudinary = async(localFilePath) => {
    try {
        if (!localFilePath) return null
            //upload file on cloudinary

        const response = await cloudinary.uploader.upload(localFilePath, {
                resource_type: "auto"
            }) // file has been uploaded succesfulll
        console.log("file is uploaded on cloudinary",
            response.url

        );
        return response

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove he locally save temprory file as the upload operation failed

        return null;
    }
}




// cloudinary.uploader
//     .upload("my_image.jpg")
//     .then(result => console.log(result));

export { uploadOnCloudinary }