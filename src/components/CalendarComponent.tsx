import React, {FC, useState} from 'react';
import {Badge, BadgeProps, Calendar, Space, Typography} from "antd";
import {Moment} from "moment";
import {EStatus, IEvent} from "../Models/IEvent";
import EventModal from "./EventModal";
import {useActions} from "../hooks/reduxHooks";
import {BaseType} from "antd/es/typography/Base";

const { Text } = Typography;

interface CalendarProps {
    events: IEvent[],
    setIsEventModalOpen: (param: boolean) => void
}

const CalendarComponent: FC<CalendarProps> = ({ events, setIsEventModalOpen}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEventID, setSelectedEventID] = useState<string>('1');
    const { setDate } = useActions();

    function openEvent(id: string, e?: React.MouseEvent<HTMLDivElement>) {
        if(e)  {
            e.stopPropagation()
        }
        setIsModalOpen(true);
        setSelectedEventID(id)
    }

    const dateCellRender = (value: Moment) => {
        const formatedDate = value.format('L');
        const eventsList = events.filter(el => el.date === formatedDate);
        return (
            <ul>
                {eventsList.map(item => (
                    <li key={item.id} style={{listStyleType: "none", display: "flex"}}>
                        <Space>
                            <Badge
                                status={item.status as BadgeProps['status']}
                            />
                            {EStatus.SUCCESS === item.status ?
                                <Text
                                    type='success'
                                    onClick={(e) => openEvent(item.id, e)}>
                                    {item.description}
                                </Text>

                                :
                                <Text
                                    type={ EStatus.CANSEL === item.status ? 'danger' as BaseType : '' as BaseType}
                                    delete={item.status === EStatus.CANSEL}
                                    onClick={(e) => openEvent(item.id, e)}>
                                    {item.description}
                                </Text>
                            }
                        </Space>
                    </li>
                ))}
            </ul>
        );
    };

    function onSelect(date: Moment) {
        setIsEventModalOpen(true)
        setDate(date)
    }

    return (
        <>
            <EventModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} selectedEventID={selectedEventID}/>
            <Calendar onSelect={onSelect} dateCellRender={dateCellRender}/>
        </>
    );
};

export default CalendarComponent;