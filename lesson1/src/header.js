import avatar from './1.jpg'
import style from  './index.css'

console.log('header')
function Header () {
    var dom = document.getElementById('root')
    var header = document.createElement('div')
    header.innerText = 'header'
    dom.append(header)

    var img = new Image()
    img.src = avatar
    img.classList.add(style.avatar)
    dom.append(img)
}

export default Header