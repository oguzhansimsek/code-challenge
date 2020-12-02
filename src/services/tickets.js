import request from './request';

export const getTickets = (params) => {
  return request.get('/events', { params }).then((res) => res.data);
};

export default {};
