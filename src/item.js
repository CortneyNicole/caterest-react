import React from 'react';

export default class Item extends React.Component {
  state = { showDescription: false }
  constructor(props) {
    super(props)
  }

  render() {
    const styles = {
      overlay: {
        backgroundColor: "transparent",
        minHeight: "100px",
        height: "100%",
        width: "236px",
        padding: "0.2em",
        position: "relative"
      },
      tooltip: (b) => ({
        display: b ? "initial" : "none",
        position: "absolute",
        backgroundColor: "rgba(255, 255, 255, 0.3)"
      })
    }
    return (
      <div
        style={ styles.overlay }
        onMouseOver={ () => this.setState({ showDescription: true }) }
        onMouseOut={ () => this.setState({ showDescription: false }) }
      >
        <div style={ styles.tooltip(this.state.showDescription) } >{ this.props.picture.description }</div>
        <img src={this.props.picture.images["236x"].url} alt="image"/>
      </div>
    )
  }
}









