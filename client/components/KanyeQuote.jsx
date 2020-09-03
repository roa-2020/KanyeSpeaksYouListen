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
                <p>{quote.quote}</p>

            </>
        )    
    }
}

