import { Badge, Container, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  cartTotalHandler,
  deleteCartProduct
} from "../../features/cart/cartSlice";

function Cart() {
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const dispatch = useDispatch();
  const cartTotal = useSelector((state) => state.cart.cartTotal);
  dispatch(cartTotalHandler());

  return (
    <>
      <h1 className="text-center text-white m-5">Cart</h1>
      <Container className="m-5">
        <Table striped bordered hover className="bg-primary">
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Image</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.no}</td>
                <td>{product.title}</td>
                <td>
                  <img src={product.image} height="100px" />
                </td>
                <td>{product.description}</td>
                <td style={{ width: "120px" }}>
                  <Badge
                    bg="dark"
                    className="me-1"
                    style={{ cursor: "pointer" }}
                    onClick={() => dispatch(increment(product))}
                  >
                    +
                  </Badge>

                  {product.quantity}

                  <Badge
                    bg="dark"
                    className="ms-1"
                    style={{ cursor: "pointer" }}
                    onClick={() => dispatch(decrement(product))}
                  >
                    -
                  </Badge>
                </td>
                <td>{product.price}</td>
                <td>{product.total}</td>
                <td><Button variant="danger" className="text-white" onClick={()=> dispatch(deleteCartProduct(product))}>Delete</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="bg-dark w-100 p-3 text-white text-text-center">
          <h4 className="text-end" style={{ marginRight: "10px" }}>
            Cart Total: {cartTotal}
          </h4>
        </div>
      </Container>
    </>
  );
}

export default Cart;
