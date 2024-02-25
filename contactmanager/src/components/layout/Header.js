// No State needed. Just want to show static Markup through JSX
import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dard bg-info mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">{props.branding}</a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <h1>{props.branding}</h1> */}
      {/*<h1 style={headingStyle}>{props.branding}</h1> */} {/* Direct use with this.props */}
      {/* <h1 style={{ color: 'red', fontSize: '50px' }}>{props.branding}</h1> */}
    </div>
  );
};
// If we don't pass anything in props of branding, we need to show something.
Header.defaultProps = {
  branding: "Original"
}

// Expected prop type, gives warning if given wrong prop type / Type validation
Header.propTypes = {
  branding: PropTypes.string.isRequired
};

const headingStyle = {
  color: 'green',
  fontSize: '40px'
};

export default Header;