import { FaAddressBook } from "react-icons/fa";

import ContactList from "./components/ContactList/ContactList";
import Container from "./components/Container/Container";
import Section from "./components/Section/Section";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { fetchContactsThunk } from "./redux/contacts/contactsOps.js";

import style from "./App.module.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <>
      <Section>
        <Container>
          <div className={style.container}>
            <FaAddressBook className={style.icon} />
            <h1 className={style.title}>Phonebook</h1>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <ContactForm />
        </Container>
      </Section>

      <Section>
        <Container>
          <SearchBox>Find contacts by name</SearchBox>
        </Container>
      </Section>

      <Section>
        <Container>
          <ContactList />
        </Container>
      </Section>
    </>
  );
}

export default App;
