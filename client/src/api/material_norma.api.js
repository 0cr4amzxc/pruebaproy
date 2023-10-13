import axios from "axios";

export const getMaterialNormaRequest = async (normas) => {
    return await axios.get("http://localhost:4000/norma", normas);
}

export const createMaterialNormaRequest = async (normas) => {
    return await axios.post("http://localhost:4000/norma", normas);
}

export const deleteMaterialNormaRequest = async (normaId) => {
    try {
        const response = await axios.delete(
        `http://localhost:4000/norma/${normaId}`
        );
        return response.data;
    } catch (error) {
        console.log("Error deleting event:", error);
        throw new Error("Error deleting event.");
    }
}

export const getNormaRequest = (id) => {
    return axios.get(`http://localhost:4000/norma/${id}`);
}