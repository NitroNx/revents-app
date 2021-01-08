import React from "react";
import EventList from "./EventList";
import EventForm from "../eventForm/EventForm";
import {Grid} from "semantic-ui-react";

function EventDashboard() {
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList />
            </Grid.Column>
            <Grid.Column width={6}>
                <EventForm />
            </Grid.Column>
        </Grid>
    ); 
};

export default EventDashboard;