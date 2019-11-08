import Animation from '../base/animation'
import DataBus   from '../databus'


const ENEMY_WIDTH   = 60
const ENEMY_HEIGHT  = 60

//const __ = {
  //speed: Symbol('speed')
//}

let databus = new DataBus()


export default class Enemy extends Animation {
  constructor() {
    var ENEMY_IMG_SRC = 'images/image/垃圾桶1.png'
    super(ENEMY_IMG_SRC, ENEMY_WIDTH, ENEMY_HEIGHT)
    this.x =100
    this.y = 100
    //this.initExplosionAnimation()
  }

  init(speed) {
    

    //this[__.speed] = speed

    //this.visible = true
  }

  // 预定义爆炸的帧动画
  initExplosionAnimation() {
  //  let frames = []

  //  const EXPLO_IMG_PREFIX  = 'images/explosion'
  //  const EXPLO_FRAME_COUNT = 19

  //  for ( let i = 0;i < EXPLO_FRAME_COUNT;i++ ) {
  //    frames.push(EXPLO_IMG_PREFIX + (i + 1) + '.png')
  //  }

  //  this.initFrames(frames)
  }

  // 每一帧更新子弹位置
  update() {
    //this.y += this[__.speed]

    // 对象回收
    //if ( this.y > window.innerHeight + this.height )
    //  databus.removeEnemey(this)
  }
}
