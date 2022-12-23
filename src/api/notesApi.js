import axios from "axios";

const notesApi = axios.create({
  baseURL: "http://localhost:3000/notes/",
});

export default notesApi;
