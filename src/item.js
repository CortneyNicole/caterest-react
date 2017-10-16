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
        minHeight: "150px",
        height: "100%",
        // Width: "210px",
        padding: "0.2em",
        position: "relative",
        borderRadius: "15px"
      },
      tooltip: (b) => ({
        display: b ? "initial" : "none",
        position: "absolute",
        bottom: "8px",
        borderRadius: "15px",
        maxWidth: "203px",
        minWidth: "203px",
        textAlign: "center",
        color: "#fff",
        wordWrap: "break-word",
        padding: "6px",
        backgroundColor: "rgba(0, 0, 0, 0.3)"
      })
    }
    return (
      <div
        style={ styles.overlay }
        onMouseOver={ () => this.setState({ showDescription: true }) }
        onMouseOut={ () => this.setState({ showDescription: false }) }
      >
        <div style={ styles.tooltip(this.state.showDescription) } >{ this.props.picture.description }</div>
        <img className="image" src={this.props.picture.images["236x"].url} alt="image"/>
      </div>
    )
  }
}









