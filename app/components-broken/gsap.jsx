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

handleStartLoad() {
  this.progressAnim = this.addAnimation(progressAnim)
  this.otherAnim.timeScale(3.4).reverse()
}
handleProgress(progress) {
  this.progressAnim.tweenTo(progress)
}

var controller = this.addAnimation(animationSource)
controller.timeScale(2).play()


function animationSource(utils) {
  return TweenMax.to(utils.target, 1, {x: 100})
}
this.addAnimation(animationSource)

function animationSource(utils) {
  var button = utils.target.findAll({type: 'button'}).find({role: 'submit'})
  return TweenMax.to(button, 1, {x: 100})
}