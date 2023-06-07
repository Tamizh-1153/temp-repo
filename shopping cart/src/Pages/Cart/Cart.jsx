import React, { useContext } from "react"
import { products } from "../../products"
import { ShopContext } from "../../Context/ShopContext"
import { useNavigate } from "react-router-dom"

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    addToCart,
    updateCartItemCount,
    getTotalAmount,
  } = useContext(ShopContext)

  const totalAmount = getTotalAmount()

  const navigate = useNavigate()

  return (
    <div>
      <div>
        <h3 className="text-center">Your Cart Items</h3>
      </div>
      <div>
        {products.map((product) => {
          console.log(cartItems[product.id])
          if (cartItems[product.id] !== 0) {
            return (
              <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  <div key={product.id} className="d-flex">
                    <img
                      className="card-img-top"
                      src={product.productImage}
                      alt="Image unavailable"
                    />
                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder">{product.productName}</h5>
                        <i class="fa-solid fa-indian-rupee-sign fa-xs"></i>
                        {product.price}
                        <div className="d-flex align-items-center">
                          <button
                            className="btn"
                            onClick={() => removeFromCart(product.id)}
                          >
                            -
                          </button>
                          <input
                            style={{
                              width: "30px",
                              textIndent: "6px",
                              justifyContent: "center",
                            }}
                            value={cartItems[product.id]}
                            onChange={(e) =>
                              updateCartItemCount(
                                Number(e.target.value),
                                product.id
                              )
                            }
                          ></input>
                          <button
                            className="btn"
                            onClick={() => addToCart(product.id)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div>
          <p style={{ fontSize: "1.4rem" }} className="text-center my-4">
            Total : <i class="fa-solid fa-indian-rupee-sign fa-xs"></i>
            {totalAmount}
          </p>
          <div className="d-flex justify-content-around">
            <button
              className="btn btn-secondary mx-4"
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </button>

            <button className="btn btn-secondary mx-4">Checkout</button>
          </div>
        </div>
      ) : (
        <h1
          style={{ color: "grey", fontSize: "50px" }}
          className="text-center mt-5"
        >
          Your cart is empty
        </h1>
      )}
    </div>
  )
}

export default Cart
