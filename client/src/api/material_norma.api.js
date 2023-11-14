import axios from "axios";

export const getMaterialNormaRequest = async (normas) => {
    return await axios.get("https://pruebaproy-production.up.railway.app/norma", normas);
}

export const createMaterialNormaRequest = async (normas) => {
    return await axios.post("https://pruebaproy-production.up.railway.app/norma", normas);
}

export const deleteMaterialNormaRequest = async (normaId) => {
    try {
        const response = await axios.delete(
        `https://pruebaproy-production.up.railway.app/norma/${normaId}`
        );
        return response.data;
    } catch (error) {
        console.log("Error deleting event:", error);
        throw new Error("Error deleting event.");
    }
}

export const getNormaRequest = (id) => {
    return axios.get(`https://pruebaproy-production.up.railway.app/norma/${id}`);
}