import asyncHandler from "express-async-handler";
import Item from "../models/itemModel.js";
import { upload } from "../middleware/fileUploadMiddleware.js";

// @desc    Add item with image upload
// @route   POST /api/items/addItem
// @access  Private
const addItem = asyncHandler(async (req, res) => {
  upload.single("image")(req, res, async (err) => {
    if (err) {
      res.status(400);
      throw new Error("Image upload failed");
    }

    const { name, price, description, condition, category } = req.body;

    // Get the uploaded image file name with extension
    const imageName = req.file ? req.file.filename : undefined;

    // Get the user ID from the authenticated request
    const userId = req.user._id;

    const item = await Item.create({
      name,
      price,
      description,
      condition,
      category,
      image: imageName,
      user: userId, // Store the user's ID with the item data
    });

    if (item) {
      res.status(201).json({
        _id: item._id,
        name: item.name,
        price: item.price,
        description: item.description,
        condition: item.condition,
        category: item.category,
        image: item.image,
        user: item.user, // Include the user ID in the response for reference
      });
    } else {
      res.status(400);
      throw new Error("Invalid item data");
    }
  });
});

// @desc    Get item
// @route   GET /api/items/getItem
// @access  Public
const getItem = asyncHandler(async (req, res) => {
  const items = await Item.find({});

  if (items) {
    res.json(items);
  } else {
    res.status(404);
    throw new Error("No items found");
  }
});

// @desc    Get all items
// @route   GET /api/items/
// @access  Public
const getAllItems = asyncHandler(async (req, res) => {
  const items = await Item.find({}).sort({ createdAt: -1 });
  res.status(200).json(items);
});

// @desc    Get items by field value (including category and condition)
// @route   GET /api/items/:field/:value
// @access  Public
const getItemsByField = asyncHandler(async (req, res) => {
  const { field, value } = req.params;

  try {
    let query = {};

    switch (field) {
      case "name":
        query = { name: { $regex: new RegExp(value, "i") } };
        break;
      case "category":
        query = { category: { $regex: new RegExp(value, "i") } };
        break;
      case "condition":
        query = { condition: { $regex: new RegExp(value, "i") } };
        break;
      // Add more cases for other fields as needed
      default:
        return res.status(400).json({ error: "Invalid field" });
    }

    const items = await Item.find(query);
    res.status(200).json(items);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// @desc    Get items by user ID
// @route   GET /api/items/user
// @access  Private
const getItemsByUser = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  const items = await Item.find({ user: userId });

  if (items) {
    res.json(items);
  } else {
    res.status(404);
    throw new Error("No items found for this user");
  }
});

export { addItem, getItem, getAllItems, getItemsByField, getItemsByUser };
