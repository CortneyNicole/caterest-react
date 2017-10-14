{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "bricks.js": "^1.8.0",
    "react": "^16.0.0",
    "react-bootstrap": "^0.31.3",
    "react-dom": "^16.0.0",
    "react-infinite-scroller": "^1.0.15",
    "react-masonry-infinite": "^1.2.1",
    "react-masonry-infinite-scroll": "^1.0.9",
    "react-scripts": "1.0.14"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}

import React from 'react';
import Item from './item';
import MasonryInfiniteScroller from 'react-masonry-infinite';
import InfiniteScroll from 'react-infinite-scroller';
import Bricks from 'bricks.js'

export default class List extends React.Component {
  state = {hasMore: true, elements: []}
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.setState({elements: this.props.pictures})
  }

  render() {
    return (
      <MasonryInfiniteScroller
        hasMore={this.state.hasMore}
        loadMore={() => {
          console.log("loading more", this.state.elements.length)
          this.setState({elements: this.state.elements.concat(this.props.pictures) })
        } }
      >
        { this.state.elements.map((picture, index) => {
          return <Item key={index} picture={picture}/>
        }) }
      </MasonryInfiniteScroller>
    )
  }
}