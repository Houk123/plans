"use client"

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import { Button, Card } from "@chakra-ui/react";

const SliderDailyTask: React.FC = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={1}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {
                arr.map(el => (
                    <SwiperSlide>
                        <Card.Root width="320px" key={el}>
                            <Card.Body gap="2">
                                <Card.Title mb="2">Nue Camp</Card.Title>
                                <Card.Description>
                                    This is the card body. Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </Card.Description>
                            </Card.Body>
                            <Card.Footer justifyContent="flex-end">
                                <Button variant="outline">View</Button>
                                <Button>Join</Button>
                            </Card.Footer>
                        </Card.Root>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}

const arr = [1, 2, 3, 4]

export default SliderDailyTask;