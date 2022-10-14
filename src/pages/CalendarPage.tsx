import React, {FC, useState} from 'react';
import {Button, Layout, Modal, Row} from "antd";
import CalendarComponent from "../components/CalendarComponent";
import {useActions, useAppSelector} from "../hooks/reduxHooks";
import EventsForm from "../components/EventsForm";
import {IEvent} from "../Models/IEvent";


const CalendarPage: FC = () => {
    const [isEventModalOpen, setIsEventModalOpen] = useState(false);
    const { guests, isLoading, events } = useAppSelector((state) => state.Events);
    const {setEvent } = useActions()

    async function submitModal(event: IEvent) {
        await setEvent(event);
        setIsEventModalOpen(false);
    }

    return (
        <Layout>
            <CalendarComponent setIsEventModalOpen={setIsEventModalOpen} events={events}/>
            <Row justify='center'>
                <Button type='default' onClick={() => setIsEventModalOpen(true)}>Добавить событие</Button>
                <Modal forceRender title='Добавить событие' open={isEventModalOpen} onCancel={() => setIsEventModalOpen(false)} footer={null}>
                    <EventsForm formState={isEventModalOpen} guests={guests} submit={submitModal} isLoading={isLoading.events}/>
                </Modal>
            </Row>
        </Layout>
    );
};

export default CalendarPage;