import React, {useRef} from 'react'
import "./style.scss"

import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";
import CircleRating from '../circleRating/CircleRating';
import Genres from "../genres/Genres";


const Carousel = ({data,loading,endpoint}) => {
    const carouseContainer = useRef();
    const {url} = useSelector((state)=> state.home)
    const navigate = useNavigate()
    
    const navigation =(dir) => {
        const container = carouseContainer.current

        const scrollAmount = dir === "left" ? container.scrollLeft - (container.offsetWidth + 20) : container.scrollLeft + (container.offsetWidth + 20)
        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth"
        })
    }

    const skItem = () =>{
        return (
            <div className="skeletonItem">
                <div className="posterBlock skeleton">
                </div>
                <div className="textBlock">
                    <div className="title skeleton"></div>
                    <div className="date skeleton"></div>
                </div>
            </div>
        )
    }

    return (
    <div className='carousel'>
        <ContentWrapper>
           <BsFillArrowLeftCircleFill 
                className="carouseLeftNav arrow" 
                onClick={()=>navigation("left")}>
           </BsFillArrowLeftCircleFill> 
           <BsFillArrowRightCircleFill 
                className="carouseRightNav arrow" 
                onClick={()=>navigation("right")}>  
           </BsFillArrowRightCircleFill>
           {!loading ? (
                <div className="carouselItems" ref={carouseContainer}>
                    {data?.map((item) => {
                        const posterUrl = item.poster_path ? url.poster + item.poster_path : PosterFallback
                        return (
                            <div 
                                className="carouselItem"
                                onClick={()=>navigate(`/${item.media_type}/${item.id}`)} 
                                key={item.id}>
                                    <div className="posterBlock">
                                        <Img src={posterUrl}></Img>
                                        <CircleRating rating={item.vote_average.toFixed(1)} />
                                        <Genres data={item.genre_ids.slice(0,2)} />
                                    </div>
                                    <div className="textBlock">
                                        <span className="title">
                                            {item.title || item.name}
                                        </span>
                                        <span className="date">
                                            {dayjs(item.release_date).format("MMM D,YYYY")}
                                        </span>
                                    </div>
                            </div>
                        )
                    })}
                </div>
           ) : (
                <div className="loadingSkeleton">
                    {skItem()}
                    {skItem()}
                    {skItem()}
                    {skItem()}
                    {skItem()}
                </div>
           )}
        </ContentWrapper>
    </div>
  )
}

export default Carousel