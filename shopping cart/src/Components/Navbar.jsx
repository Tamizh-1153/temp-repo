import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { ShopContext } from "../Context/ShopContext"

const Navbar = () => {
  const { totalCartItems } = useContext(ShopContext)

  const totalItems = totalCartItems()

  return (
    <nav
      style={{ position: "sticky", top: "0", zIndex: "1" }}
      className="navbar navbar-expand-lg navbar-light bg-light"
    >
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#!">
          Brand
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <Link to="/">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
            </Link>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#!">
                    All Products
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    Popular Items
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    New Arrivals
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <Link to="/cart">
              <button style={{fontSize:'1.2rem'}} className="btn btn-outline-dark" type="submit">
                <i
                  style={{ marginRight: "10px" }}
                  className="fa-solid fa-cart-shopping"
                ></i>
                Cart
                <span
                  style={{ marginLeft: "10px" }}
                  className="badge bg-dark text-white rounded-pill"
                >
                  {totalItems}
                </span>
              </button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
