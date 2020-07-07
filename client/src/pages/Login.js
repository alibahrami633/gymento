import React, { useState, useContext } from "react";

import { UserContext } from '../components/context/UserContext'
import { Container, Row, Col } from "../components/Grid";
import Pageheader from "../components/Pageheader";
import Maincontent from "../components/Maincontent";
import { Form, Input, FormBtn } from "../components/Form";
import API from "../utils/API";

import "./style.css";

export default function Login({ history }) {
    const [formObject, setFormObject] = useState({ loading: false, error: null, email: "", password: "" });
    const { setUserState } = useContext(UserContext)

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    async function handleLoginSubmit(event) {
        event.preventDefault();
        if (!formObject.email || !formObject.password) return;

        let userData = {
            email: formObject.email.trim(),
            password: formObject.password.trim()
        }
        try {
            setFormObject({ ...formObject, loading: true })
            const data = await API.userLogin(userData);
            setFormObject({ ...formObject, loading: false })
            setUserState({ ...data.data })
            history.push("/");
        } catch (error) {
            console.log(error);
        }
    }


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
                                    value={formObject.email}
                                    placeholder="Email (required)"
                                />
                                <Input
                                    onChange={handleInputChange}
                                    type="password"
                                    name="password"
                                    value={formObject.password}
                                    placeholder="Password (required)"
                                />
                                <FormBtn
                                    id="login-btn"
                                    disabled={!formObject.email || !formObject.password || formObject.loading}
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