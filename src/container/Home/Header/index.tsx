import React from 'react';
import './index.scss';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="left">
                    <div className="logo">LuckyDesigner</div>
                </div>
                <div className="right">
                    <div>BLOG</div>
                    <div>MENU</div>
                </div>
            </div>
        )
    }
}