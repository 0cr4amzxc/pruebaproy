import axios from "axios"

export const getUserRequest = async (users) => {
    return await axios.get("http://localhost:4000/usuario", users)
}

export const createUsuarioRequest = async (users) => {
    return await axios.post("http://localhost:4000/usuario", users)
}

export const deleteUsuarioRequest = async (userId) => {
    try {
      const response = await axios.delete(`http://localhost:4000/usuario/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting user:", error);
      throw new Error("Error deleting user.");
    }
  };