import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  addItem,
  getItem,
  getAllItems,
  getItemsByField,
  getItemsByUser,
} from "../controllers/itemController.js";

const router = express.Router();

router.post("/addItem", protect, addItem);
router.get("/getItem", getItem);
router.get("/user", protect, getItemsByUser);
router.get("/", getAllItems);
router.get("/:field/:value", getItemsByField);

export default router;
