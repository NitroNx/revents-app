import React from "react";
import EventDashboard from "./components/events/eventDashboard/EventDashboard";
import NavBar from "./components/nav/NavBar";
import "./App.css";
import {Container} from "semantic-ui-react";

function App() {
    return (
        <>
            <NavBar />
            <Container className="Container">
                <EventDashboard />
            </Container>
        </>
    );
};

export default App;