import { AxiosError, AxiosResponse } from "axios";
import { axios } from "../Axios.ts";

export const useAPI = (urlEndpoint) => {
  return {
    getEndpoint: () => {
      return axios
        .get(urlEndpoint)
        .then((response: AxiosResponse) => {
          return response.data;
        })
        .catch((error: AxiosError) => {
          throw error;
        });
    },

    postEndpoint: (token: string, data: any) => {
      return axios
        .post(urlEndpoint, { data })
        .then((response: AxiosResponse) => {
          return response.data;
        })
        .catch((error: AxiosError) => {
          throw error;
        });
    },

    putEndpoint: (token: string, data: any) => {
      return axios.put(urlEndpoint, { data }).catch((error: AxiosError) => {
        throw error;
      });
    },

    deleteEndpoint: (token: string, data: any) => {
      return axios.delete(urlEndpoint, { data }).catch((error: AxiosError) => {
        throw error;
      });
    },
  };
};
