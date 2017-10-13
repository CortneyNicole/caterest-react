import React from 'react';
import Item from './item';
import { Grid, GridItem } from 'react-masonry-infinite-scroll'

export default class List extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {pictures: []}
  componentDidMount() {
    this.setState({pictures: this.props.pictures})
  }
  render() {
    return (
        <Grid
          columnWidth={236}
          fitWidth={false}
          gutter={5}
          loadMore={() => {
              console.log("calling load more")
              this.setState({pictures: this.state.pictures.concat(this.props.pictures)})
          } }
          limit={6}
          scrollThreshold={400}
          itemsLeft={1}
        >
          { this.state.pictures.map((picture, index) => {
            return (
              <GridItem style={ { margin: "auto" } } key={index}>
                <Item picture={picture}/>
              </GridItem>)
          }) }
        </Grid>
    )
  }
}


