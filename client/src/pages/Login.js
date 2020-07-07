import React, { useState } from "react";
import { Container, Row, Col } from "../components/Grid";
import Pageheader from "../components/Pageheader";
import Maincontent from "../components/Maincontent";
import { Form, Input, FormBtn } from "../components/Form";
import API from "../utils/API";
import "./style.css";

function Login() {
    const [formObject, setFormObject] = useState({});

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    async function handleLoginSubmit(event) {
        event.preventDefault();
        if (formObject.email && formObject.password) {
            let userData = {
                email: formObject.email.trim(),
                password: formObject.password.trim()
            }
            document.getElementById("login-btn").disabled = true;
            try {
                const data = await API.userLogin(userData);
                document.getElementById("login-btn").disabled = true;
                window.location.replace("/");
            } catch (error) {
                console.log(error)
            }
        }
    };

    return (
        <Container>
            <Row>
                <Col size="md-12">
                    <Pageheader>Login</Pageheader>
                </Col>
            </Row>
            <Maincontent>
                <Row>
                    <Col size="md-6">
                        Login page
                    </Col>
                    <Col size="md-6">
                        <div>
                            <Form id="login-form">
                                <Input
                                    onChange={handleInputChange}
                                    type="text"
                                    name="email"
                                    placeholder="Email (required)"
                                />
                                <Input
                                    onChange={handleInputChange}
                                    type="password"
                                    name="password"
                                    placeholder="Password (required)"
                                />
                                <FormBtn
                                    id="login-btn"
                                    disabled={!(formObject.email && formObject.password)}
                                    onClick={handleLoginSubmit}
                                >Login
                                </FormBtn>
                            </Form>
                        </div>
                    </Col>
                </Row >
            </Maincontent>
        </Container >
    );
}

export default Login;