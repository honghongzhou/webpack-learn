
import { cube } from './main'

  let Header

  import(
    /* webpackChunkName: "my-chunk-name" */
    /* webpackMode: "lazy" */
    './header.js'
  ).then(module => {
    Header = module.default
  })
let result = cube(5)
console.log(result)

setTimeout(() => {
  new Header()
  if(module.hot){
    module.hot.accept('./header.js', () => {
      console.log('header.js changed')
    })
  }
}, 3000)