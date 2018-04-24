import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles.css';

import Header from '../header';
import Content from '../content';

class App extends React.Component {
    render() {
        return (
            <div styleName="container">
                <Header />
                <Content />
            </div>
        );
    }
}

export default CSSModules(App, styles);