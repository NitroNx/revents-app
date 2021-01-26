import React, {useState} from "react";
import cuid from "cuid";
import {Button, Form, Header, Segment} from "semantic-ui-react";

function EventForm({setFormOpen, createEvent}) {
    const initialValues = {
        title: "",
        category: "",
        description: "",
        city: "",
        venue: "",
        date: ""
    };

    const [values, setValues] = useState(initialValues);

    const handleFormSubmit = () => {
        createEvent({...values, id: cuid(), hostedBy: "Bob", attendees:[], hostPhotoURL: "/assets/icon-user.svg" });
        setFormOpen(false);
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValues({...values, [name]: value});
    };

    return (
        <Segment clearing>
            <Header content="Create new event" />
            <Form onSubmit={handleFormSubmit}>
                <Form.Field>
                    <input 
                        type="text" 
                        name="title" 
                        value={values.title} 
                        onChange={(e) => handleInputChange(e)} 
                        placeholder="Event title" 
                    />
                </Form.Field>
                <Form.Field>
                    <input 
                        type="text"
                        name="category"
                        value={values.category}
                        onChange={(e) => handleInputChange(e)} 
                        placeholder="Category" 
                    />
                </Form.Field>
                <Form.Field>
                    <input 
                        type="text"
                        name="description"
                        value={values.description}
                        onChange={(e) => handleInputChange(e)} 
                        placeholder="Description" 
                    />
                </Form.Field>
                <Form.Field>
                    <input 
                        type="text" 
                        name="city"
                        value={values.city}
                        onChange={(e) => handleInputChange(e)}
                        placeholder="City" 
                    />
                </Form.Field>
                <Form.Field>
                    <input 
                        type="text"
                        name="venue"
                        value={values.venue}
                        onChange={(e) => handleInputChange(e)} 
                        placeholder="Venue" 
                    />
                </Form.Field>
                <Form.Field>
                    <input 
                        type="date"
                        name="date"
                        value={values.date}
                        onChange={(e) => handleInputChange(e)} 
                        placeholder="Date" 
                    />
                </Form.Field>
                <Button type="submit" floated="right" positive content="Submit" />
                <Button onClick={() => setFormOpen(false)} type="submit" floated="right" content="Cancel" /> 
            </Form>
        </Segment>
    );
};

export default EventForm;