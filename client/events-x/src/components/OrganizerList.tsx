import React from "react";
import { Organizer } from "../common/interfaces";
import OrganizerInfo from "./OrganizerEntity";
const OrganizerList = ({ organizers }: { organizers: Array<Organizer> }) => {
  return (
    <div>
      {organizers.map((organizer) => (
        <OrganizerInfo key={organizer.id} organizer={organizer} />
      ))}
    </div>
  );
};

export default OrganizerList;
