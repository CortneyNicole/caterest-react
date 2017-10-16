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
        borderRadius: "15px",
        height: "100%",
        minHeight: "150px",
        padding: "0.2em",
        position: "relative"
      },
      tooltip: (b) => ({
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        borderBottomLeftRadius: "15px",
        borderBottomRightRadius: "15px",
        bottom: "8px",
        color: "#fff",
        display: b ? "initial" : "none",
        fontFamily: "Helvetica",
        maxWidth: "203px",
        minWidth: "203px",
        padding: "6px",
        position: "absolute",
        textAlign: "center",
        wordWrap: "break-word"
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









