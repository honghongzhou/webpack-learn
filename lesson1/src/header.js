import avatar from './1.jpg'
// import style from  './index.scss'
function Header () {
    var dom = document.getElementById('root')
    var header = document.createElement('div')
    header.innerText = 'header'
    dom.append(header)

    var img = new Image()
    img.src = avatar
    img.classList.add('avatar')
    dom.append(img)
}

export default Header