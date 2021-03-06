import React from "react";
import {Button, Icon, Item, List, Segment} from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

function EventListItem({event}) {
    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image circular size="tiny" src="/assets/images/icon-user.svg" />
                        <Item.Content>
                            <Item.Header content={event.title} />
                            <Item.Description>
                                Hosted by {event.hostedBy}
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name="clock" />{event.date}
                    <Icon name="marker" />{event.venue}
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                   {event.attendees.map(attendee => (
                        <EventListAttendee attendee={attendee} key={attendee.id} />
                   ))}
                </List>
            </Segment>
            <Segment clearing>
                <div>{event.description}</div>
                <Button primary floated="right" content="View" />
            </Segment>
        </Segment.Group>
    );
};

export default EventListItem;