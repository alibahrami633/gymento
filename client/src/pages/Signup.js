import React, { useState } from "react";
import { Container, Row, Col } from "../components/Grid";
import Pageheader from "../components/Pageheader";
import Maincontent from "../components/Maincontent";
import { Form, Input, FormBtn } from "../components/Form";
import "./style.css";

function Signup() {
    const [formObject, setFormObject] = useState({});

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    async function handleSignupSubmit(event) {
        event.preventDefault();
        if (formObject.username && formObject.password) {
            let username = formObject.username.trim();
            let password = formObject.password.trim();

            document.getElementById("signup-btn").disabled = true;

            try {
                console.log(`Signup was successfull ${username}!`)
            } catch (error) {
                console.log(error)
            }
        }
    };

    return (
        <Container>
            <Row>
                <Col size="md-12">
                    <Pageheader>Signup</Pageheader>
                </Col>
            </Row>
            <Maincontent>
                <Row>
                    <Col size="md-6">
                        Signup Page
                    </Col>
                    <Col size="md-6">
                        <div>
                            <Form id="login-form">
                                <Input
                                    onChange={handleInputChange}
                                    type="text"
                                    name="username"
                                    placeholder="Username (required)"
                                />
                                <Input
                                    onChange={handleInputChange}
                                    type="password"
                                    name="password"
                                    placeholder="Password (required)"
                                />
                                <FormBtn
                                    id="signup-btn"
                                    disabled={!(formObject.username && formObject.password)}
                                    onClick={handleSignupSubmit}
                                >Signup
                                </FormBtn>
                            </Form>
                        </div>
                    </Col>
                </Row >
            </Maincontent>
        </Container >
    );
}

export default Signup;