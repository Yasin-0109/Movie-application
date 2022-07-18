import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Axios from "axios";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import noThumbnail from '../images/no-thumbnail.png'
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Genre = ({ props }) => {

    // useNavigate is used to go to new page and pass props to parameter

    const navigate = useNavigate();

    // useParams is used to get data from url parameter in this case genre

    const { genre } = useParams();

    const [genreList, setGenreList] = useState([])

    useEffect(() => {
        Axios.get(`https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&byTags=genre:${genre}`).then((response) => {
            setGenreList(response.data.entries)
        })
    }, [genre])

    return (
        <div>
            <Container fluid>
                <div className="headers">Total entries: {genreList.length}</div>
                <Row fluid>
                    {genreList.map((item, index) => {
                        return (
                            <Col key={index} md={4} sm={6} lg={3} fluid><Image fluid alt="action" src={item.plprogram$thumbnails["orig-235x418"] ? (item.plprogram$thumbnails["orig-235x418"].plprogram$url) : (noThumbnail)} />
                                <div onClick={
                                    () => { navigate(`/movie/${item.title}`) }}
                                    className="headers">{item.title}</div></Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    );
};

export default Genre;