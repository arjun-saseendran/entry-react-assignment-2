import { Badge, Container, Button, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  cartTotalHandler,
  deleteCartProduct,
} from "../../features/cart/cartSlice";

function Cart() {
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const dispatch = useDispatch();
  const cartTotal = useSelector((state) => state.cart.cartTotal);
  dispatch(cartTotalHandler());

  return (
    <Container className="flex justify-content-center align-items-center vh-100">
      <Row>
        <h1 className="text-center text-white">Cart</h1>
        <Table striped bordered hover className="bg-dark">
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
                <td>
                  <Badge
                    bg="dark"
                    style={{ cursor: "pointer" }}
                    onClick={() => dispatch(increment(product))}
                  >
                    +
                  </Badge>

                  {product.quantity}

                  <Badge
                    bg="dark"
                    style={{ cursor: "pointer" }}
                    onClick={() => dispatch(decrement(product))}
                  >
                    -
                  </Badge>
                </td>
                <td>{product.price}</td>
                <td>{product.total}</td>
                <td>
                  <Button
                    variant="danger"
                    className="text-white"
                    onClick={() => dispatch(deleteCartProduct(product))}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="bg-dark p-3 text-white text-text-center">
          <h4 className="text-end">Cart Total: {cartTotal}</h4>
        </div>
      </Row>
    </Container>
  );
}

export default Cart;
