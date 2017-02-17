var GSAP = require('react-gsap-enhancer')
var MyComponent = GSAP()(React.createClass({
  render: function() {/*...*/}
}))

import GSAP from 'react-gsap-enhancer'

class MyComponent extends Component {
  render() {/*...*/}
}

export default GSAP()(MyComponent)

function moveAnimation(utils) {
  return TweenMax.to(utils.target, 1, {x: '+=123'})
}

function moveAnimation({target}) {//just ES6 syntax sugar
  var footer = target.find({type: 'footer'})
  var buttons = footer.findAll({type: 'button'})
  ...
}

handleClick() {
  var controller = this.addAnimation(moveAnimation)
...

...
handleStartLoad() {
  this.progressAnim = this.addAnimation(progressAnim)
  this.otherAnim.timeScale(3.4).reverse()
}
handleProgress(progress) {
  this.progressAnim.tweenTo(progress)
}
...

function animationSource(utils) {
  return TweenMax.to(utils.target, 1, {x: 100})
}
this.addAnimation(animationSource)

React.createClass({
    getInitialState: function() {
        return {width: 0};
    },
    componentDidMount: function() {
        TweenLite.to(this, 1, {state: {width: 100}});
    },
    render: function() {
        return <div style={{width: this.state.width}}>Hello World!</div>
    }
});



// 
// 
// 
// update the transform style on every mousemove event
// while it's also animating(y, scale, rotate)

function createAnim({target}) {
  var box = target.find({name: 'box'})

  return new TimelineMax({repeat: -1})
    .to(box, 1, {scale: 1.23, y: '+=120'})
    .to(box, 1, {scale: 1, y: '-=120'})
    .to(box, 1, {rotation: 90}, 1)
}

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {x: 0, y: 0}
  }

  componentDidMount() {
    var rootNode = document.querySelector('.playgroundPreview')
    var {top, left} = rootNode.getBoundingClientRect()
    rootNode.addEventListener('mousemove', e => this.setState({
      x: e.clientX - 60 - left,
      y: e.clientY - 60 - top
    }))

    this.jumpAnim = this.addAnimation(createAnim)
  }

  handleClick = () => {
    this.jumpAnim.paused(!this.jumpAnim.paused())
  }

  render () {
    var {x, y} = this.state

    var style = {
      backgroundColor: GS_GREEN,
      width: 123,
      height: 123,
      transform: `translate(${x}px, ${y}px)`
    }

    var containerStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
    }

    return (
      <div onClick={this.handleClick} style={containerStyle}>
        <Text>Click to pause!</Text>
        <div name='box' style={style}/>
      </div>
    )
  }
}

const GSAPDemo = GSAP()(Demo)
ReactDOM.render(<GSAPDemo/>, mountNode)
