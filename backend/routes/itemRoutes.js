import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  addItem,
  getItem,
  getAllItems,
  getItemsByField,
  getItemsByUser,
  getItemById, // Add this import
} from "../controllers/itemController.js";

const router = express.Router();

router.post("/addItem", protect, addItem);
router.get("/getItem", getItem);
router.get("/user", protect, getItemsByUser);
router.get("/", getAllItems);
router.get("/:field/:value", getItemsByField);
router.get("/:id", getItemById); // Add this route

export default router;
