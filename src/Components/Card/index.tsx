import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setSelectedContact } from "../../store/modules/ui";
import { RootState } from "../../store/store";
import { Contact } from "../../store/types";
import { fadeIn } from "../Animations/fadeIn";
import CloseButton from "./CloseButton";
import Details from "./Details";

const Wrapper = styled.div`
  align-items: flex-start;
  width: 38%;
  position: absolute;
  right: 8%;
  top: 32%;
  border: var(--borders);
  border-radius: 4px;
  padding: 15px 85px 15px 20px;
  display: flex;
  justify-content: space-between;
  animation: ${fadeIn} 0.2s;
  background: linear-gradient(
      to bottom,
      black -15%,
      transparent 7%,
      transparent 93%,
      black 115%
    ),
    var(--light-gray);

  @media (max-width: 1244px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    width: 88%;
    right: 6%;
  }
`;

const FormattedName = styled.div`
  color: gray;
  font-size: 1.5rem;
  padding-bottom: 10px;
`;

const Image = styled.img`
  border-radius: 50%;
  margin-left: -10px;
  margin-right: 10px;
`;

const UserName = styled.div`
  writing-mode: vertical-lr;
  position: absolute;
  top: 31%;
  right: 10%;
  padding: 8px 3px;
  color: white;
  font-weight: 600;
  font-size: 0.8rem;
  background-color: red;
  background-image: linear-gradient(
    137deg,
    transparent -135%,
    black -78%,
    transparent 103%
  );
`;

const Close = styled.div`
  position: relative;
  left: -10px;
`;

const Card: React.FC = () => {
  const selectedContact = useSelector(
    (state: RootState) => state.ui.selectedContact
  ) as Contact;

  const dispatch = useDispatch();
  const { first, last } = selectedContact!.name;
  const formattedName = `${first.toUpperCase()}, ${last}`;
  const handleClose = useCallback(
    () => dispatch(setSelectedContact(undefined)),
    [dispatch]
  );

  return (
    <div>
      {/* The key prop passed to SubWrapper is used to force restart animation on tab change */}
      <Wrapper key={selectedContact.login.username}>
        <Close>
          <CloseButton handleClose={handleClose} />
        </Close>
        <Image
          src={selectedContact.picture.medium}
          alt={selectedContact.name.first}
        />
        <div>
          <FormattedName>{formattedName}</FormattedName>
          <Details />
        </div>
      </Wrapper>
      <UserName>{`USERNAME ${selectedContact.login.username}`}</UserName>
    </div>
  );
};

export default React.memo(Card);
