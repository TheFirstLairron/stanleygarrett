import React from 'react';
import ReactDom from 'react-dom';

import App from './components/app';

const Root = (props) => {
    return (
        <App />
    );
}

ReactDom.render(<Root />, document.getElementById("container"));