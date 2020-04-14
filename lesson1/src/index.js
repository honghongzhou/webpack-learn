// import Header from './header.js'
// import SideBar from './sidebar.js'
// import Content from './content.js'
import avatar from './1.jpg'
import style from  './index.scss'
import style1 from '../font/iconfont.css'

console.log(style1)

console.log(style)
// import style from './index.css'


  let Header

  import(
    /* webpackChunkName: "my-chunk-name" */
    /* webpackMode: "lazy" */
    './header.js'
  ).then(module => {
    // var Header = module.default
    Header = module.default
  })

// import './index.css'

var img = new Image()
img.src = avatar
img.classList.add(style.avatar)

var root = document.getElementById('root')
root.innerHTML = `<div class='${style1.iconfont} ${style1['icon-hanglijicun']}'></div>`
root.append(img)


setTimeout(() => {
  new Header()
})