import { ContactsListRender, ContactsListRender2 } from '../list/ContactsList'; 
// import { ContactsForm } from "components/form/ContactsForm";
// import { Filter } from "components/filter/Filter";
import { AppContainer, Title, Container } from './App.styled';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from "redux/operations";
// import { getLoading, getError, getContacts } from 'redux/selectors';
import { Head } from "components/head/Header";
import { Hero } from "components/main/Main";
import { Footer } from "components/footer/Footer";
import CallBackForm from "components/formspree/FormSpree";
import Reviews from "components/reviews/Reviews";
import { Ceník } from 'components/ceník/Ceník';
export const App = () => {
    // const dispatch = useDispatch();
    // const contacts = useSelector(getContacts);
    // const isLoading = useSelector(getLoading);
    // const error = useSelector(getError);

    // useEffect(() => {
    //   dispatch(fetchContacts());
    // }, [dispatch]);

    return (
      <Container>
        <Head />
        <AppContainer>
          <Hero />
          <CallBackForm />
          <Ceník />
          <ContactsListRender />
          <ContactsListRender2/>
          <Title>Napsat recenzi</Title>
          {/* <ContactsForm /> */}
          {/* <Title id="recenze">Recenze</Title> */}
          {/* <Filter /> */}
          {/* {isLoading && <p>Načítání recenzí...</p>} */}
          {/* {error && <p>{error}</p>} */}
          <Reviews />
        </AppContainer>
        <Footer />
      </Container>
    );
  }