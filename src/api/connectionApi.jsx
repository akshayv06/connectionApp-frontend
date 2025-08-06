// src/api/connectionApi.js
import axios from 'axios';

const BASE_URL =`${process.env.REACT_APP_API_URL}/connection`;


export const sendFriendRequest = async (senderEmail, receiverEmail) => {
  return axios.post(`${BASE_URL}/send`, {
    senderEmail,
    receiverEmail,
  });
};

export const getPendingRequests = async (receiverEmail) => {
  const res = await axios.get(`${BASE_URL}/pending`, {
    params: { receiverEmail },
  });
  return res.data;
};

export const acceptRequest = async (senderEmail, receiverEmail) => {
  const res = await axios.post(
    `${BASE_URL}/accept?senderEmail=${senderEmail}&receiverEmail=${receiverEmail}`
  );
  return res.data;
};

export const fetchOtherUsers = async (email) => {
  const res = await axios.get(`${BASE_URL}/users`, {
    params: { email },
  });
  return res.data;
};

export const updateUserProfile = async (userData) => {
  return axios.put(`${BASE_URL}/user/update`, userData);
};
