import styled from "styled-components";
import { Organizer } from "../common/interfaces";

const OrganizerCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  width: 70%;
  height: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const LogoContainer = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  background-color: #eee;
`;

const RatingContainer = styled.div`
  background-color: #ff0000;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
`;

const DoRefundButton = styled.button`
  background-color: #ffff00;
  color: #000;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
`;
const ColumnDiv = styled.div`
  flex-direction: column;
  align-items: center;
  height: 80%;
  color: black important!;
`;
const OrganizerInfo = ({ organizer }: { organizer: Organizer }) => {
  return (
    <OrganizerCard>
      <LogoContainer />
      <ColumnDiv>
        <h2>{organizer.name}</h2>
        <p style={{ color: "black" }}>Type: {organizer.type}</p>
        <p style={{ color: "black" }}>Total Events: {organizer.totalevents}</p>
        <RatingContainer>Rating: {organizer.rating}</RatingContainer>
        <p style={{ color: "black" }}>
          Contact Information: {organizer.contactinformation}
        </p>
        <DoRefundButton>
          {organizer.dorefund ? "Offers Refunds" : "No Refunds"}
        </DoRefundButton>
      </ColumnDiv>
    </OrganizerCard>
  );
};

export default OrganizerInfo;
