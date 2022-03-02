import React from 'react';
import Beast from './Beast.js';
import BeastsArr from './data.json';



class Main extends React.Component {
    render() {
        return (
            <>
                {BeastsArr.map(beast => <Beast title={beast.title} imgUrl={beast.image_url} description={beast.description} />)}
            </>
        )
    }
}

export default Main;