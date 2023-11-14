import axios from "axios";

export const getMaterialEduRequest = async (edus) => {
  return await axios.get("https://pruebaproy-production.up.railway.app/edu", edus);
};

export const createMaterialEduRequest = async (edus) => {
  return await axios.post("https://pruebaproy-production.up.railway.app/edu", edus);
};

export const deleteMaterialEduRequest = async (eduId) => {
    try {
        const response = await axios.delete(
        `https://pruebaproy-production.up.railway.app/edu/${eduId}`
        );
        return response.data;
    } catch (error) {
        console.log("Error deleting event:", error);
        throw new Error("Error deleting event.");
    }
}

export const getEduRequest = (id) => {
  return axios.get(`https://pruebaproy-production.up.railway.app/edu/${id}`);
};