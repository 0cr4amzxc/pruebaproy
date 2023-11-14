import axios from "axios"

export const getUserRequest = async (users) => {

  return await axios.get("https://pruebaproy-production.up.railway.app/usuario", users)
}

export const createUsuarioRequest = async (users) => {
    return await axios.post("https://pruebaproy-production.up.railway.app/usuario", users)
}

export const deleteUsuarioRequest = async (userId) => {
    try {
      const response = await axios.delete(`https://pruebaproy-production.up.railway.app/usuario/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting user:", error);
      throw new Error("Error deleting user.");
    }
  };