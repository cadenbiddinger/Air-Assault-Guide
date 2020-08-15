import React, { Component } from 'react'
import { InfoConsumer } from '../context'


class Home extends Component {
  render () {
    return (
      <div>
        <h2 style={styles.contentStyles}>Home Page...</h2>
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
  }
}