import React, { useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import noThumbnail from '../images/no-thumbnail.png'
import { useNavigate  } from "react-router-dom";

const Wishlist = ({props}) => {

    const navigate = useNavigate();

    const [wishList, setWishList] = useState([])

    // retrieving wishlist from localStorage

    useEffect(() => {
        setWishList(JSON.parse(localStorage.getItem("myItems")))
    }, [])

    const removeWishList = (title) => {
            let filteredArray = wishList.filter(item => item.title !== title)
            localStorage.setItem("myItems",JSON.stringify(filteredArray)); 
            setWishList(filteredArray)
            alert("Succesfully removed from wishlist")  
    }

    return (
        <div>
            <Container fluid>
            <Row fluid>
            {wishList && wishList.length > 0 ? (<>
                {wishList.map((item, index) => {
                                return (
                                    <Col key={index} md={4} sm={6} lg={3} fluid>
                                        <Image fluid alt="action" src={wishList[index].thumbnail ? (wishList[index].thumbnail):(noThumbnail)} />
                                    <figcaption >
                                    <div onClick={
                                        ()=>{navigate(`/movie/${item.title}`)}} 
                                        className="headers">{item.title}</div>
                                        <Button onClick={() => removeWishList(wishList[index].title)} variant="outline-danger" size="sm" style={{ color: "white", textDecoration: "none", marginLeft: "5px", marginTop: "-10px" }}>Remove</Button></figcaption>
                                    </Col>                
                                )
                            })}
                            
                    </>) : (<div className="headers">no data</div>)}
                    </Row>  
            </Container>
        </div>
    );
};

export default Wishlist;