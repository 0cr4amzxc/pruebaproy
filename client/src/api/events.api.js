import axios from "axios";

export const getEventRequest = async (events) => {
  return await axios.get("https://pruebaproy-production.up.railway.app/evento", events);
};

export const createEventRequest = async (events) => {
  return await axios.post("http://localhost:4000/evento", events);
};

export const deleteEventRequest = async (eventId) => {
  try {
    const response = await axios.delete(
      `https://pruebaproy-production.up.railway.app/evento/${eventId}`
    );
    return response.data;
  } catch (error) {
    console.log("Error deleting event:", error);
    throw new Error("Error deleting event.");
  }
};
