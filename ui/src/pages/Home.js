import React, { Fragment } from 'react';
import { Button, Card, Row, Col, Flex } from "antd";

const { Meta } = Card;

const Home = () => {

  return (
    <Fragment>
      <Flex align="center">
        <Row gutter={[16, 16]} style={{ width: '100%' }}>
          <Col span={8}>
            <Card actions={[
              <Button href="/joke" type="link">Go</Button>
            ]}>
              <Meta title="Estimate" description="Know your Carbon footprint" />
            </Card>
          </Col>
          <Col span={8}>
            <Card actions={[
              <Button href="/joke" type="link">Go</Button>
            ]}>
              <Meta title="Air Quality" description="Know Air Quality around the world" />
            </Card>
          </Col>
          <Col span={8}>
            <Card actions={[
              <Button href="/joke" type="link">Sure</Button>
            ]}>
              <Meta title="Joke" description="Rate our homour" />
            </Card>
          </Col>
        </Row>
      </Flex>
    </Fragment>
  );
};

export default Home;
