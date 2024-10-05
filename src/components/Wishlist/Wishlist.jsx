import { Button, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { removeWishlistProduct } from "../../features/wishlist/wishlistSlice";

function Wishlist() {
  const wishlistProducts = useSelector(
    (state) => state.wishlist.wishlistProducts
  );
const dispatch = useDispatch()

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
            {wishlistProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.no}</td>
                <td>{product.title}</td>
                <td>
                  <img src={product.image} height="100px" />
                </td>
                <td>{product.description}</td>

                <td>{product.price}</td>

                <td className="w-25">
                  <Button className="w-50 mx-3" variant="dark"
                  onClick={()=> dispatch(addToCart(product),removeWishlistProduct(product))}
                  >
                    Add to Cart
                  </Button>
                  <Button className="w-25 px-3" variant="danger"
                  onClick={()=> dispatch(removeWishlistProduct(product))}
                  >
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
