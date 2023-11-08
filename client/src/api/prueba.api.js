import axios from "axios";

export const getPruebasRequest = async () => {
    return await axios.get("http://localhost:4000/prueba");
}

export const createPruebaRequest = async (pruebaData) => {
    return await axios.post("http://localhost:4000/prueba", pruebaData);
}

export const deletePruebaRequest = async (pruebaId) => {
    try {
        const response = await axios.delete(
            `http://localhost:4000/prueba/${pruebaId}`
        );
        return response.data;
    } catch (error) {
        console.log("Error deleting prueba:", error);
        throw new Error("Error deleting prueba.");
    }
}