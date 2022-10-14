import React, {FC, useEffect, useState} from 'react';
import {Button, DatePicker, Form, Input, Select} from "antd";
import {IUser} from "../Models/IUser";
import {EStatus, IEvent} from "../Models/IEvent";
import {useAppSelector} from "../hooks/reduxHooks";
import moment, {Moment} from "moment";

interface FormProps {
    guests: IUser[],
    submit: (event: IEvent) => void,
    isLoading: boolean,
    formState: boolean
}

const EventsForm: FC<FormProps> = ({guests, submit, isLoading, formState}) => {
    const [form] = Form.useForm();
    const [event, setEvent] = useState<IEvent>({
        author: '',
        date: '',
        description: '',
        guest: '',
        status: EStatus.PROCESSING,
        id: '0'
    });
    const {user} = useAppSelector((state) => state.Auth);
    const {selectedDate} = useAppSelector((state) => state.Calendar);

    useEffect(() => {
        setEvent({...event, author: user.username })
    }, []);

    function selectDate(date: Moment | null) {
        setEvent({...event, date: String(date?.format('L'))})
    }

    function submitForm() {
        submit({...event, date: selectedDate.format('L')})
    }

    function disabledDate(date: Moment) {
        return date.format('L') < moment().format('L')
    }

    useEffect(() => {
        form.resetFields();
    }, [formState]);


    return (
        <Form
            form={form}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 12 }}
            initialValues={{ remember: true }}
            onFinish={submitForm}
            autoComplete="off"
        >
            <Form.Item
                label="Название"
                name="name"
                rules={[{ required: true, message: 'Введите название ивента!' }]}
            >
                <Input value={event.description} onChange={(e) => setEvent({...event, description: e.target.value})}/>
            </Form.Item>

            <Form.Item
                label="Дата"
                name="data"
                rules={[{ required: true, message: 'Выберете дату!' }]}
                initialValue={moment(selectedDate)}
            >
                <DatePicker disabledDate={disabledDate} onChange={selectDate}/>

            </Form.Item>

            <Form.Item
                label="Гость"
                name="guess"
                rules={[{ required: true, message: 'Выберете гостя!' }]}
            >
                <Select
                    onChange={(guest: string) => setEvent({...event, guest})}
                    showSearch
                    placeholder="Select a person"
                    optionFilterProp="children"
                >
                    {guests.map(el =>
                        <Select.Option key={el.username} value={el.username}>{el.username}</Select.Option>
                    )}
                </Select>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }} style={{marginTop: "auto"}}>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Создать
                </Button>
            </Form.Item>
        </Form>
    );
};

export default EventsForm;