import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setSelectedContact } from "../../store/modules/ui";
import { Contact } from "../../store/types";

const Wrapper = styled.button`
  border-bottom: 2px dotted var(--lighter-gray);
  padding: 0px 0 12px 12px;
  margin: 8px 0 7px 10px;
  background-color: inherit;
  text-align: left;
`;

const Span = styled.span`
  color: var(--dark-gray);
  font-weight: 600;
  font-size: 1rem;
`;

interface Props {
  contact: Contact;
}

const Name: React.FC<Props> = ({ contact }) => {
  const { first, last } = contact.name;
  const dispatch = useDispatch();
  const formattedName = `${last}, ${first.toUpperCase()}`;
  const handleClick = useCallback(() => dispatch(setSelectedContact(contact)), [
    contact,
    dispatch,
  ]);

  return (
    <Wrapper onClick={handleClick}>
      <Span >{formattedName}</Span>
    </Wrapper>
  );
};

export default React.memo(Name);
