import React, { useContext } from "react"
import { products } from "../../products"
import { ShopContext } from "../../Context/ShopContext"

const Items = () => {
  const { addToCart, cartItems, removeFromCart, updateCartItemCount } =
    useContext(ShopContext)

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map((product) => (
            <div className="col mb-5">
              <div className="card h-100" key={product.id}>
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
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {cartItems[product.id] > 0 ? (
                      // <>({cartItems[product.id]})</>
                      <>
                        <button
                          className="btn btn-secondary "
                          onClick={() => removeFromCart(product.id)}
                        >
                          -
                        </button>
                        <input
                          style={{
                            width: "30px",
                            textAlign: "center",
                            border: "none",
                            fontSize: "1.2rem",
                            outline: "none",
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
                          className="btn btn-secondary"
                          onClick={() => addToCart(product.id)}
                        >
                          +
                        </button>
                      </>
                    ) : (
                      <button
                        className="btn btn-outline-dark mt-auto"
                        onClick={() => addToCart(product.id)}
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Items
