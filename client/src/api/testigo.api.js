import axios from "axios";

export const getTestigoRequest = async (testigos) => {
  return await axios.get("http://localhost:4000/testigo", testigos);
};

export const createTestigoRequest = async (testigos) => {
  return await axios.post("http://localhost:4000/testigo", testigos);
};

export const deleteTestigoRequest = async (testigoId) => {
  try {
    const response = await axios.delete(
      `http://localhost:4000/testigo/${testigoId}`
    );
    return response.data;
  } catch (error) {
    console.log("Error deleting testigo:", error);
    throw new Error("Error deleting testigo.");
  }
};
