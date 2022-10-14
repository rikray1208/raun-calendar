import React, {FC} from 'react';
import {Button, Divider, Modal, Space, Spin, Typography} from "antd";
import {CheckOutlined, CloseOutlined, DeleteOutlined} from '@ant-design/icons';
import {EStatus, IEvent} from "../Models/IEvent";
import {useActions, useAppSelector} from "../hooks/reduxHooks";


interface ModalProps {
    isModalOpen: boolean,
    setIsModalOpen: (param: boolean) => void,
    selectedEventID: string
}

const { Title, Text } = Typography;

const EventModal: FC<ModalProps> = ({isModalOpen, setIsModalOpen, selectedEventID}) => {
    const {changeStatusEvent, deleteEvent} = useActions();
    const event = useAppSelector((state) => state.Events.events.find(el => el.id === selectedEventID));
    const {isLoading} = useAppSelector((state) => state.Events);


    function onComplete(event: IEvent | undefined) {
        if(event) {
            changeStatusEvent({...event, status: EStatus.SUCCESS});
        }
    }

    function onCansel(event: IEvent | undefined) {
        if(event) {
            changeStatusEvent({...event, status: EStatus.CANSEL});
        }
    }

    async function onDelete(event: IEvent | undefined) {
        if(event) {
            await deleteEvent(event);
            setIsModalOpen(false)
        }
    }

    return (
        <>
            <Modal forceRender title={event?.date} open={isModalOpen} onCancel={() => !isLoading.events && setIsModalOpen(false)} footer={null}>
                <Title level={5}> Создатель: <Text keyboard>{event?.author}</Text></Title>
                <Title level={5}>Гость: <Text keyboard>{event?.guest}</Text></Title>
                <Title level={5}>Описание: <Text keyboard>{event?.description}</Text></Title>
                <Title level={5}>Состояние: <Text keyboard>{event?.status}</Text></Title>
                <Divider />
                <Space>
                    <Button onClick={() => onComplete(event)} type="primary" shape="circle" icon={<CheckOutlined />} />
                    <Button onClick={() => onCansel(event)} block type="default" shape="circle" icon={<CloseOutlined />} />
                    <Button onClick={() => onDelete(event)} danger type="primary" shape="circle" icon={<DeleteOutlined />} />
                    <Spin spinning={isLoading.events}/>
                </Space>
            </Modal>
        </>
    );
};

export default EventModal;