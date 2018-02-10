# slider-app

Hi! This is an image slider built in [React](https://reactjs.org/) on a [Create-React-App](https://github.com/facebook/create-react-app) project, styled with [styled-components](https://www.styled-components.com/), and based off of Daniel Zuzevich's work [1](https://medium.com/@ItsMeDannyZ/build-an-image-slider-with-react-es6-264368de68e4) [2](https://github.com/DZuz14/React-Image-Viewer), except I took out [Redux](https://redux.js.org/) because I couldn't figure that part out, and also while [Daniel's Heroku site](https://react-slider.herokuapp.com/) has autoplay, his repo kinda doesn't, so I put that in.

## v0.1.1 !!!

2018-02-10 I fixed autoplay(), componentDidMount(), and componentWillUnmount() so that if the component is part of a route, say, and you navigate away, it doesn't throw errors because the interval is still running :) THANKS @VCARL! Also my sister is in labor omg.

As of 2018-02-08, I'm not really done with it, and I don't really understand like, how the tranlate thing really works or what's exactly going on with the renderSlides method, and I'm sure I'm missing something in the styling, because I've been using styled-components (easy and [plays nice](https://www.styled-components.com/docs/basics#react-native) with [React Native!](https://facebook.github.io/react-native/)) but I think I'm missing stuff because I don't understand SCSS, which the original styling is in, and I didn't see an easy way to get those two lines out of the SliderRapper (rikki-erra F-F-O, heeeere we go!) either, and also there's the behavior of goToPreviousSlide when index === 0, and also ... yea, it doens't really work all that well, but it's a good start! Or a bad start ... it's a start!

If anyone feels like helping me understand those things, or if you want to use any of this, that's why I put it up, please don't slam me too hard for my bad code, it's been a little rough here :(