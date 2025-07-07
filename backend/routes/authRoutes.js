import express  from "express";
import { registerUser, loginUser, getUserProfile}  from "../controllers/authController.js";
import {protect} from "../middlewares/authMiddleware.js";
import upload from "../middlewares/uploadMiddleware.js";
const router = express.Router();

// Auth Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
console.log("protect is", typeof protect, ";  getUserProfile is", typeof getUserProfile);

router.get("/profile", protect, getUserProfile);

router.post("/upload-image", upload.single("image"), (req, res)=> {
    if(!req.file){
        return res.status(400).json({message: "No file uploaded"});
    }
    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${
        req.file.filename
    }`
    res.status(200).json({imageUrl});
});

export default router;