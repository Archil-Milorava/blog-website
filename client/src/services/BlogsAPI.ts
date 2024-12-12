import axios from "axios";

export interface BlogInterface {
  _id: string;
  title: string;
  content: string;
  image: string;
  createdAt: string;
}

export const fetchBlogs = async (): Promise<BlogInterface[]> => {
  try {
    const response = await axios.get("http://localhost:8000/api/v1/allBlogs");
    return response.data.blogs;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "An unexpected error occurred."
    );
  }
};
