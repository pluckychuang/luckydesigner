
import React from 'react';
import './index.scss'
import Header from './Header'
import Footer from './Footer'

export default class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <Header></Header>
                <div>center</div>
            <Footer></Footer>
            </div>
        )
    }
}