import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setSelectedContact, setSelectedTab } from "../../store/modules/ui";
import { RootState } from "../../store/store";

const Wrapper = styled.button`
  /* common styles for all tabs */
  border-radius: 10px 10px 0 0;
  border: var(--borders);
  padding: 3px;
  height: 100%;
  background-color: var(--light-gray);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1 1 14px;
  color: var(--dark-gray);

  /* disabled styles */
  :disabled {
    color: var(--lighter-gray);
    cursor: not-allowed;
  }

  /* Styles that depend on whether the tab is selected or not */
  border-bottom: ${(props: { selected: boolean }) =>
    props.selected ? "none" : "var(--borders)"};
  background-image: ${({ selected }) =>
    selected
      ? "linear-gradient(to bottom,#969696 -1%,var(--light-gray) 27%)"
      : "none"};
`;

const Letter = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
`;

const Count = styled.span`
  font-size: 0.6rem;
  font-weight: 700;
  align-self: flex-end;
`;

interface Props {
  letter: string;
  count: number;
}

const Tab: React.FC<Props> = ({ letter, count }) => {
  const selectedTab = useSelector((state: RootState) => state.ui.selectedTab);
  const isSelected = letter === selectedTab;
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    if (letter !== selectedTab && count > 0) {
      dispatch(setSelectedTab(letter));
      dispatch(setSelectedContact(undefined));
    }
  }, [count, dispatch, letter, selectedTab]);

  return (
    <Wrapper disabled={count === 0} selected={isSelected} onClick={handleClick}>
      <Letter>{letter}</Letter>
      <Count>{count}</Count>
    </Wrapper>
  );
};

export default React.memo(Tab);
