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
              // this.setState({pictures: this.state.pictures.concat(data)});
              var me = this;
            //   debugger
            // fetch('new_pins.json').then(function(response) {
            //   console.dir(response);
            //   debugger
            //   return response.json();
            // }).then(function(data) {
            //   console.dir(data);
            // });

            var myRequest = new Request('new_pins' + this.state.counter + '.json');
            me.setState({counter: (this.state.counter + 1) % 3});
            fetch(myRequest)
              .then(function(response) { return response.json(); })
              .then(function(data) {
                me.setState({pictures: me.state.pictures.concat(data)});
                console.log(data); // data is defined as a varaible on line 34

          });
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

