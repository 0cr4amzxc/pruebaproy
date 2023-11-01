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

/*
  import axios from "axios";

  export const getUserRequest = async (users, userRole) => {
    // Envía el rol del usuario en la solicitud
    console.log("desde la api")
    console.log(userRole)
    const config = {
      headers: {
        'Authorization': `Bearer ${userRole}`,
      },
    };
  
    return await axios.get("http://localhost:4000/usuario", users, config);
  }
  
  export const createUsuarioRequest = async (users, userRole) => {
    // Envía el rol del usuario en la solicitud
    const config = {
      headers: {
        'Authorization': `Bearer ${userRole}`,
      },
    };
  
    return await axios.post("http://localhost:4000/usuario", users, config);
  }
  
  export const deleteUsuarioRequest = async (userId, userRole) => {
    try {
      // Envía el rol del usuario en la solicitud
      const config = {
        headers: {
          'Authorization': `Bearer ${userRole}`,
        },
      };
  
      const response = await axios.delete(`http://localhost:4000/usuario/${userId}`, config);
      return response.data;
    } catch (error) {
      console.error("Error deleting user:", error);
      throw new Error("Error deleting user.");
    }
  };
  */