import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { configJson } from "./constants";
import { fetchContacts } from "./store/modules/contacts";
import { RootState } from "./store/store";
import { groupBy } from "lodash/";
import Card from "./Components/Card";
import Tabs from "./Components/Tabs";
import ContactList from "./Components/ContactList";

const Contianer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  background-color: transparent;
  height: 85%;
  width: 90%;
  @media (max-width: 768px) {
    width: 98%;
  }
  @media (max-height: 640px) {
    height: 82%;
  }
`;

const H1 = styled.h1`
  margin: 5px;
`;

function App() {
  const dispatch = useDispatch();
  const list = useSelector((state: RootState) => state.contacts.list);
  const requestStatus = useSelector(
    (state: RootState) => state.contacts.loading
  );
  const error = useSelector((state: RootState) => state.contacts.error);

  const selectedContact = useSelector(
    (state: RootState) => state.ui.selectedContact
  );

  const groupedList = useMemo(
    () => groupBy(list, (c) => c.name.first[0].toLocaleLowerCase()),
    [list]
  );

  useEffect(() => {
    dispatch(fetchContacts(configJson));
  }, [dispatch]);

  return (
    <Contianer>
      <H1>Contact List</H1>
      {requestStatus === "pending" && <h3>Loading...</h3>}
      {error && <h3>{error.message}</h3>}
      {selectedContact && <Card />}
      {requestStatus === "fulfilled" && (
        <Wrapper>
          <Tabs groupedList={groupedList} />
          <ContactList groupedList={groupedList} />
        </Wrapper>
      )}
    </Contianer>
  );
}

export default App;
