import axios from "axios";

export const getMaterialEduRequest = async (edus) => {
  return await axios.get("http://localhost:4000/edu", edus);
};

export const createMaterialEduRequest = async (edus) => {
  return await axios.post("http://localhost:4000/edu", edus);
};

export const deleteMaterialEduRequest = async (eduId) => {
    try {
        const response = await axios.delete(
        `http://localhost:4000/edu/${eduId}`
        );
        return response.data;
    } catch (error) {
        console.log("Error deleting event:", error);
        throw new Error("Error deleting event.");
    }
}
