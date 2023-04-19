import "./Navigation.scss";

export const Navigation = () => {
  return (
    <nav className="navigation">
    <div className="logo">Logo</div>
    <ul className="menu">
      <li className="menu-item">Home</li>
      <li className="menu-item">Listings</li>
      <li className="menu-item">Features</li>
      <li className="menu-item">Pages</li>
      <li className="menu-item">Sign Up</li>
    </ul>
    <button className="add-listing-btn">Add Listing</button>
  </nav>
  );
};
