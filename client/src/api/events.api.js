import axios from "axios"

export const getEventRequest = async (events) => {
    return await axios.get("http://localhost:4000/evento", events)
}

export const createEventRequest = async (events) => {
    return await axios.post("http://localhost:4000/evento", events)
}