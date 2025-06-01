import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import List from "../List/List";
import ListItem from "../ListItem/ListItem";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contacts/contactsSlice";

import { BarLoader } from "react-spinners";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <>
      {contacts.length !== 0 && (
        <List>
          {contacts.map((contact) => (
            <ListItem key={contact.id}>
              <Contact data={contact} />
            </ListItem>
          ))}
        </List>
      )}

      {loading && (
        <div className={styles.loaderWrapper}>
          <BarLoader color="#FFF" width={300} />
        </div>
      )}

      {error && <p className={styles.error}>{error}</p>}
    </>
  );
};

export default ContactList;
