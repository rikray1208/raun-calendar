import React, {FC, useEffect, useRef, useState} from 'react';
import {Badge, BadgeProps, Calendar} from "antd";
import {Moment} from "moment";
import {IEvent} from "../Models/IEvent";
import EventModal from "./EventModal";
import {useAppSelector} from "../hooks/reduxHooks";


interface CalendarProps {
    events: IEvent[];
}

const CalendarComponent: FC<CalendarProps> = ({ events}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const eventRef = useRef<IEvent | null>(null);

    function openEvent(event: IEvent) {
        setIsModalOpen(true);
        eventRef.current = event;
    }

    const dateCellRender = (value: Moment) => {
        const formatedDate = value.format('L');
        const eventsList = events.filter(el => el.date === formatedDate);
        return (
            <ul>
                {eventsList.map(item => (
                    <li key={item.id} style={{listStyleType: "none", display: "flex"}}>
                        <Badge
                            status={item.status as BadgeProps['status']}
                        />
                        <p style={{marginLeft: 5}} onClick={() => openEvent(item)}>{item.description}</p>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <>
            <EventModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} event={eventRef.current}/>
            <Calendar dateCellRender={dateCellRender}/>
        </>
    );
};

export default CalendarComponent;