import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Axios from "axios";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import noThumbnail from '../images/no-thumbnail.png'
import avatar from '../images/Avatar.png'
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";

const Movie = ({ props }) => {

     // useParams is used to get data from url parameter in this case genre

    const { id } = useParams();

    const [movie, setMovie] = useState([])

    useEffect(() => {
        Axios.get(`https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&range=1-10&byTitle=${id}`).then((response) => {
            setMovie(response.data.entries)
        })
    }, [id])

    // adding movies to wishlist, checks if localStorage is empty or not before adding

    const addToWishList = (item) => {
        var movies = [];

        if (localStorage.getItem("myItems")==null || localStorage.getItem("myItems").length===0) {
            movies[0] = { title: item.title, thumbnail: item.plprogram$thumbnails["orig-364x250"] ? (item.plprogram$thumbnails["orig-364x250"].plprogram$url) : ('../images/no-thumbnail.png') };
            localStorage.setItem("myItems",JSON.stringify(movies));
            alert("Succesfully added to wishlist")
        } else {
            movies = JSON.parse(localStorage.getItem("myItems"));
           
            var newMovies = JSON.stringify([...movies, { title: item.title, thumbnail:  item.plprogram$thumbnails["orig-364x250"] ? (item.plprogram$thumbnails["orig-364x250"].plprogram$url) : ('../images/no-thumbnail.png') }])
            localStorage.setItem("myItems",  newMovies);
            alert("Succesfully added to wishlist")
        }
        console.log(localStorage.getItem("myItems"))
    }

    return (
        <div>
            {movie && movie.length > 0 ? (<>
                <Container fluid className="100 d-flex flex-column"
                    style={{
                        minHeight: "100vh",
                        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url(${movie[0].plprogram$thumbnails["orig-1188x816"] ? (movie[0].plprogram$thumbnails["orig-1188x816"].plprogram$url) : ('#221f1f')})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "100% 100%",
                    }}>
                    <Row style={{ marginTop: "10%" }} >
                        <Col sm={{ span: 6 }} md={{ offset: 1, span: 4 }}>
                            <div className="headers2">{movie[0].title}</div>
                            <p>
                                {movie[0].description}
                            </p>
                            <p>
                                Release year: {movie[0].plprogram$year}<br/>
                                Cast:
                            </p>
                            {movie[0].plprogram$credits.map((item, index) => {
                                return (
                                    <div key={index} style={{ width: "70px",height:"70px", marginRight: "10px",marginBottom: "10px",float: "left" }}><img src={avatar} alt="Avatar" className="avatar" /><figcaption style={{ fontSize: "10px", color: "white" }}>{item.plprogram$personName}</figcaption>
                                    </div>
                                )
                            })}
                        </Col>
                        <Col sm={{ span: 6 }} md={{ span: 4, offset: 3 }}>
                            <div>
                                <Image style={{ display: "block" }} fluid alt="action" src={movie[0].plprogram$thumbnails["orig-364x250"] ? (movie[0].plprogram$thumbnails["orig-364x250"].plprogram$url) : (noThumbnail)} />
                                <div className="headers" >{movie[0].title}</div>
                                <Button onClick={() => addToWishList(movie[0])} variant="outline-secondary" size="sm" style={{ color: "white", textDecoration: "none", marginLeft: "5px", marginTop: "-10px" }}>Add to wishlist</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>) : (<>Loading...</>)}
        </div>
    );
};

export default Movie;