import axios from "axios";

export const getDenunciaRequest = async (denuncias) => {
    return await axios.get("http://localhost:4000/denuncia", denuncias);
}

export const createDenunciaRequest = async (denuncias) => {
    return await axios.post("http://localhost:4000/denuncia", denuncias);
}

export const deleteDenunciaRequest = async (denunciaId) => {
    try {
        const response = await axios.delete(
            `http://localhost:4000/denuncia/${denunciaId}`
        );
        return response.data;
    } catch (error) {
        console.log("Error deleting denuncia:", error);
        throw new Error("Error deleting denuncia.");
    }
}