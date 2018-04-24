import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles.css';

class Header extends React.Component {
    render() {
        return (
            <div styleName="container">Header</div>
        );
    }
}

export default CSSModules(Header, styles);