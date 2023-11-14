import axios from "axios";

export const getPruebasRequest = async () => {
    return await axios.get("https://pruebaproy-production.up.railway.app/prueba");
}

export const createPruebaRequest = async (pruebaData) => {
    return await axios.post("https://pruebaproy-production.up.railway.app/prueba", pruebaData);
}

export const deletePruebaRequest = async (pruebaId) => {
    try {
        const response = await axios.delete(
            `https://pruebaproy-production.up.railway.app/prueba/${pruebaId}`
        );
        return response.data;
    } catch (error) {
        console.log("Error deleting prueba:", error);
        throw new Error("Error deleting prueba.");
    }
}