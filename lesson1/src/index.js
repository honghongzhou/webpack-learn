// import Header from './header.js'
// import SideBar from './sidebar.js'
// import Content from './content.js'
import avatar from './1.jpg'
import style from  './index.scss'

  let Header

  import(
    /* webpackChunkName: "my-chunk-name" */
    /* webpackMode: "lazy" */
    './header.js'
  ).then(module => {
    // var Header = module.default
    Header = module.default
    console.log(Header)
  })

// import './index.css'
var img = new Image()
img.src = avatar
img.classList.add(style.avatar)

var root = document.getElementById('root')
root.append(img)


setTimeout(() => {
  new Header()
})