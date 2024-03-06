import axios from "axios";
import { toast } from "react-toastify";

const apiUrl = axios.create({
  baseURL: "http://localhost:4000",
});

const isStatusInRange = (status, start, end) =>
  status >= start && status <= end;

const handleResponse = (response, id) => {
  console.log(response);
  if (isStatusInRange(response.status, 200, 299)) {
    const message = response?.data?.message || "Request successful";
    // toast.success(message);
    toast.update(id, {
      render: message,
      type: "success",
      isLoading: false,
      autoClose: 2000,
    });
    return response.data;
  } else {
    throw new Error(response);
  }
};

const handleError = (error, id) => {
  console.error(error);
  const message = error?.response?.data?.message || "somthing went wrong";

  // toast.error(message);
  toast.update(id, {
    render: message,
    type: "error",
    isLoading: false,
    autoClose: 2000,
  });
};

class Axios {
  async get(ENDPOINT) {
    const id = toast.loading("Please wait...");
    try {
      const response = await apiUrl.get(ENDPOINT);
      handleResponse(response, id);
    } catch (error) {
      handleError(error, id);
    }
  }

  async post(ENDPOINT, data) {
    const id = toast.loading("Please wait...");
    try {
      const response = await apiUrl.post(`${ENDPOINT}`, data);
      return handleResponse(response, id);
    } catch (error) {
      handleError(error, id);
    }
  }

  async patch(ENDPOINT, data) {
    const id = toast.loading("Please wait...");
    try {
      const response = await apiUrl.patch(ENDPOINT, data);
      return handleResponse(response, id);
    } catch (error) {
      handleError(error, id);
    }
  }

  async delete(ENDPOINT) {
    const id = toast.loading("Please wait...");
    try {
      const response = await apiUrl.delete(ENDPOINT);
      return handleResponse(response, id);
    } catch (error) {
      handleError(error, id);
    }
  }
}

export const apiAxios = new Axios();
