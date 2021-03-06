import React, {useState} from "react";
import EventList from "./EventList";
import EventForm from "../eventForm/EventForm";
import {Grid} from "semantic-ui-react";
import {sampleData} from "../../../api/sampleData.js";

function EventDashboard({formOpen, setFormOpen}) {
    const [events, setEvents] = useState(sampleData);

    const handleCreateEvent = (event) => {
        setEvents([...events, event]);
    };

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={events} />
            </Grid.Column>
            <Grid.Column width={6}>
                {formOpen && <EventForm setFormOpen={setFormOpen} 
                 setEvents={setEvents} createEvent={handleCreateEvent} />}
            </Grid.Column>
        </Grid>
    ); 
};

export default EventDashboard;