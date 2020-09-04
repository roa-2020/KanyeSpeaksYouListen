import React from 'react'

import { getKanyequote } from '../api/kanye'

export default class KanyeQuote extends React.Component {

    state = {
        quoteInfo: {},
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

    render() {

        const quote = this.state.quoteInfo


        return (
            <>
                <div className="textDiv">
                    <p className="quoteText">{quote.quote}</p>
                </div>   
                
                    <button onClick={this.inputStatedata} className="button"><img className="kanyehead" src="https://i.imgur.com/iqwjK8t.png" alt=""/></button>
            </>
        )    
    }
}

