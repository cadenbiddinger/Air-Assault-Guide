import React, { Component } from 'react'

class Layout extends Component {
  render() {
    return (
      <div>
        <h2 style={styles.contentStyles}>Layout Page...</h2>
      </div>
    )
  }
}

export default Layout;

const styles = {
  contentStyles: {
    color: '#000000',
    backgroundColor: '#fff',
    marginBottom: '0'
  }
}