import axios from "axios";

export const getCentroRequest = async (centros) => {
    return await axios.get("https://pruebaproy-production.up.railway.app/centroAyuda", centros);
}

export const createCentroRequest = async (centros) => {
    return await axios.post("https://pruebaproy-production.up.railway.app/centroAyuda", centros);
}

export const deleteCentroRequest = async (centroId) => {
    try {
        const response = await axios.delete(
            `https://pruebaproy-production.up.railway.app/centroAyuda/${centroId}`
        );
        return response.data;
    } catch (error) {
        console.log("Error deleting centro:", error);
        throw new Error("Error deleting centro.");
    }
}