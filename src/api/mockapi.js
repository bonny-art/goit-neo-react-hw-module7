import axios from "axios";

axios.defaults.baseURL = "https://683b7f1828a0b0f2fdc4ccd6.mockapi.io/api/v1";

export const getContacts = async () => {
  const { data } = await axios("/contacts");
  return data;
};

export const postContact = async (credentials) => {
  const { data } = await axios.post("/contacts", credentials);
  return data;
};

export const deleteContactById = async (id) => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
