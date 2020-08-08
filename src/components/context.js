import React, { Component } from 'react'
import { placeInfo, reviews, detailInfo, news } from '../data'


const InfoContext = React.createContext();

// Provider provides data
// Consumer consumes data

class InfoProvider extends Component {

  state = {
    info: placeInfo,
    reviews: reviews,
    detailInfo: detailInfo,
    new: news
  }

  render() {
    return (
      <InfoContext.Provider value={{
        info: this.state.info,
        reviews: this.state.reviews,
        maps: this.state.maps,
        headerTitle: this.state.headerTitle,
        headerSubTitle: this.state.headerSubTitle,
        headerText: this.state.headerText,
        detailInfo: this.state.detailInfo,
        news: this.state.news,
        name: this.state.name,
        avatar: this.state.avatar,
        comment: this.state.comment
      }}>
        {this.props.children}
      </InfoContext.Provider>
    );
  }
}

const InfoConsumer = InfoContext.Consumer; 


export { InfoProvider, InfoConsumer };

// pulling from the Info.js file and the Info.js file is getting the information from the data.js