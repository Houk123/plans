"use client"

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Card, List } from "@chakra-ui/react";

import "./style.scss";

const SliderDailyTask: React.FC = () => {
  const workingHours = generateTimeSlots(9, 18); // С 9:00 до 18:00

  return (
        <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}> 
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination
                spaceBetween={20}
                slidesPerView={1}
                style={{ width: '100%'}} 
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {weekDays.map(el => (
                    <SwiperSlide key={el.id} style={{ height: '100%' }}>
                        <Card.Root height="90%" marginInline="4rem">
                            <Card.Header>{el.name} {el.date.toLocaleDateString()}</Card.Header>
                            <Card.Body gap="2">
                                <List.Root>
                                  {workingHours.map((hour, index) => (
                                    <List.Item key={index}>{hour}</List.Item>
                                  ))}
                                </List.Root>
                            </Card.Body>
                        </Card.Root>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

const generateTimeSlots = (startHour: number, endHour: number) => {
  const slots = [];
  for (let hour = startHour; hour <= endHour; hour++) {
    slots.push(`${hour.toString().padStart(2, '0')}:00`);
  }
  return slots;
};

const weekDays = [
    {
      id: 1,
      name: 'Понедельник',
      date: new Date('2023-12-04T00:00:00'),
      className: 'monday'
    },
    {
      id: 2,
      name: 'Вторник',
      date: new Date('2023-12-05T00:00:00'),
      className: 'tuesday'
    },
    {
      id: 3,
      name: 'Среда',
      date: new Date('2023-12-06T00:00:00'), 
      className: 'wednesday'
    },
    {
      id: 4,
      name: 'Четверг',
      date: new Date('2023-12-07T00:00:00'),
      className: 'thursday'
    },
    {
      id: 5, 
      name: 'Пятница',
      date: new Date('2023-12-08T00:00:00'),
      className: 'friday'
    },
    {
      id: 6,
      name: 'Суббота',
      date: new Date('2023-12-09T00:00:00'),
      className: 'saturday weekend'
    },
    {
      id: 7,
      name: 'Воскресенье',
      date: new Date('2023-12-10T00:00:00'),
      className: 'sunday weekend'
    }
  ];

export default SliderDailyTask;