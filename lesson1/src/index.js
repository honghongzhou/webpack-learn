
import style from  './index.scss'

  let Header

  import(
    /* webpackChunkName: "my-chunk-name" */
    /* webpackMode: "lazy" */
    './header.js'
  ).then(module => {
    Header = module.default
  })

var img = new Image()
img.src = avatar
img.classList.add(style.avatar)


console.log('123')

setTimeout(() => {
  new Header()
}, 3000)