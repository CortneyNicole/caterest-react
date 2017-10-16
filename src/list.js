import React from 'react';
import Item from './item';
import { Grid, GridItem } from 'react-masonry-infinite-scroll'

export default class List extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {pictures: [], counter: 0}
  componentDidMount() {
  }
  render() {
    return (
        <Grid
          columnWidth={236}
          fitWidth={true}
          gutter={5}
          loadMore={() => {
            var more = this;
            //new request call the new_pin files
            var myRequest = new Request('new_pins' + this.state.counter + '.json');
            //increment the counter through new_pins0-2 creating a vary simple lazy load. Instead of continiously loading the array of pins.
            more.setState({counter: (this.state.counter + 1) % 3});
            fetch(myRequest)
            //grad json data
              .then(function(response) { return response.json(); })
              //keep adding to the array of json items(photos)
              .then(function(data) {
                more.setState({pictures: more.state.pictures.concat(data)});
                console.log(data); // data is defined as a varaible on line 34

          });
          } }
          limit={6}
          scrollThreshold={300}
          itemsLeft={1}
        >
          { this.state.pictures.map((picture, index) => {
            return (
              <GridItem key={index}>
                <Item picture={picture}/>
              </GridItem>)
          }) }
        </Grid>
        //add pins to picture array ^
    )
  }
}

