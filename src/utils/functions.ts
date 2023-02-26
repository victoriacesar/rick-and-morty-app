import axios from "axios";

export const fetchResident = async (residentURL: string) => {
  const { data } = await axios.get(residentURL);
  
  return data;
};
