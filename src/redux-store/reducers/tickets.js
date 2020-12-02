import Types from 'redux-store/types/tickets';

const initialState = {
  tickets: [],
  error: null,
  loading: true,
  pagination: null,
};

export default function tickets(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case Types.REQUEST_TICKETS_START:
      return {
        tickets: payload.tickets,
        pagination: payload.pagination,
        loading: payload.loading,
        error: payload.error,
      };

    case Types.REQUEST_TICKETS_DONE:
      return {
        tickets: payload.tickets,
        pagination: payload.pagination,
        loading: payload.loading,
        error: payload.error,
      };

    case Types.REQUEST_TICKETS_ERROR:
      return {
        tickets: payload.tickets,
        pagination: payload.pagination,
        loading: payload.loading,
        error: payload.error,
      };

    default:
      return state;
  }
}
