import axios from "axios";

const url = "http://localhost:3001";

export const getData = async (type, page) => {
  return axios.get(`${url}/${type}?_page=${page}`);
};
