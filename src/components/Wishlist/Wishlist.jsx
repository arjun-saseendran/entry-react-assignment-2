import { Button, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { removeWishlistProduct } from "../../features/wishlist/wishlistSlice";

function Wishlist() {
  const wishlistProducts = useSelector(
    (state) => state.wishlist.wishlistProducts
  );
  const dispatch = useDispatch();

  return (
    <Container className="vh-100">
      <Row>
        <h1 className="text-center text-white">Wishlist</h1>
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
            {wishlistProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.no}</td>
                <td>{product.title}</td>
                <td>
                  <img src={product.image} height="100px" />
                </td>
                <td>{product.description}</td>

                <td>{product.price}</td>

                <td>
                  <Button
                    variant="dark"
                    onClick={() => {
                      return dispatch(
                        addToCart(product),
                        dispatch(removeWishlistProduct(product))
                      );
                    }}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => dispatch(removeWishlistProduct(product))}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}

export default Wishlist;
