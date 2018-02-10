import React, { Component } from "react";
import styled from "styled-components";
import Slide from "./Slide";
import Dots from "./Dots";
import { LeftArrow, RightArrow } from "./Arrows";
import Autoplay from "./Autoplay";

const StyledSlider = styled.section`
  grid-column: 2 / 3;
  border-radius: 0 0 12px 12px;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  white-space: nowrap;
`;

const SliderRapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      translateValue: 0,
      autoplay: true
    };
  }
  setTranslateValue = translateValue => {
    this.setState({
      translateValue
    });
  };
  setIndex = index => {
    this.setState({
      index
    });
  };
  slideWidth = () => {
    const slide = document.querySelector(".slide");
    return slide.clientWidth;
  };
  autoplay = () => {
    if (this.state.autoplay) {
      this.goToNextSlide();
    } else {
      clearInterval(this.interval);
    }
  };
  toggleAutoplay = () => {
    this.setState({
      autoplay: !this.state.autoplay
    });
  };
  renderSlides = () => {
    const { images } = this.props;
    return images.map((curr, i) => <Slide key={i} image={images[i]} />);
  };
  goToPreviousSlide = () => {
    const { index, translateValue } = this.state;
    if (index === 0) {
      return;
      // This isn't the behavior we want, it should
      // setTranslateValue to ... 0? nnn ... nooo ... anyway, and
      // Wait, this.slideWidth() * images.length?
      // setIndex to images.length
    }
    this.setTranslateValue(translateValue + this.slideWidth());
    this.setIndex(index - 1);
  };
  goToNextSlide = () => {
    const { images } = this.props;
    const { index, translateValue } = this.state;
    if (index === images.length - 1) {
      this.setTranslateValue(0);
      this.setIndex(0);
      return;
    }
    this.setTranslateValue(translateValue - this.slideWidth());
    this.setIndex(index + 1);
  };
  handleDotClick = i => {
    const { index, translateValue } = this.state;
    if (i === index) {
      return;
    }
    if (i > index) {
      this.setTranslateValue(-(i * this.slideWidth()));
    } else {
      this.setTranslateValue(translateValue + (index - i) * this.slideWidth());
    }
    this.setIndex(i);
  };
  componentDidMount() {
    this.interval = setInterval(this.autoplay, 5500);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const { images } = this.props;
    const { index, translateValue, autoplay } = this.state;
    return (
      <StyledSlider>
        <SliderRapper
          style={{
            transform: `translateX(${translateValue}px)`,
            transition: "transform ease-out 0.45s"
          }}
        >
          {this.renderSlides()}
        </SliderRapper>
        <Dots
          index={index}
          quantity={images.length}
          dotClick={this.handleDotClick}
        />
        <LeftArrow prevSlide={this.goToPreviousSlide} />
        <RightArrow nextSlide={this.goToNextSlide} />
        <Autoplay autoplay={autoplay} toggle={this.toggleAutoplay} />
      </StyledSlider>
    );
  }
}
