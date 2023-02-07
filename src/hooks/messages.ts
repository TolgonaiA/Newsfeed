import React, {ChangeEvent, useEffect, useState} from "react";
import {IMessage, INewMessage} from "../models";
import axiosApi from "../axiosApi";
import {AxiosError} from "axios";

export const useMessages = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [value, setValue] = useState<INewMessage>({
    message: "",
  });
  const [lastMessageDate, setLastMessageDate] = useState<string>('');

  const [error, setError] = useState('');

  const fetchMessages = async () => {
    try {
      const response = await axiosApi.get<IMessage[]>('/posts');
      setMessages(response.data.sort((a:IMessage, b:IMessage) => a.datetime > b.datetime ? -1 : a.datetime < b.datetime ? 1 : 1));
      setLastMessageDate(response.data[0].datetime);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setError(error.message);
    }
  };

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setError('');
      if (value.message.trim().length === 0) {
        setError('Please enter something');
        return;
      }
      const body = new URLSearchParams();
      body.append('message', value.message);
      await axiosApi.post<IMessage>('/posts', body);
      setValue(prev => ({...prev, message: ''}));
    } catch (e: unknown) {
      const error = e as AxiosError;
      setError(error.message);
    }
  };

  const changeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value
    });
  }
  useEffect(() => {
    fetchMessages();
  }, []);



  useEffect(() => {
    const interval = setInterval (async() => {
      try {
        const response = await axiosApi.get<IMessage[]>(`/posts?datetime=${lastMessageDate}`);
        const newArr = response.data.sort((a:IMessage, b:IMessage) => a.datetime > b.datetime ? -1 : a.datetime < b.datetime ? 1 : 1);
        if (newArr.length > 0){
          setMessages(prev => [...newArr,...prev]);
          setLastMessageDate(newArr[0].datetime);
        }
      } catch (e: unknown) {
        const error = e as AxiosError;
        setError(error.message);
      }
    }, 3000);

    return () => clearTimeout(interval)
  }, [lastMessageDate]);

  return {messages, submitHandler, value, changeHandler, error, fetchMessages}
}

