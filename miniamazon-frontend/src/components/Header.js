import React from 'react';

function Header() {
  const url = 'https://www.sunset.com/wp-content/uploads/bohemian-getaways-mt-shasta-getty-sun-0717-900x500.jpg';
  return (
    <> 
    <h1>Hello World</h1>
    <div>
        <img src={url} style={{width: 650}} alt=' sunset' />
    </div>
    </>
  );
}

export default Header;