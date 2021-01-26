import React from "react";
import {Image, List} from "semantic-ui-react";

function EventListAttendee() {
    return (
        <List.Item>
            <Image circular size="mini" src="/assets/images/icon-user.svg" />
        </List.Item>
    );
};

export default EventListAttendee;