import React from "react";
import styled from "styled-components";
import { ProfileImage } from "./ProfileImage";

const UserGridStyled = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 50px;
  gap: 15px;
  grid-template-areas: "photo name" "photo label" "photo description";
  @media (max-width: 990px) {
    grid-template-areas: "photo name" "label . " "description . ";
  }
`;

export const MiniUserGrid = styled.div`
  display: grid;
  justify-content: left;
  grid-template-columns: auto auto;
  gap: 10px;
`;

const Photo = styled.div`grid-area: photo;`;
const Name = styled.div`
  grid-area: name;
  font-size: 35px;
  align-self: center;
`;
const Label = styled.div`
  grid-area: label;
  @media (max-width: 990px) {
    padding-left: 25px;
  }
`;
const Description = styled.div`
  grid-area: description;
  max-width: 500px;
  align-self: left;
  @media (max-width: 990px) {
    padding-left: 25px;
    grid-column: 1/3;
  }
`;

export default function() {
  return (
    <UserGridStyled>
      <Photo>
        <ProfileImage />
      </Photo>
      <Name>Princeton People Gallery</Name>
      <Label>Notables who have lived in Princeton</Label>
      <Description>
        Retro bicycle rights snackwave hell of portland. Prism keffiyeh
        chartreuse pabst tumeric hella celiac sartorial asymmetrical migas poke
        tofu semiotics thundercats shaman. Bitters banh mi shoreditch kitsch
        franzen vinyl man braid enamel pin artisan pork belly vape snackwave
        lyft deep v. Ramps put a bird on it you probably haven't heard of them,
        fashion axe craft beer tote bag raclette succulents cred before they
        sold out plaid wayfarers portland schlitz 90's.
      </Description>
    </UserGridStyled>
  );
}
