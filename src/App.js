import React from 'react';
import Header from "./component/Header/Header";
import MapBody from "./component/MapBody/MapBody";

const App = () => {
    return(
        <div className='app-wrapper'>
            <Header />
            <div className='app-wrapper-content'>
                <MapBody />
            </div>
        </div>
    )
}

export default App;