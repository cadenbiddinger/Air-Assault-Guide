import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'




class Home extends Component {
  render () {
    return (
      <div>
          <Carousel>
            <Carousel.Item interval={1000}>
              <img 
                height={550}
                className="d-block w-100"
                src="/images/carousel1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                height={550}
                className="d-block w-100"
                src="/images/carousel2.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                height={550}
                className="d-block w-100"
                src="/images/carousel3.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <div>
          <h1>test</h1>
        </div>
      </div>
    )
  }
}

export default Home;

const styles = {
  contentStyles: {
    color: '#000000',
    backgroundColor: '#fff',
    marginBottom: '0'
  },
}