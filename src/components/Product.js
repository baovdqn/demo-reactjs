import React, { useState } from 'react';
import './Product.css'

import ItemProduct from '../pages/ItemProduct'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import {
  BrowserRouter as Router,
  Link,
  useRouteMatch,
} from "react-router-dom";

import {
  Col,
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Row, Button
} from 'reactstrap';


import { CartContext } from '../contexts/CartProvider'

const Product = (props) => {
  const [data, setData] = useState(
    [{ "id": 1, "img_product": "http://dummyimage.com/180x250.jpg/ff4444/ffffff", "name_product": "Bí Mật Thế Giới LoGo", "author": "Caitrin O'Brien", "price": 508511, "type": "1" },
    { "id": 2, "img_product": "http://dummyimage.com/180x250.jpg/dddddd/000000", "name_product": "Vũ Trụ Toàn Ảnh", "author": "Violette Jorn", "price": 410440, "type": "1" },
    { "id": 3, "img_product": "http://dummyimage.com/180x250.jpg/dddddd/000000", "name_product": "Internet Của Tiền Tệ", "author": "Arlen Wardhaw", "price": 1089443, "type": "2" },
    { "id": 4, "img_product": "http://dummyimage.com/180x250.jpg/ff4444/ffffff", "name_product": "MBA Căn Bản", "author": "Alic Totterdill", "price": 2511148, "type": "2" },
    { "id": 5, "img_product": "http://dummyimage.com/180x250.jpg/5fa2dd/ffffff", "name_product": "Sáng Tư Duy Tạo Ý Tưởng", "author": "Lucio Benardet", "price": 2639832, "type": "3" },
    { "id": 6, "img_product": "http://dummyimage.com/180x250.jpg/ff4444/ffffff", "name_product": "Phát Minh Cuối Cùng", "author": "Fania Beese", "price": 2426092, "type": "3" }
    ]
  );
  const { type } = props;
  let match = useRouteMatch();
  console.log(match);

  return (
    <Row>
      { type === 'all' && data.map(item =>
      (
        <Col xs='6' md='4'>
          <Card className='mb-2 card-product'>
            <CardImg top src={item.img_product} alt="Card image cap" />
            <CardBody>
              <CardTitle>
                {item.name_product}
              </CardTitle>
              <CardSubtitle className="mb-2 text-muted">
                <span>{item.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}đ</span>

              </CardSubtitle>
              <CartContext.Consumer>
                {({ addToCart }) => (
                  <div className='button-product'>
                    <Button onClick={() => addToCart(item)} color="success">Thêm vào giỏ</Button>
                    <Link to={`${item.id}`}>
                      <Button color="danger">
                        <FontAwesomeIcon icon={faSearch} />
                        Chi tiết
                    </Button>

                    </Link>
                  </div>
                )}
              </CartContext.Consumer>

            </CardBody>
          </Card>

          {/* <Route path={`/id=${match.url}`}>
                <ItemProduct></ItemProduct>
              </Route> */}

        </Col>
      )
      )
      }

      { type !== 'all' && data.filter(x => x.type === type).map(item => (
        <Col xs='6' md='4'>
          <Card className='mb-2 card-product'>
            <CardImg top src={item.img_product} alt="Card image cap" />
            <CardBody>
              <CardTitle>{item.name_product}</CardTitle>
              <CardSubtitle className="mb-2 text-muted">
                <span>{item.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}đ</span>
              </CardSubtitle>
              <CartContext.Consumer>
                {({ addToCart }) => (
                  <div className='button-product'>
                    <Button onClick={() => addToCart(item)} color="success">Thêm vào giỏ</Button>
                    <Link to={`${item.id}`}>
                      <Button color="danger">
                        <FontAwesomeIcon icon={faSearch} />
                    Chi tiết
                    </Button>

                    </Link>

                  </div>
                )}
              </CartContext.Consumer>
            </CardBody>
          </Card>
        </Col>
      ))
      }
      { type !== 'all' && data.filter(x => x.type === type).length === 0 &&
        <Col xs='6' md='4'>
          Chưa có sản phẩm
      </Col>
      }
    </Row>
  );
};

export default Product;