import React, {useState} from "react";
import EventDashboard from "./components/events/eventDashboard/EventDashboard";
import NavBar from "./components/nav/NavBar";
import "./App.css";
import {Container} from "semantic-ui-react";

function App() {
    const [formOpen, setFormOpen] = useState(false);
    return (
        <>
            <NavBar setFormOpen={setFormOpen} />
            <Container className="Container">
                <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
            </Container>
        </>
    );
};

export default App;