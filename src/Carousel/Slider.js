import React from 'react';
import Card from '../Card/Card';

const Slider = ({ data }) => {
    return (
        <div className="image-slide" >
            <Card key={0} index={0} details={data}/>
        </div>
    );
};

export default Slider;