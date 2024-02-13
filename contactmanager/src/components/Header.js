// No State needed. Just want to show static Markup through JSX
import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.branding}</h1> {/* Direct use with this.props */}
    </div>
  )
}

export default Header;