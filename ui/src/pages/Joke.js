import React, { Fragment, useEffect, useState } from 'react';
import { Skeleton, Tag, Descriptions } from "antd";
import ApiUrlConstant from '../utils/Constants';

const Joke = () => {
  const [loading, setLoading] = useState(true);
  const [randomJoke, setRandomJoke] = useState();

  const getApi = async () => {
    let api = ApiUrlConstant + '/jokes/random';

    // https://github.com/nodejs/undici
    await fetch(api).then(response => {
      return response.json();
    }).then(data => {
      setLoading(false);
      setRandomJoke(data);
    }).catch(err => {
      console.err('Error fetching random joke: ' + err)
    });;
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <Fragment>
      {
        loading === true ? (
          <Skeleton active />
        ) : (
          <Descriptions title="Joke">
            <Descriptions.Item label="No." span={3}>{randomJoke.id}</Descriptions.Item>
            <Descriptions.Item label="Type" span={3}>
              <Tag>{randomJoke.type}</Tag>
            </Descriptions.Item>
            <Descriptions.Item label="Question" span={3}>{randomJoke.setup}</Descriptions.Item>
            <Descriptions.Item label="Punchline" span={3}>{randomJoke.punchline}</Descriptions.Item>
          </Descriptions>
        )
      }
    </Fragment>
  );
}

export default Joke;
