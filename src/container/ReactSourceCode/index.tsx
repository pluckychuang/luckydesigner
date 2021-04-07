import React from 'react';
import ReactDOM from 'react-dom';



let E2 = () :JSX.Element =>  {
    return (
        <h1 id='title2'>
            hello
            world
        </h1>
    )
}

function ReactSourceCode () {
    return (
        <div>
            <h1>demo</h1>
            {/* <Element></Element> */}
            <E2></E2>
        </div>
    )
}

export default ReactSourceCode;