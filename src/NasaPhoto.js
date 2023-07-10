import React from "react";
import styled from "styled-components";

const StyledNasa = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  //border: 4px solid crimson;
  background-color: black;
`;

const StyledTitle = styled.h3`
  color: ${({ theme }) => theme.primaryColor};
`;

const StyledDate = styled.p`
  color: ${({ theme }) => theme.secondaryColor};
`;

const StyledInfo = styled.p`
  color: ${({ theme }) => theme.tertiaryColor};
`;

const NasaPhoto = (props) => {
  const { title, date, hdurl, explanation } = props.photo;
  return (
    <StyledNasa className="photo-wrapper">
      <StyledTitle>{title}</StyledTitle>
      <StyledDate>{date}</StyledDate>
      <img src={hdurl} />
      <StyledInfo className="information">{explanation}</StyledInfo>
    </StyledNasa>
  );
};

export default NasaPhoto;
