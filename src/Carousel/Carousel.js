import React from 'react';
import PostsData from '../data';
import Arrow from './Arrow';
import Slider from './Slider';

export default class Carousel extends React.Component {
    constructor (props) {
        super(props);
       
        this.state = {
            currentImageIndex: 0
        };
       
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }
   
    previousSlide () {
        const lastIndex = PostsData.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
       
        this.setState({
            currentImageIndex: index
        });
    }
   
    nextSlide () {
        const lastIndex = PostsData.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }
   
    render () {
        return (
            <div className="carousel" style={{width: this.props.width,height: this.props.height,}}>
                <Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" />
                <Slider data={ PostsData[this.state.currentImageIndex] } />
                <Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
            </div>
        );
    }
};
