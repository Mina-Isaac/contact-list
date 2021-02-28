import React from "react";
import styled from "styled-components";
import Tab from "./Tab";
import { configJson } from "../../constants";
import { Dictionary } from "lodash/";
import { Contact } from "../../store/types";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -1px;
`;

interface Props {
  groupedList: Dictionary<Contact[]>;
}

const Tabs: React.FC<Props> = ({ groupedList }) => {
  return (
    <Wrapper>
      {configJson.tabs.map((letter, i) => (
        <Tab key={i} letter={letter} count={groupedList[letter]?.length || 0} />
      ))}
    </Wrapper>
  );
};

export default Tabs;
