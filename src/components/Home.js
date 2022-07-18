import React, { useState, useEffect } from 'react';
import Axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Carousel from 'react-elastic-carousel'
import noThumbnail from '../images/no-thumbnail.png'
import { useMediaQuery } from 'react-responsive'
import { useNavigate  } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    // states

    const [action, setAction] = useState([])
    const [actionList, setActionList] = useState([])

    const [comedy, setComedy] = useState([])
    const [comedyList, setComedyList] = useState([])

    const [thriller, setThriller] = useState([])
    const [thrillerList, setThrillerList] = useState([])

    const [war, setWar] = useState([])
    const [warList, setWarList] = useState([])

    const [romance, setRomance] = useState([])
    const [romanceList, setRomanceList] = useState([])

    const [drama, setDrama] = useState([])
    const [dramaList, setDramaList] = useState([])


    const [crime, setCrime] = useState([])
    const [crimeList, setCrimeList] = useState([])

    const [documentary, setDocumentary] = useState([])
    const [documentaryList, setDocumentaryList] = useState([])

    const [horror, setHorror] = useState([])
    const [horrorList, setHorrorList] = useState([])

    // endpoints 

    const actionOne = Axios.get("https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&byTags=genre:action")
    const actionTwo = Axios.get("https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&range=1-4&byTags=genre:action")

    const comedyOne = Axios.get("https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&byTags=genre:comedy")
    const comedyTwo = Axios.get("https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&range=1-4&byTags=genre:comedy")


    const thrillerOne = Axios.get("https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&byTags=genre:thriller")
    const thrillerTwo = Axios.get("https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&range=1-4&byTags=genre:thriller")

    const warOne = Axios.get("https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&byTags=genre:war")
    const warTwo = Axios.get("https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&range=1-4&byTags=genre:war")

    const romanceOne = Axios.get("https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&byTags=genre:romance")
    const romanceTwo = Axios.get("https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&range=1-4&byTags=genre:romance")

    const dramaOne = Axios.get("https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&byTags=genre:drama")
    const dramaTwo = Axios.get("https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&range=1-4&byTags=genre:drama")

    const crimeOne = Axios.get("https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&byTags=genre:crime")
    const crimeTwo = Axios.get("https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&range=1-4&byTags=genre:crime")

    const documentaryOne = Axios.get("https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&byTags=genre:documentary")
    const documentaryTwo = Axios.get("https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&range=1-4&byTags=genre:documentary")

    const horrorOne = Axios.get("https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&byTags=genre:horror")
    const horrorTwo = Axios.get("https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&range=1-4&byTags=genre:horror")

    // media queries

    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
    const isTabletOrMobile = useMediaQuery({ minWidth:768, maxWidth: 1224 })

    // fetching data from api/middelware

    useEffect(() => {
        Axios.all([actionOne, actionTwo,comedyOne,comedyTwo, thrillerOne, thrillerTwo,warOne,warTwo, romanceOne,romanceTwo, dramaOne, dramaTwo,crimeOne,crimeTwo,
            documentaryOne, documentaryTwo, horrorOne, horrorTwo]).then(Axios.spread((...responses) => {
            setAction(responses[0].data.entries)
            setActionList(responses[1].data.entries)

            setComedy(responses[2].data.entries)
            setComedyList(responses[3].data.entries)

            setThriller(responses[4].data.entries)
            setThrillerList(responses[5].data.entries)

            setWar(responses[6].data.entries)
            setWarList(responses[7].data.entries)

            setRomance(responses[8].data.entries)
            setRomanceList(responses[9].data.entries)

            setDrama(responses[10].data.entries)
            setDramaList(responses[11].data.entries)

            setCrime(responses[12].data.entries)
            setCrimeList(responses[13].data.entries)

            setDocumentary(responses[14].data.entries)
            setDocumentaryList(responses[15].data.entries)

            setHorror(responses[16].data.entries)
            setHorrorList(responses[17].data.entries)
        })).catch(errors => {
            console.log(errors);
        })
    }, [])

    const loadMoreAction = () => {
        Axios.get(`https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&range=1-10&byTags=genre:action`).then((response) => {
            setActionList(response.data.entries)
        })
    }

    const loadMoreComedy = () => {
        Axios.get(`https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&range=1-10&byTags=genre:comedy`).then((response) => {
            setComedyList(response.data.entries)
        })
    }

    const loadMoreThriller = () => {
        Axios.get(`https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&range=1-10&byTags=genre:thriller`).then((response) => {
            setThrillerList(response.data.entries)
        })
    }

    const loadMoreWar = () => {
        Axios.get(`https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&range=1-10&byTags=genre:war`).then((response) => {
            setWarList(response.data.entries)
        })
    }

    const loadMoreRomance = () => {
        Axios.get(`https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&range=1-10&byTags=genre:romance`).then((response) => {
            setRomanceList(response.data.entries)
        })
    }

    const loadMoreDrama = () => {
        Axios.get(`https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&range=1-10&byTags=genre:drama`).then((response) => {
            setDramaList(response.data.entries)
        })
    }

    const loadMoreCrime = () => {
        Axios.get(`https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&range=1-10&byTags=genre:crime`).then((response) => {
            setCrimeList(response.data.entries)
        })
    }

    const loadMoreDocumentary = () => {
        Axios.get(`https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&range=1-10&byTags=genre:documentary`).then((response) => {
            setDocumentaryList(response.data.entries)
        })
    }

    const loadMoreHorror = () => {
        Axios.get(`https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&range=1-10&byTags=genre:horror`).then((response) => {
            setHorrorList(response.data.entries)
        })
    }

    // bootstrap grid and carousel with movies, here the map function is used 

    return (
        <div>
            <Container fluid>
                <div className="headers" onClick={()=>{navigate(`/genre/${'action'}`)}}> Action, total {action.length} </div> <Button onClick={loadMoreAction} variant="link" style={{color:"white", textDecoration:"none", verticalAlign: "baseline"}}>Load more ></Button>
                <Row md={4} sm={2} xs={1}>
                    {actionList && actionList.length > 0 ? (<>
                        <Carousel itemsToShow={isDesktopOrLaptop ? (5): isTabletOrMobile ?(2.5):(1)}>
                            {actionList.map((item, index) => {
                                return (
                                    <Col key={index}>
                                    <Image fluid alt="action" src={item.plprogram$thumbnails["orig-235x418"] ? (item.plprogram$thumbnails["orig-235x418"].plprogram$url):(noThumbnail)} />
                                    <div onClick={
                                        ()=>{navigate(`/movie/${item.title}`)}} 
                                        className="headers">{item.title}</div>
                                    </Col>
                                )
                            })}
                        </Carousel>
                    </>) : (<>Loading...</>)}
                </Row>
                <div className="headers" onClick={()=>{navigate(`/genre/${'comedy'}`)}}>Comedy, total {comedy.length}</div><Button onClick={loadMoreComedy} variant="link" style={{color:"white", textDecoration:"none", verticalAlign: "baseline"}}>Load more ></Button>
                <Row md={4} sm={2} xs={1}>
                    {comedyList && comedyList.length > 0 ? (<>
                        <Carousel itemsToShow={isDesktopOrLaptop ? (5): isTabletOrMobile ?(2.5):(1)}>
                            {comedyList.map((item, index) => {
                                return (
                                    <Col key={index}>
                                    <Image fluid alt="action" src={item.plprogram$thumbnails["orig-235x418"] ? (item.plprogram$thumbnails["orig-235x418"].plprogram$url):(noThumbnail)} />
                                    <div onClick={
                                        ()=>{navigate(`/movie/${item.title}`)}} 
                                        className="headers">{item.title}</div>
                                    </Col>
                                )
                            })}
                        </Carousel>
                    </>) : (<>Loading...</>)}
                </Row>
                <div className="headers" onClick={()=>{navigate(`/genre/${'thriller'}`)}}>Thriller, total {thriller.length}</div><Button onClick={loadMoreThriller} variant="link" style={{color:"white", textDecoration:"none", verticalAlign: "baseline"}}>Load more ></Button>
                <Row md={4} sm={2} xs={1}>
                    {thrillerList && thrillerList.length > 0 ? (<>
                        <Carousel itemsToShow={isDesktopOrLaptop ? (5): isTabletOrMobile ?(2.5):(1)}>
                            {thrillerList.map((item, index) => {
                                return (
                                    <Col key={index}>
                                    <Image fluid alt="action" src={item.plprogram$thumbnails["orig-235x418"] ? (item.plprogram$thumbnails["orig-235x418"].plprogram$url):(noThumbnail)} />
                                    <div onClick={
                                        ()=>{navigate(`/movie/${item.title}`)}} 
                                        className="headers">{item.title}</div>
                                    </Col>
                                )
                            })}
                        </Carousel>
                    </>) : (<>Loading...</>)}
                </Row>
                <div className="headers" onClick={()=>{navigate(`/genre/${'war'}`)}}>War, total {war.length} </div><Button onClick={loadMoreWar} variant="link" style={{color:"white", textDecoration:"none", verticalAlign: "baseline"}}>Load more ></Button>
                <Row md={4} sm={2} xs={1}>
                    {warList && warList.length > 0 ? (<>
                        <Carousel itemsToShow={isDesktopOrLaptop ? (5): isTabletOrMobile ?(2.5):(1)}>
                            {warList.map((item, index) => {
                                return (                        
                                    <Col key={index}>
                                    <Image fluid alt="action" src={item.plprogram$thumbnails["orig-235x418"] ? (item.plprogram$thumbnails["orig-235x418"].plprogram$url):(noThumbnail)} />
                                    <div onClick={
                                        ()=>{navigate(`/movie/${item.title}`)}} 
                                        className="headers">{item.title}</div>
                                    </Col>
                                )
                            })}
                        </Carousel>
                    </>) : (<>Loading...</>)}
                </Row>
                <div className="headers" onClick={()=>{navigate(`/genre/${'romance'}`)}}>Romance, total {romance.length} </div><Button onClick={loadMoreRomance} variant="link" style={{color:"white", textDecoration:"none", verticalAlign: "baseline"}}>Load more ></Button>
                <Row md={4} sm={2} xs={1}>
                    {romanceList && romanceList.length > 0 ? (<>
                        <Carousel itemsToShow={isDesktopOrLaptop ? (5): isTabletOrMobile ?(2.5):(1)}>
                            {romanceList.map((item, index) => {
                                return (
                                    <Col key={index}>
                                    <Image fluid alt="action" src={item.plprogram$thumbnails["orig-235x418"] ? (item.plprogram$thumbnails["orig-235x418"].plprogram$url):(noThumbnail)} />
                                    <div onClick={
                                        ()=>{navigate(`/movie/${item.title}`)}} 
                                        className="headers">{item.title}</div>
                                    </Col>
                                )
                            })}
                        </Carousel>
                    </>) : (<>Loading...</>)}
                </Row>
                <div className="headers" onClick={()=>{navigate(`/genre/${'drama'}`)}}>Drama, total {drama.length} </div><Button onClick={loadMoreDrama} variant="link" style={{color:"white", textDecoration:"none", verticalAlign: "baseline"}}>Load more ></Button>
                <Row md={4} sm={2} xs={1}>
                    {dramaList && dramaList.length > 0 ? (<>
                        <Carousel itemsToShow={isDesktopOrLaptop ? (5): isTabletOrMobile ?(2.5):(1)}>
                            {dramaList.map((item, index) => {
                                return (
                                    <Col key={index}>
                                    <Image fluid alt="action" src={item.plprogram$thumbnails["orig-235x418"] ? (item.plprogram$thumbnails["orig-235x418"].plprogram$url):(noThumbnail)} />
                                    <div onClick={
                                        ()=>{navigate(`/movie/${item.title}`)}} 
                                        className="headers">{item.title}</div>
                                    </Col>
                                )
                            })}
                        </Carousel>
                    </>) : (<>Loading...</>)}
                </Row>
                <div className="headers" onClick={()=>{navigate(`/genre/${'crime'}`)}}>Crime, total {crime.length} </div><Button onClick={loadMoreCrime} variant="link" style={{color:"white", textDecoration:"none", verticalAlign: "baseline"}}>Load more ></Button>
                <Row md={4} sm={2} xs={1}>
                    {crimeList && crimeList.length > 0 ? (<>
                        <Carousel itemsToShow={isDesktopOrLaptop ? (5): isTabletOrMobile ?(2.5):(1)}>
                            {crimeList.map((item, index) => {
                                return (
                                    <Col key={index}>
                                    <Image fluid alt="action" src={item.plprogram$thumbnails["orig-235x418"] ? (item.plprogram$thumbnails["orig-235x418"].plprogram$url):(noThumbnail)} />
                                    <div onClick={
                                        ()=>{navigate(`/movie/${item.title}`)}} 
                                        className="headers">{item.title}</div>
                                    </Col>
                                )
                            })}
                        </Carousel>
                    </>) : (<>Loading...</>)}
                </Row>
                <div className="headers" onClick={()=>{navigate(`/genre/${'documentary'}`)}}>Documentary, total {documentary.length} </div><Button onClick={loadMoreDocumentary} variant="link" style={{color:"white", textDecoration:"none", verticalAlign: "baseline"}}>Load more ></Button>
                <Row md={4} sm={2} xs={1}>
                    {documentaryList && documentaryList.length > 0 ? (<>
                        <Carousel itemsToShow={isDesktopOrLaptop ? (5): isTabletOrMobile ?(2.5):(1)}>
                            {documentaryList.map((item, index) => {
                                return (
                                    <Col key={index}>
                                    <Image fluid alt="action" src={item.plprogram$thumbnails["orig-235x418"] ? (item.plprogram$thumbnails["orig-235x418"].plprogram$url):(noThumbnail)} />
                                    <div onClick={
                                        ()=>{navigate(`/movie/${item.title}`)}} 
                                        className="headers">{item.title}</div>
                                    </Col>
                                )
                            })}
                        </Carousel>
                    </>) : (<>Loading...</>)}
                </Row>
                <div className="headers" onClick={()=>{navigate(`/genre/${'horror'}`)}}>Horror, total {horror.length} </div><Button onClick={loadMoreHorror} variant="link" style={{color:"white", textDecoration:"none", verticalAlign: "baseline"}}>Load more ></Button>
                <Row md={4} sm={2} xs={1}>
                    {horrorList && horrorList.length > 0 ? (<>
                        <Carousel itemsToShow={isDesktopOrLaptop ? (5): isTabletOrMobile ?(2.5):(1)}>
                            {horrorList.map((item, index) => {
                                return (
                                    <Col key={index}>
                                    <Image fluid alt="action" src={item.plprogram$thumbnails["orig-235x418"] ? (item.plprogram$thumbnails["orig-235x418"].plprogram$url):(noThumbnail)} />
                                    <div onClick={
                                        ()=>{navigate(`/movie/${item.title}`)}} 
                                        className="headers">{item.title}</div>
                                    </Col>
                                )
                            })}
                        </Carousel>
                    </>) : (<>Loading...</>)}
                </Row>
            </Container>
        </div>
    );
};

export default Home;