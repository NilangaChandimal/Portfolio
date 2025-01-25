import React from 'react'
import './NavBar.css'

function MenuList(props) {
  return (
    <div>
      <a href={props.url} className='link'>{props.linkname}</a>
    </div>
  )
}

export default MenuList
