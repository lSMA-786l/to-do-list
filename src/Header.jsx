import React from 'react';

function Header() {
  return (
    <header className="py-4 mb-4 d-flex flex-column align-items-center">
      <span style={{fontSize: '2.5rem', color: '#ffd700', marginBottom: '0.5rem'}}>
        <svg width="40" height="40" fill="#ffd700" viewBox="0 0 24 24"><path d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 20 12 16.77 7.82 20 9 12.91l-5-3.64 5.91-.01z"/></svg>
      </span>
      <h1 style={{fontWeight: 700, letterSpacing: '2px'}}>lets do it now </h1>
    </header>
  );
}

export default Header;