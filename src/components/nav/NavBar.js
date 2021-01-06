import React from "react";
import {Button, Container, Menu} from "semantic-ui-react";

function NavBar() {
    return (
        <Menu inverted fixed="top" className="Menu">
            <Container>
                <Menu.Item header>
                    Revents
                </Menu.Item>
                <Menu.Item name="Events" />
                <Menu.Item>
                    <Button positive inverted content="Create Event" />
                </Menu.Item>
                <Menu.Item position="right">
                    <Button basic inverted content="Login" />
                    <Button basic inverted content="Register" style={{marginLeft: "0.5rem"}} />
                </Menu.Item>
            </Container>
        </Menu>
    );
};

export default NavBar;