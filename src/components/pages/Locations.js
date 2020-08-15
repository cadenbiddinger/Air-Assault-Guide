import React, { Component } from 'react'
import { InfoConsumer } from '../context'
import Info from '../Info';

class Locations extends Component {
  render() {
    return (
      <div style={styles.contentStyles}>
        <div className="container">
          <div className="row mt-5">
            <InfoConsumer>
              {value => {
                return value.info.map(item => {
                  return <Info key={item.id} item={item} />;
                })
              }}
            </InfoConsumer>
          </div>
        </div>
      </div>



      
    );
  }
}

export default Locations;


const styles = {
  contentStyles: {
    color: '#000000',
    backgroundColor: '#fff',
    marginBottom: '0'
  }
}