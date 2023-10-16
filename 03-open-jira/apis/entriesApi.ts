import axios from "axios";

const entriesApi = axios.create({
  baseURL: "/api/entries",
});

export default entriesApi;
