import React, { useState } from 'react';

import {
  useParams
}from "react-router-dom";

import { CartContext } from '../contexts/CartProvider'

import Menu from '../components/Menu';

import { Col, Row, Button } from 'reactstrap'
import './ItemProduct.css'

const ItemDetail = () => {
  let { id } = useParams();
  id = parseInt(id)
  const [data] = useState(
    [{ "id": 1, "img_product": "http://dummyimage.com/180x250.jpg/ff4444/ffffff", "name_product": "Bí Mật Thế Giới LoGo", "author": "Caitrin O'Brien", "price": 508511, "type": "1" },
    { "id": 2, "img_product": "http://dummyimage.com/180x250.jpg/dddddd/000000", "name_product": "Vũ Trụ Toàn Ảnh", "author": "Violette Jorn", "price": 410440, "type": "1" },
    { "id": 3, "img_product": "http://dummyimage.com/180x250.jpg/dddddd/000000", "name_product": "Internet Của Tiền Tệ", "author": "Arlen Wardhaw", "price": 1089443, "type": "2" },
    { "id": 4, "img_product": "http://dummyimage.com/180x250.jpg/ff4444/ffffff", "name_product": "MBA Căn Bản", "author": "Alic Totterdill", "price": 2511148, "type": "2" },
    { "id": 5, "img_product": "http://dummyimage.com/180x250.jpg/5fa2dd/ffffff", "name_product": "Sáng Tư Duy Tạo Ý Tưởng", "author": "Lucio Benardet", "price": 2639832, "type": "3" },
    { "id": 6, "img_product": "http://dummyimage.com/180x250.jpg/ff4444/ffffff", "name_product": "Phát Minh Cuối Cùng", "author": "Fania Beese", "price": 2426092, "type": "3" }
    ]
  );

  return (
    <Col md='9'>
      <Menu></Menu>
      {data.filter(x => x.id === id).map(item => (
          <div className='ItemProduct mb-3'>
            <Row className='pt-3'>
              <Col md='4'>
                <img className='m-auto' src={item.img_product} alt={item.id}></img>
              </Col>
              <Col md='8'>
                <h3>{item.name_product}</h3>
                <p>Giá bán: {item.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</p>
                <p>Trạng thái: Còn hàng</p>
                <CartContext.Consumer>
                {
                  ({addToCart}) => (
                  <Button onClick={() => addToCart(item)} color="info">Thêm vào giỏ hàng</Button>

                  )
                }
                </CartContext.Consumer>
              </Col>
            </Row>
            <Row className='pt-3'>
              <div className='ItemProduct-description'>
                <h4>Mô tả</h4>
                <p>
                  Lược sử vạn vật là cuốn sách phổ biến khoa học trình bày một cách ngắn gọn lịch sử nghiên cứu khoa học tự nhiên,những thành tựu khoa học trong các lĩnh vực khoa học tự nhiên chính: vật lý,hóa học,sinh học, địa chất,thiên văn...với nhiều tên tuổi, giai thoại và sự thật.Với cuốn sách này,người đọc sẽ biết được những giới hạn trong tri thức của con người về vũ trụ và cả về chính trái đất.Đây là cuốn sách khoa học phổ thông bán chạy nhất nước Anh năm 2005 với hơn 300.000 bản in. Nhà phê bình người Anh,Craig Brown thậm chí đã nhận xét rằng tác phẩm này xứng đáng bán được 500.000.000.000 cuốn(theo cách nói của chính Bryson, bằng với số proton có trong một dấu chấm câu).William McGuire Bill Bryson,tác giả cuốn sách Lược sử vạn vật - A Short History of Nearly Everything sinh năm 1951,là tác giả nổi tiếng hàng đầu trong thể loại non - fiction ở Bắc Mỹ,với vô số người hâm mộ trên khắp thế giới
                </p>

              </div>
            </Row>

          </div>
        ))
      }

    </Col>
  )
}

export default ItemDetail;