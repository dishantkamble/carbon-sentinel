import React, { Fragment } from 'react';
import { Button, Card, Flex, Space, Typography } from "antd";

const { Text } = Typography;

const Home = () => {

  return (
    <Fragment>
      <Flex wrap justify="center" gap="middle">
          <Card title="Estimate" bordered={false}>
            <Space align="center" block='true' direction="vertical" size="middle">
              <Text>Know your Carbon footprint</Text>
              <Button href="/joke" type="primary">Go</Button>
            </Space>
          </Card>
          <Card title="Air Quality" bordered={false}>
            <Space align="center" block='true' direction="vertical" size="middle">
              <Text>Know Air Quality around the world</Text>
              <Button href="/joke" type="primary">Go</Button>
            </Space>
          </Card>
          <Card title="Joke" bordered={false}>
            <Space align="center" block='true' direction="vertical" size="middle">
              <Text>Rate our homour</Text>
              <Button href="/joke">Sure</Button>
            </Space>
          </Card>
      </Flex>
    </Fragment>
  );
};

export default Home;
