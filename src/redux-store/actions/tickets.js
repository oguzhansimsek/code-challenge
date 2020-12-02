import Types from 'redux-store/types/tickets';

import { getTickets } from 'services/tickets';

export const getAllTickets = (params) => async (dispatch) => {
  /* LOADING */
  dispatch({
    type: Types.REQUEST_TICKETS_START,
    payload: { tickets: [], error: {}, loading: true, pagination: null },
  });

  try {
    /* SUCCESS */
    const response = await getTickets(params);
    const { page, _embedded = { events: [] } } = response;

    dispatch({
      type: Types.REQUEST_TICKETS_DONE,
      payload: { tickets: _embedded.events, error: {}, loading: false, pagination: page },
    });
  } catch (error) {
    /* ERROR */
    dispatch({
      type: Types.REQUEST_TICKETS_ERROR,
      payload: { tickets: [], error, loading: true, pagination: null },
    });
  }
};

export default {};
