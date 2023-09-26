import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';

import { useGetExchangesQuery } from '../services/cryptoApi';
import Loader from './Loader';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data?.data?.currencies;
  console.log(data);
  if (isFetching) return <Loader />;

  return (
    <>
      <Row>
        <Col span={6}>ID</Col>
        <Col span={6}>24h Trade Currency</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row>
         {exchangesList?.map((exchange) => (
          <Col span={24}>
            <Collapse>
              <Panel
                key={exchange.uuid}
                showArrow={false}
                header={(
                  <Row key={exchange.uuid}>
                    <Col span={6}>
                      <Text><strong>{exchange.uuid}.</strong></Text>
                    </Col>
                    <Col span={6}>
                    </Col>
                      <Avatar className="exchange-image" src={exchange.iconUrl} />
                    <Col span={3}>
                      <Text><strong>{exchange.name}</strong></Text>
                    </Col>
                    <Col span={3}>${millify(exchange.symbol)}</Col>
                    <Col span={3}>{millify(exchange.type)}</Col>
                    {/* <Col span={6}>{millify(exchange.marketShare)}%</Col> */}
                  </Row>
                  )}
              >
                {HTMLReactParser(exchange.description || '')}
              </Panel>
            </Collapse>
          </Col>
        ))} 
      </Row>
    </>
  );
};

export default Exchanges;