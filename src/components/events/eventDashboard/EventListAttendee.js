import React from "react";
import {Image, List} from "semantic-ui-react";

function EventListAttendee() {
    return (
        <List.Item>
            <Image circular size="mini" src="/assets/images/user-icon.svg" />
        </List.Item>
    );
};

export default EventListAttendee;