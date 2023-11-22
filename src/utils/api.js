import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const apiInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${TMDB_TOKEN}`
    }
})

export const fetchDataFromApi = async (url, params) => {
    try {
        const response = await apiInstance.get(url, { params });
        return response.data;
    } catch (error) {
      console.error('Error en fetchDataFromApi:', error);
      throw error; 
    }
  };