import React from 'react';
import Tweet from "./Tweet";

const TwittList = ({data}) => {
    return (
        <div>
            {
                data.map(item=> <Tweet data={item}/>)
            }
        </div>
    );
};

export default TwittList;
