import axios from "axios";

export const getTestigoRequest = async (testigos) => {
  return await axios.get("https://pruebaproy-production.up.railway.app/testigo", testigos);
};

export const createTestigoRequest = async (testigos) => {
  return await axios.post("https://pruebaproy-production.up.railway.app/testigo", testigos);
};

export const deleteTestigoRequest = async (testigoId) => {
  try {
    const response = await axios.delete(
      `https://pruebaproy-production.up.railway.app/testigo/${testigoId}`
    );
    return response.data;
  } catch (error) {
    console.log("Error deleting testigo:", error);
    throw new Error("Error deleting testigo.");
  }
};
