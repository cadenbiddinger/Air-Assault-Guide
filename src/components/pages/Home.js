import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';




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
        <div class="row">
          <div style={styles.column} xs={6} md={4}>
            <Image src="/images/armyseal.jpg" rounded />
          </div>
          <div style={styles.column} class="column">
            <h2>Background Of Air Assault School</h2>
            <p>Air Assualt school is meant to train and qualify soldiers to conduct airmobile and air assault operations in an aircraft. This includes rappeling, sling load operations and much more. The course itself is 10 days and has a large number of tasks that need to be checked off in order to graduate. </p>
          </div>
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
  column: {
    float: 'left',
    width: '50%',
    padding: '20px'
  },
}