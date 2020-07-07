import React, { useState } from "react";
import { Container, Row, Col } from "../components/Grid";
import Pageheader from "../components/Pageheader";
import Maincontent from "../components/Maincontent";
import { Form, Input, FormBtn } from "../components/Form";
import API from "../utils/API";
import "./style.css";
import { compareSync } from "bcryptjs";

function Signup() {
    const [formObject, setFormObject] = useState({});

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    async function handleSignupSubmit(event) {
        event.preventDefault();
        if (formObject.name && formObject.email && formObject.password) {
            let userData = {
                email: formObject.email.trim(),
                name: formObject.name.trim(),
                password: formObject.password.trim(),
                re_password: formObject.re_password.trim()
            }

            document.getElementById("signup_btn").disabled = true;

            try {
                if (userData.password !== userData.re_password) {
                    console.log("Both password fields must match...");
                } else {
                    const data = await API.userSignup(userData);

                    document.getElementById("signup_btn").disabled = true;
                    console.log(document.getElementById("signup_form").textContent);
                    document.getElementById("signup_form").reset();

                    console.log(`Signup was successfull!`);
                    window.location.replace("/");
                }
            } catch (error) {
                console.log(error);
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
                            <Form id="signup_form">
                                <Input
                                    onChange={handleInputChange}
                                    type="text"
                                    name="email"
                                    placeholder="Email (required)"
                                />
                                <Input
                                    onChange={handleInputChange}
                                    type="text"
                                    name="name"
                                    placeholder="Name (required)"
                                />
                                <Input
                                    onChange={handleInputChange}
                                    type="password"
                                    name="password"
                                    placeholder="Password (required)"
                                />
                                <Input
                                    onChange={handleInputChange}
                                    type="password"
                                    name="re_password"
                                    placeholder="Retype Password (required)"
                                />
                                <FormBtn
                                    id="signup_btn"
                                    disabled={!(formObject.name && formObject.password && formObject.re_password && formObject.email)}
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