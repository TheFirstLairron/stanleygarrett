import React from 'react';
import ReactDom from 'react-dom';

const App = (props) => {
    return (
        <div>Hello World</div>
    );
}

ReactDom.render(<App/>, document.getElementById("container"));