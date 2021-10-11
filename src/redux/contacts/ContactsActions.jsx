import { createAction } from "@reduxjs/toolkit";

const changeFilter = createAction('contacts/changeFilter');

export { changeFilter };

// export const removeContact = createAction("REMOVE_CONTACT");
// export const setFilter = createAction("SET_FILTER");
// export const addContact = createAction("ADD_CONTACT");
