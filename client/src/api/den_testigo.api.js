import axios from "axios";

export const getDenTestigoRequest = async (den_testigos) => {
  return await axios.get("http://localhost:4000/den_testigo", den_testigos);
};

export const createDenTestigoRequest = async (den_testigos) => {
  return await axios.post("http://localhost:4000/den_testigo", den_testigos);
};