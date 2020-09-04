import React from 'react'
import KanyeQuote from './KanyeQuote'



class App extends React.Component {
  state = {
    backgroundColorR: 0,
    backgroundColorG: 0,
    backgroundColorB: 0,
    ColorR: 0,
    ColorG: 0,
    ColorB: 0,
  }

  componentDidMount() {
    this.changeColour()
    setInterval(this.changeColour, 4000)
  }

  randomShade = () => {
    return Math.floor(Math.random() * 256)
  }

  changeColour= () => {
    this.setState({
      backgroundColorR: this.randomShade(), 
      backgroundColorG: this.randomShade(), 
      backgroundColorB: this.randomShade(), 
      ColorR: this.randomShade(),
      ColorG: this.randomShade(),
      ColorB: this.randomShade(),
    })
  }

  render() {
    const {backgroundColorR, backgroundColorG, backgroundColorB, ColorR, ColorG, ColorB} = this.state
   
     return (
    <div className="wrapper" style={{backgroundColor: `rgb(${backgroundColorR},${backgroundColorG},${backgroundColorB})`, transition: 'background-color 2s'}}>
    <div className="container" >
      <h1 className="title"   style= {{color: `rgb(${ColorR},${ColorG},${ColorB})`, transition: 'color 1s'}}>Ima let you finish, But?</h1>
      <KanyeQuote />
      </div>
    </div> 
   
  )}
}

export default App
