import React from "react";
import { Container, Row, Col } from "../components/Grid";
import Pageheader from "../components/Pageheader";
import Maincontent from "../components/Maincontent";
import "./style.css";

function Home() {
    return (
        <Container>
            <Row>
                <Col size="md-12">
                    <Pageheader>Home</Pageheader>
                </Col>
            </Row>
            <Maincontent>
                <Row>
                    <Col size="md-12">
                        Hello Ali
                    </Col>
                </Row >
            </Maincontent>
        </Container >
    );
}

export default Home;