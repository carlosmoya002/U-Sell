import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  addEvent,
  updateEvent,
  getEvent,
  getAllEvents,
  getEventsByField,
  deleteEvent,
  getEventsByUser,
} from "../controllers/eventController.js";

const router = express.Router();

router.post("/addEvent", protect, addEvent);
router.put("/updateEvent", protect, updateEvent);
router.get("/getEvent", getEvent);
router.get("/user", protect, getEventsByUser);
router.get("/", getAllEvents);
router.get("/:field/:value", getEventsByField);
router.delete("/deleteEvent", protect, deleteEvent);

export default router;
