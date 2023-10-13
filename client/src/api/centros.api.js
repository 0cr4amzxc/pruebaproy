import axios from "axios";

export const getCentroRequest = async (centros) => {
    return await axios.get("http://localhost:4000/centroAyuda", centros);
}

export const createCentroRequest = async (centros) => {
    return await axios.post("http://localhost:4000/centroAyuda", centros);
}

export const deleteCentroRequest = async (centroId) => {
    try {
        const response = await axios.delete(
            `http://localhost:4000/centroAyuda/${centroId}`
        );
        return response.data;
    } catch (error) {
        console.log("Error deleting centro:", error);
        throw new Error("Error deleting centro.");
    }
}