import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, IconButton, DialogContent, DialogTitle } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { addContact, editContact } from "../redux/contacts/contactsOperations";
import { getContacts } from "../redux/contacts/contactsSelectors";
import { getDuplicateContact } from "../utils/getDublicateContacts";
import { theme } from "../common/theme";
import ContactForm from "./ContactForm";
import ContactNotifications from "./ContactNotification";

const AddContactModalCommonStyles = {
  backgroundColor: theme.palette.background.default,
};
export default function ContactModal({
  isOpen,
  onClose,
  currentContactId,
  setCurrentContactId,
}) {
  const [isDuplicateContact, setIsDuplicateContact] = useState(null);
  const [isContactSaved, setIsContactSaved] = useState(false);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onAddContactModalClose = () => {
    onClose(false);
    setIsDuplicateContact(null);
    setCurrentContactId(null);
    setIsContactSaved(false);
  };

  const isNewContact = !currentContactId;

  const onFormSubmit = (data) => {
    const duplicateContact = getDuplicateContact(
      contacts,
      data.name,
      data.number
    );
    setIsDuplicateContact(duplicateContact);

    if (!isNewContact) {
      dispatch(
        editContact({
          id: currentContactId,
          ...data,
        })
      );
      onAddContactModalClose()
      return;
    }

    if (!duplicateContact) {
      dispatch(addContact(data));
      setIsContactSaved(true);
    }
  };

  return (
    <>
      <Dialog open={isOpen} onClose={onAddContactModalClose} fullWidth>
        <IconButton
          aria-label="close"
          onClick={onAddContactModalClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.primary.main,
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogTitle
          id="add-edit-contact-form-title"
          sx={{
            ...AddContactModalCommonStyles,
            color: theme.palette.primary.main,
          }}
        >
          {isNewContact ? "Adding contact" : "Editing contact"}
        </DialogTitle>
        <DialogContent
          sx={{
            ...AddContactModalCommonStyles,
          }}
        >
          <ContactForm
            onSubmit={onFormSubmit}
            currentContactId={currentContactId}
            isContactSaved={isContactSaved}
            setIsContactSaved={setIsContactSaved}
            isNewContact={isNewContact}
          />
          <ContactNotifications
            currentContactId={currentContactId}
            isDuplicateContact={isDuplicateContact}
            contacts={contacts}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
