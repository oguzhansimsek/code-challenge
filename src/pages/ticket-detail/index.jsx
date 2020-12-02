import React, { useState } from 'react';

import TicketDetail from 'services/ticket-detail';

const Detail = () => {
  const [states, setStates] = useState({
    loading: true,
    data: {},
    error: null,
  });

  const ticketDetail = new TicketDetail();

  const getTicket = async () => {
    try {
      const response = await ticketDetail.getTicketDataById();
      setStates({
        ...states,
        data: response,
        loading: false,
        error: null,
      });
    } catch (error) {
      setStates({
        ...states,
        data: {},
        loading: false,
        error,
      });
    }
  };

  React.useEffect(() => {
    getTicket();
  }, []);

  return <div>{JSON.stringify(states.data)}</div>;
};

export default Detail;
