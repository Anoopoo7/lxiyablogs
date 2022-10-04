/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
const Navbar = () => {
  return (
    <div className="container navbar-light sticky-top bg-white">
      <nav className="navbar navbar-expand-lg d-flex justify-content-between">
        <a className="navbar-brand" href="/">
          <b> Navbar</b>
        </a>
        <button
          className="navbar-toggler p-0 m-0 border-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img className="w-50" src="/icons8-menu-64.png" alt="" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0 d-block d-lg-flex align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="/profile">
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/wishlist">
                Wishlist
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cart">
                cart
              </a>
            </li>
            <li className="nav-item">
              <form className=" nav-link form-inline d-flex">
                <input
                  className="form-control mr-sm-1 w-75"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <a className="nav-link" href="/product-list/">
                  <img
                    src="/icons8-google-web-search-50.png"
                    alt="search"
                    width={42}
                  />
                </a>
              </form>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
