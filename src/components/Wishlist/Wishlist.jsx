import { Button, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";

function Wishlist() {
  const cartProducts = useSelector((state) => state.cart.cartProducts);

  return (
    <>
      <h1 className="text-center text-white m-5">Wishlist</h1>
      <Container className="m-5">
        <Table striped bordered hover className="bg-primary">
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Image</th>
              <th>Description</th>

              <th>Price</th>

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

                <td>{product.price}</td>

                <td className="w-25">
                  <Button className="w-50 mx-3" variant="dark">
                    Add to Cart
                  </Button>
                  <Button className="w-25 px-3" variant="danger">
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Wishlist;
