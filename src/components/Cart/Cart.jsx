import { Badge, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";


function Cart() {
const cartProducts = useSelector(state => state.cart.cartProducts)

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
                  <Badge bg="dark" className="me-1" style={{ cursor: "pointer" }}>
                    +
                  </Badge>
                  {product.quantity}
                  <Badge bg="dark" className="ms-1 cu" style={{ cursor: "pointer" }}>
                    -
                  </Badge>
                </td>
                <td>{product.price}</td>
                <td>{product.total}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Cart;
