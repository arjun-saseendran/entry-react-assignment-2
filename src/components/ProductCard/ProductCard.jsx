import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";
import { addToWishlist } from "../../features/wishlist/wishlistSlice";

function ProductCard() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        {products.map((product) => (
          <Col xs={12} sm={6} md={4} xl={3} key={product.id}>
            <Card className="mb-4" style={{ background: "#D3E0EA" }}>
              <Card.Img
                variant="top"
                src={product.image}
                style={{
                  height: "200px",
                  objectFit: "contain",
                  padding: "10px",
                }}
              />
              <Card.Body>
                <Card.Title style={{ maxHeight: "20px", overflow: "hidden" }}>
                  {product.title}
                </Card.Title>
                <Card.Text style={{ maxHeight: "78px", overflow: "hidden" }}>
                  {product.description}{" "}
                </Card.Text>
                <Card.Text style={{ maxHeight: "78px", overflow: "hidden" }}>
                  ${product.price}
                </Card.Text>
                <Button
                  className="mx-2"
                  variant="dark"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add to cart
                </Button>
                <Link to={'/wishlist'}>
                  <Button variant="dark" onClick={()=> useDispatch(addToWishlist(product))}>Add to wishlist</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductCard;
