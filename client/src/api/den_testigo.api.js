import axios from "axios";

export const getDenTestigoRequest = async (den_testigos) => {
  return await axios.get("https://pruebaproy-production.up.railway.app/den_testigo", den_testigos);
};

export const createDenTestigoRequest = async (den_testigos) => {
  return await axios.post("https://pruebaproy-production.up.railway.app/den_testigo", den_testigos);
};