// fetching lib
import axios from "axios";

const instance = axios.create({
    baseURL : "http://localhost:5001/softwaresecurityproject-88f88/us-central1/api" //APi Url (cloud function)
})

export default instance;
