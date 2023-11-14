import axios from "axios";

export const getDenunciaRequest = async (denuncias) => {
    return await axios.get("https://pruebaproy-production.up.railway.app/denuncia", denuncias);
}

export const createDenunciaRequest = async (denuncias) => {
    return await axios.post("https://pruebaproy-production.up.railway.app/denuncia", denuncias);
}

export const deleteDenunciaRequest = async (denunciaId) => {
    try {
        const response = await axios.delete(
            `https://pruebaproy-production.up.railway.app/denuncia/${denunciaId}`
        );
        return response.data;
    } catch (error) {
        console.log("Error deleting denuncia:", error);
        throw new Error("Error deleting denuncia.");
    }
}