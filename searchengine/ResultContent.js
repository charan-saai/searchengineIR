import React from "react";
import { Card, Col, Divider, Image, Row } from "antd";

function ResultContent({ result }) {
  return (
    <div>
      <Card>
        <Divider orientation="left" />
        <Row>
          <Col flex={95}>
            <div>
              <p>Name : {result.name}</p>
              <p>Difficulty : {result.difficulty}</p>
              <a href={result.link}>{result.link}</a>
            </div>
          </Col>
          <Col flex={5}>
            <Image src={result.platform} height="50px" width="50px" />
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default ResultContent;
