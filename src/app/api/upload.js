import cloudinary from "cloudinary";
import formidable from "formidable";

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

// API Route to handle file upload
export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  const form = new formidable.IncomingForm();
  
  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).send("Error in file upload");
    
    // Upload file to Cloudinary
    const file = files.file[0];
    const uploadedFile = await cloudinary.uploader.upload(file.filepath, {
      resource_type: file.mimetype.startsWith("image") ? "image" : "video",
    });
    
    // Return the URL of the uploaded file
    res.status(200).json({ url: uploadedFile.secure_url });
  });
}