import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  height: 20px;
  width: 20px;
  background-color: transparent;
`;

const A = styled.div`
  height: 20px;
  width: 2px;
  margin-left: 8px;
  margin-top: -1px;
  background-color: gray;
  transform: rotate(45deg);
  z-index: 1;
`;

const B = styled.div`
  height: 20px;
  width: 2px;
  background-color: gray;
  transform: rotate(90deg);
  z-index: 2;
`;

interface Props {
  handleClose: () => void;
}

const CloseButton: React.FC<Props> = ({ handleClose }) => {
  return (
    <Wrapper onClick={handleClose}>
      <A>
        <B></B>
      </A>
    </Wrapper>
  );
};

export default React.memo(CloseButton);
