import React from "react";
import "bulma/css/bulma.min.css";
import styled from "styled-components";

const Member = (props) => {
  const Card = styled.div`
    height: 500px;
    overflow: hidden;
    margin-left: 4%;
    margin-top: 30px;
    display: flex;
    cursor: pointer;
    clickable: true;
    flex-direction: column;
    width: 25%;
    min-width: 350px;
    border: 1px solid #c9c9c9;
    box-shadow: 2px 2px 10px #dddddd;
    border-radius: 20px;
    align-items: center;
    @media (orientation: portrait) {
      height: fit-content;
      width: 80%;
      margin-left: 0px;
    }
  `;

  const ProfilePicture = styled.img`
    height: 170px;
    width: 170px;
    object-fit: cover;
    border-radius: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    margin-bottom: 30px;
  `;

  const Text = styled.div`
    font-weight: ${(props) => props.weight};
    font-size: ${(props) => props.size}em;
    color: ${(props) => props.color};
    padding-bottom: ${(props) => props.bottom}px;
    max-width: 80%;
    white-space: pre-wrap;
  `;

  Text.defaultProps = {
    bottom: 10,
    weight: 400,
  };

  return (
    <Card>
      <ProfilePicture src={props.imagePath} alt="faculty image here" />
      <Text weight={600} size={1.2} color={"#005F73"}>
        {props.name}
      </Text>
      <Text size={1.1} color={"#353839"} bottom={0}>
        {props.Description}
      </Text>
      <div>
        {" "}
        <strong>Quantity: </strong>
      </div>
      <Text size={1} color="#52445f">
        {props.quantity}
      </Text>
      <div>
        {" "}
        <strong>Price: </strong>
      </div>
      <Text size={1} color="#52445f">
        {props.price}
      </Text>
    </Card>
  );
};

export default Member;
