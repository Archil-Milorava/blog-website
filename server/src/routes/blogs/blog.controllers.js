import Blog from "../../models/blog.model.js";
import mongoose from "mongoose";

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      blogs,
    });
  } catch (error) {
    console.log("error from get all blogs", error);
    res.status(500).json({
      message: "error from internal server",
    });
  }
};

export const getBlog = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid blog ID format",
      });
    }

    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(400).json({
        message: "Blog not found",
      });
    }

    res.status(200).json({
      blog,
    });
  } catch (error) {
    console.log("error from get single blog", error);
    res.status(500).json({
      message: "error from internal server",
    });
  }
};

export const createBlog = async (req, res) => {
  try {
    const { title, content, image } = req.body;

    if (!title || (!content && !image)) {
      return res.status(400).json({
        message: "title and the content are required",
      });
    }

    const newBlog = new Blog({
      title,
      content,
      image,
    });

    await newBlog.save();

    res.status(201).json({
      message: "Blog created successfully",
      newBlog,
    });
  } catch (error) {
    console.log("error from create blog", error);
    res.status(500).json({
      message: "error from internal server",
    });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(400).json({
        message: "Blog not found",
      });
    }

    await Blog.findByIdAndDelete(id);

    res.status(200).json({
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.log("error from delete blog", error);
    res.status(500).json({
      message: "error from internal server",
    });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(400).json({
        message: "Blog not found",
      });
    }

    const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(201).json({
      message: "Blog updated successfully",
      updatedBlog,
    });
  } catch (error) {
    console.log("error from update blog", error);
    res.status(500).json({
      message: "error from internal server",
    });
  }
};
