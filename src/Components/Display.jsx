import React from 'react';
import { useParams } from 'react-router-dom';

const Display = (props) => {

    // PathVariable just match up from parent setting up <Route path="/:PathVariable">
    let { PathVariable, wordColor, bgColor } = useParams()

    return (
        <div>
            {
                // isNaN(number) = false
                // is not a number(string) = true
                isNaN(PathVariable)
                    ? <h1 style={{ color: wordColor, backgroundColor: bgColor }}>
                        The word is: {PathVariable}</h1>
                    : <h1 style={{ color: wordColor, backgroundColor: bgColor }}>
                        The number is: {PathVariable}</h1>
            }
        </div>
    )
};

export default Display;
