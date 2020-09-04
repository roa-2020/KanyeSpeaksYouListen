import React from "react";

const moveOffsetInFloats = 10;
const width = window.innerWidth;
const height = window.innerHeight;

function getRandomNumberUpTo(end) {
  return Math.floor(Math.random() * end * 10) / 10 - end / 5;
}

class Float extends React.Component {
  const;
  state = {
    xOffset: getRandomNumberUpTo(moveOffsetInFloats),
    yOffset: getRandomNumberUpTo(moveOffsetInFloats),
    x: getRandomNumberUpTo(window.innerWidth),
    y: getRandomNumberUpTo(window.innerHeight),
    style: {
      position: "absolute",
      borderRadius: "50px/50px",
      marginLeft: "-20px",
      marginRight: "-20px",
      opacity: "0.5",
      
    },
  };

  componentDidMount = () => {
    const changeIntervalInSeconds = 0.05;
    const interval = window.setInterval(() => {
      let newX = this.state.x + this.state.xOffset;
      let newY = this.state.y + this.state.yOffset;

      if (newX < 0) {
        console.log("out of bounds!", newX);
        newX = 0;
      }

      if (newY < 0) {
        console.log("out of bounds!", newY);
        newY = 0;
      }

      this.setState({
        x: newX,
        y: newY,
      });
      if (Math.random() < 0.1) {
        this.setState({
          xOffset: getRandomNumberUpTo(moveOffsetInFloats),
          yOffset: getRandomNumberUpTo(moveOffsetInFloats),
        });
      }
    }, changeIntervalInSeconds * 1000);
  };

  render() {
    return (
      <div>
        <img src="kanye.png" width='200' height='200'
        style={{
          ...this.state.style,
          top: this.state.y,
          left: this.state.x,
        }} />
      </div>
    );
  }
}

export default Float;
