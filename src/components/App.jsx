import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import s from "./App.module.css";
import { FaPhoneVolume } from "react-icons/fa6";
import { fetchContacts } from "../redux/contactsOps";
import { selectError, selectLoading } from "../redux/contactsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Spiner from "./Spiner/Spiner";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={s.container}>
      <h1 className={s.title}>
        Phonebook
        <FaPhoneVolume className={s.icon} />
      </h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && (
        <h2>
          <Spiner />
        </h2>
      )}
      {error && <h2>{error}</h2>}

      <ContactList />
    </div>
  );
}

export default App;
