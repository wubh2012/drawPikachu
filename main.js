let log = console.log.bind(console)

let css = `
/**
 * 准备好一块画布
*/

.wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #fdd31d;
}
.pikachu{
  position: relative;
  width: 282px;
  height: 130px;
}

/*
 * 接下来，画皮卡丘的鼻子
 */

.nose{
  position: absolute;
  top: 51px;
  left: 141px;
  width: 20px;
  height: 10px;
  border-radius: 50%;
  background: black;
  transform: translateX(-50%);
}

/*
 * 接下来，画皮卡丘的眼睛
 */

.eyes{
  position: absolute;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: black;
}
.eyes.left{
  top: 0;
  left: 30px;
}
.eyes.right{
  top: 0;
  right: 30px;
}

/*
 * 接下来，画皮卡丘的眼珠子
 */

.eyes.left::after{
  content: '';
  position: absolute;
  top: 6px;
  right: 6px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
}

.eyes.right::after{
  content: '';
  position: absolute;
  top: 6px;
  left: 6px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
}

/*
 * 接下来，画皮卡丘的脸颊
 */

.cheek{
  position: absolute;
  top: 60px;
  width: 50px;
  height: 50px;
  border: 2px solid black;
  border-radius: 50%;
  background: #f91911;
}
.cheek.left {
  left: 0;
}
.cheek.right{
  right: 0;
}

/*
 * 接下来，画皮卡丘的嘴巴
 */

.mouth{
  position: absolute;
  top: 80px;
  width: 24px;
  height: 10px;
  border: 2px solid black;
  border-width: 0 0 2px 0px;
  transform: translateX(-50%);
}
.mouth.left{
  left: 117px;  
  border-radius: 0 0 70% 100%;
  transform: rotate(-20deg);
}
.mouth.right{
  right: 117px;  
  border-radius: 0 0 100% 70%;  
  transform: rotate(20deg);
}

/*
 * 再让皮卡丘叼个树枝
 */

.leafbranch{
  position: absolute;
  top: 95px;
  left: 102px;
  width: 40px;
  height: 2px;
  background: brown;
  transform: rotate(-30deg);
  animation: moving1 2s ease infinite;
}
/*
 * 再加点叶子
 */
.leaf1{
  position: absolute;
  top: 100px;
  left: 85px;
  width: 20px;
  height: 26px;
  border-radius: 0 100% 0 100%;
  background: darkgreen;
  transform: rotate(-270deg);
  animation: moving2 2s ease infinite;
}
.leaf2{
  position: absolute;
  top: 96px;
  left: 86px;
  width: 20px;
  height: 16px;
  border-radius: 0 100% 0 100%;
  background: green;
  transform: rotate(-30deg);
  animation: moving3 2s ease infinite;
}
/*
 * 再来点动画效果
 */
.leafbranch,.leaf1,.leaf2{ animation-play-state: paused; }

@keyframes moving1 {
  50%{
    top: 92px;
    transform: rotate(-20deg);
  }
}
@keyframes moving2{
  50%{
    top: 95px;
    left: 83px;
  }
}
@keyframes moving3{
  50%{
    top: 91px;
    left: 84px;
  }
}

.leafbranch,.leaf1,.leaf2{ animation-play-state: running; }


/*
 * 大功告成 😀
 */
`
let duration = 50
function writeCss(prefix, csscode, callback) {
  let cssElement = document.querySelector('#code')
  let mystyle = document.querySelector('#mystyle')
  let n = 0
  let timerId = setTimeout( function run() {
    n += 1
    let temp = prefix + csscode.substring(0, n)
    cssElement.innerHTML = temp
    mystyle.innerHTML = temp
    cssElement.scrollTop = cssElement.scrollHeight
    if (n > csscode.length) {
      // clearTimeout(timerId)
      callback && callback.call()
    }else{
      timerId = setTimeout(run, duration);
    }
  }, duration)
}

function bindEvent(){
  let range = document.querySelector('#speed')
  range.addEventListener('change', function(e){
    let speed = e.target.value - 0
    duration = 100 - speed
    log('speed', duration)
  })
}
function __main(){
  writeCss('', css, ()=>{
    log('完成')
  })

  bindEvent()

}
__main()


