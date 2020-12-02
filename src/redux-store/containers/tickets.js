import { getAllTickets } from 'redux-store/actions/tickets';

const mapStateToProps = (state) => ({
  tickets: state.tickets.tickets,
  error: state.tickets.error,
  loading: state.tickets.loading,
  pagination: state.tickets.pagination,
});

const mapDispatchToProps = {
  getAllTickets,
};

export default [mapStateToProps, mapDispatchToProps];
