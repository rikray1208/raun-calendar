import React, {FC, useEffect, useState} from 'react';
import {Button, Layout, Modal, Row} from "antd";
import CalendarComponent from "../components/CalendarComponent";
import {useActions, useAppSelector} from "../hooks/reduxHooks";
import EventsForm from "../components/EventsForm";
import {IEvent} from "../Models/IEvent";
import EventModal from "../components/EventModal";



const CalendarPage: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { fetchUsers } = useActions();
    const { guests, isLoading, events } = useAppSelector((state) => state.Events);
    const { user } = useAppSelector((state) => state.Auth);
    const {setEvent, getEvents} = useActions()

    useEffect(() => {
        fetchUsers();
        getEvents(user.username);
    }, []);

    async function submitModal(event: IEvent) {
        await setEvent(event);
        setIsModalOpen(false);
    }

    return (
        <Layout >
            <CalendarComponent events={events}/>
            <Row justify='center'>
                <Button type='default' onClick={() => setIsModalOpen(true)}>Добавить событие</Button>
                <Modal title='Добавить событие' open={isModalOpen} onCancel={() => setIsModalOpen(false)} footer={null}>
                    <EventsForm guests={guests} submit={submitModal} isLoading={isLoading.events}/>
                </Modal>
            </Row>
        </Layout>
    );
};

export default CalendarPage;