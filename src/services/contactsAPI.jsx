import axios from "axios";
import { BASE_URL } from "./apiConstants";

axios.defaults.baseURL = BASE_URL;

export async function fetchContactData() {
  const { data } = await axios.get("/contacts");
  return data;
}

export async function postContactData(contactData) {
  const { data } = await axios.post("/contacts", contactData);
  return data;
}

export async function deleteContactData(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
}

async function patchContactData(contactId, { name, number }) {
  const { data } = await axios.patch(`/contacts/${contactId}`, {
    name,
    number,
  });
  return data;
}

const contactsAPI = {
  fetchContactData,
  postContactData,
  deleteContactData,
  patchContactData,
};

export default contactsAPI;
