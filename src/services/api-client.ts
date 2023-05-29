import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null;
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (params?: {}) => {
    const res = await axiosInstance.get<FetchResponse<T>>(this.endpoint, {
      params,
    });
    return res.data;
  };

  get = async (id: number | string) => {
    const res = await axiosInstance.get<T>(this.endpoint + "/" + id);
    return res.data;
  };
}

export default APIClient;
