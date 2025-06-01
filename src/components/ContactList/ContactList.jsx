import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import List from "../List/List";
import ListItem from "../ListItem/ListItem";
import { getFilteredContacts } from "../../utils/getFilteredContacts";
import { selectContacts } from "../../redux/contacts/contactsSlice";
import { selectNameFilter } from "../../redux/filters/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const query = useSelector(selectNameFilter);

  const filteredContacts = getFilteredContacts(contacts, query);

  return (
    <List>
      {contacts.length !== 0 &&
        filteredContacts.map((contact) => (
          <ListItem key={contact.id}>
            <Contact data={contact} />
          </ListItem>
        ))}
    </List>
  );
};

export default ContactList;
