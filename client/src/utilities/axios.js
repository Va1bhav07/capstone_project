import axios from "axios";
import { toast } from "react-toastify";

const apiUrl = axios.create({
  baseURL: "http://localhost:4000",
});

const isStatusInRange = (status, start, end) =>
  status >= start && status <= end;

const checkResponse = (response) => {
  console.log(response);
  if (isStatusInRange(response.status, 200, 299)) {
    const message = response?.data?.message || "Request successful";
    toast.success(message);
    return response.data;
  } else {
    throw new Error(response);
  }
};

class Axios {
  async get(ENDPOINT) {
    try {
      const response = await apiUrl.get(ENDPOINT);
      checkResponse(response);
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message);
    }
  }

  async post(ENDPOINT, data) {
    try {
      const response = await apiUrl.post(`${ENDPOINT}`, data);
      return checkResponse(response);
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message);
    }
  }

  async patch(ENDPOINT, data) {
    try {
      const response = await apiUrl.patch(ENDPOINT, data);
      return checkResponse(response);
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message);
    }
  }

  async delete(ENDPOINT) {
    try {
      const response = await apiUrl.delete(ENDPOINT);
      return checkResponse(response);
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message);
    }
  }
}

export const apiAxios = new Axios();
