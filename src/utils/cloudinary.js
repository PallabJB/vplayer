import { v2 as cloudinary } from "cloudinary";

import fs from "fs";

// Configuration
cloudinary.config(
    { 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET 
    }
);

 // Upload an image
 const uploadCloudinary = async (localFilePath) => {

    try{
        if(!localFilePath) return null

        // UPLOAD THE FILE TO CLOUDINARY
        const response = await cloudinary.uploader.upload
        (localFilePath, {
            resource_type:"auto" // BY USING "auto" WE CAN UPLOAD ANY TYPE OF FILE SUCH AS VIDEO FILE, IMAGE FILE, AUDIO FILE... etc.
        })
        // FILE HAS BEEN UPLOADED SUCCESSFULLY 
        console.log("File has been successfully uploaded to cloudinary", response.url)
        return response
    }
    // IF FILE NOT UPLOADED ON CLOUDINARY THEN REMOVE/DELETE THE FILE/IMAGE
    catch (error){
        fs.unlinkSync(localFilePath) 
        return null

    }
 } 
 export {uploadCloudinary}

 


