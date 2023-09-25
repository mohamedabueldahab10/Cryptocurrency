import React from 'react'
import { Select,Typography,Row,Col,Avatar,Card } from 'antd'
import moment from 'moment/moment'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
const {Title, Text} =Typography;
const {Option} = Select;
const demoImage = "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg"
const News = ({ simplified }) => {
  const {data:cryptoNews} = useGetCryptoNewsQuery({newsCategory:'Cryptocurrency', count: simplified ? 6 : 12})
  if(!cryptoNews?.value) return "Loading...";
  return (
    <>
      <Row gutter={[24,24]}>
        {cryptoNews.value.map((news,i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
              <Card hoverable className='news-card'>
                <a href={news.url} target="_blank" rel="noreferrer">
                  <div className="news-image-container">
                    <Title className='news-title' level={4}>
                      {news.name}
                    </Title>
                    <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt="news" />
                    <p>
                      {news.description > 100 ? `${news.description.substring(0,100)} ...` : news.desription}
                    </p>
                    <div className="provider-container">
                      <Avatar src={news.provider[0]?.thumbnail?.contentUrl || demoImage} alt="news" />
                      <Text>{moment(news.datePublished).startOf('ss').fromNow}</Text>
                    </div>
                  </div>
                </a>
              </Card>
          </Col>
         ))}  
      </Row>   
    </>
  )
}

export default News
