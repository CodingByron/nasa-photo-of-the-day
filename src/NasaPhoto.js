import React from "react";
import styled from "styled-components";

const StyledNasa = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-bottom: 2px solid crimson;
`;

const NasaPhoto = (props) => {
  return (
    <StyledNasa className="photo-wrapper">
      <h3>{props.photo.title}</h3>
      <p>{props.photo.date}</p>
      <img src={props.photo.hdurl} />
      <p className="information">{props.photo.explanation}</p>
    </StyledNasa>
  );
};

export default NasaPhoto;
