import { v2 as cloudinary } from "cloudinary";
import { tracingChannel } from "diagnostics_channel";
import dotenv from "dotenv";
import fs from "fs";
import { takeCoverage } from "v8";

dotenv.config({path:'./env'}) 


cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        // upload file on Cloudinary

        const response = await cloudinary.uploader.upload(localFilePath,  {
            resource_type: auto
        })

        // file has been uploaded successfully 
        console.log("file has been uploaded on cloudinary",response)
        return response

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as upload op failed
    }
}

export { uploadOnCloudinary };  