import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import addClassNames from '../../utils/addClassNames';
import style from '../ContactsList/ContactsList.module.css'
import { deleteContact, fetchContacts } from '../../redux/contacts/contactsOperations'
import IconButton, {
  deleteContactBtnClassNames,
} from "../IconButton/IconButton";
import { ReactComponent as IconCross } from '../../image/cross.svg';
import { getFilteredContacts } from '../../redux/contacts/contactsSelectors';



const ContactsList = () => {
  const contactsListNames = addClassNames('list');
  const contactNameNames = addClassNames('link');

  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const onDeleteContactButtonClick = (id) => dispatch(deleteContact(id));

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={contactsListNames}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={style.contactsList}>
          <p>{name} - </p>
          <a href={`telephone: ${number}`} className={contactNameNames}>
            {number}
          </a>

          <IconButton
            type="button"
            ariaLabel="Delete contact button"
            width="40"
            height="40"
            onClick={() => onDeleteContactButtonClick(id)}
            className={deleteContactBtnClassNames}
          >
            <IconCross width="20" height="20" />
          </IconButton>

          {/* <button
            className={style.contactsButton}
            type="button"
            onClick={() => deleteContactsButton(id)}
            aria-label="Delete contact button"
          >
            delete
          </button> */}
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
