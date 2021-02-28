import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store/store";
import { Contact } from "../../store/types";

const Wrapper = styled.div`
  display: flex;
  font-size: 1rem;
`;

const LeftColumn = styled.div`
  display: inline-block;
  margin-right: 15px;
  font-size: inherit;
  font-weight: bold;
`;

const RightColumn = styled.div`
  display: inline-block;
  font-size: inherit;
`;

const Details: React.FC = () => {
  const selectedContact = useSelector(
    (state: RootState) => state.ui.selectedContact
  ) as Contact;

  return (
    <Wrapper>
      <LeftColumn>
        <div>e-mail</div>
        <div>phone</div>
        <div>street</div>
        <div>city</div>
        <div>state</div>
        <div>postcode</div>
      </LeftColumn>
      <RightColumn>
        <div>{selectedContact.email}</div>
        <div>{selectedContact.phone}</div>
        <div>{`${selectedContact.location.street.number} ${selectedContact.location.street.name}`}</div>
        <div>{selectedContact.location.city}</div>
        <div>{selectedContact.location.state}</div>
        <div>{selectedContact.location.postcode}</div>
      </RightColumn>
    </Wrapper>
  );
};

export default React.memo(Details);
