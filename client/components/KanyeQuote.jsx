import React from 'react'
// import styles from './animated-image.module.scss'

import { getKanyequote } from '../api/kanye'

export default class KanyeQuote extends React.Component {

    state = {
        quoteInfo: {},
        wobble: 0,
    }

    componentDidMount() {
        this.inputStatedata()
    }

    inputStatedata = () => {
        getKanyequote()
            .then((quotedata) => {
            console.log(quotedata)
                this.setState({
                  
                    quoteInfo: quotedata,
                })

        })
    }

    setWobble = (wobble) => {
        console.log(wobble)
        this.setState({
            wobble: wobble,
        })
    }

    render() {
        
        const quote = this.state.quoteInfo


        return (
            <>
                <div className="textDiv">
                    <p className="quoteText">{quote.quote}</p>
                </div>   
                
                    <button type="submit" onClick={this.inputStatedata} className="button">
                        <img className="image kanyehead" src="https://i.imgur.com/iqwjK8t.png" alt="" 
                            onClick={() => this.setWobble(1)}
                            onAnimationEnd={() => this.setWobble(0)}
                            wobble={this.state.wobble}
                        />
                    </button>
            </>
        )    
    }
}

