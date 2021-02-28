import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store/store";
import { Dictionary } from "lodash/";
import Name from "./Name";
import { Contact } from "../../store/types";
import { fadeIn } from "../Animations/fadeIn";

const Wrapper = styled.div`
  border-right: var(--borders);
  border-left: var(--borders);
  border-bottom: var(--borders);
  background-color: var(--light-gray);
  border-radius: 0 0 5px 5px;
  height: 100%;
  padding: 1.2rem;
`;

const SubWrapper = styled.div`
  animation: ${fadeIn} 0.3s;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
`;

interface Props {
  groupedList: Dictionary<Contact[]>;
}

const ContactList: React.FC<Props> = ({ groupedList }) => {
  const selectedTab = useSelector((state: RootState) => state.ui.selectedTab);

  return (
    <Wrapper>
      {/* The key prop passed to SubWrapper is used to force restart animation on tab change */}
      <SubWrapper key={selectedTab}>
        {selectedTab &&
          groupedList[selectedTab]?.map((contact, i) => (
            <Name contact={contact} key={i} />
          ))}
      </SubWrapper>
    </Wrapper>
  );
};

export default React.memo(ContactList);
