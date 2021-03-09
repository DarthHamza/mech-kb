import axios from "axios";

const instance = axios.create({
  baseURL: "https://mech-kb-be-qqu7e.ondigitalocean.app",
});

export default instance;
