/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { useLocation, useParams, useHistory } from 'react-router-dom';

import containerReduxState from 'redux-store/containers/tickets';

import { Loading, TicketCard, Pagination } from 'components';

import { getPageNumber, getUrlParams } from 'helpers';
import { Container, Row } from 'react-bootstrap';

const TicketList = ({ loading, getAllTickets, tickets, pagination }) => {
  const [state, setState] = useState({
    tickets,
  });
  const history = useHistory();

  const page = getPageNumber(useParams().page);
  const query = new URLSearchParams(useLocation().search);
  const urlParams = getUrlParams(query);

  /* ComponentDidMount */
  useEffect(() => {
    getAllTickets({
      ...urlParams,
      page: page - 1,
    });
  }, []);

  /* WillReciveProps for Ticket */
  useEffect(() => {
    setState({ ...state, tickets });
  }, [tickets]);

  const renderTicketCard = (ticket) => {
    const image = ticket.images[0].url;
    const { name } = ticket;
    const date = moment(ticket.dates.start.dateTime).format('LL');
    const location = `${ticket._embedded.venues[0].name}, ${ticket._embedded.venues[0].city.name}`;

    const classifications = ticket.classifications[0];

    const badges = Object.keys(ticket.classifications[0])
      .filter((key) => {
        return classifications[key].name !== 'Undefined' && typeof classifications[key] === 'object';
      })
      .map((key) => {
        return {
          href: `/tickets?${key}Id=${classifications[key].id}`,
          name: classifications[key].name,
        };
      });

    /** LOADING VIEW */
    if (loading) {
      return <Loading />;
    }

    /** EMPTY VIEW */
    if (!loading && tickets.length === 0) {
      return (
        <div>
          <Container fluid="md">
            <Row>
              <h1>All Tickets</h1>
            </Row>
            <Row>
              <div>
                <span>Tickets not found!</span>
              </div>
            </Row>
          </Container>
        </div>
      );
    }

    return (
      <TicketCard
        onClick={() => {
          history.push(`/ticket-detail/${ticket.id}`);
        }}
        image={image}
        name={name}
        date={date}
        location={location}
        badges={badges}
      />
    );
  };

  return (
    <Container fluid="md">
      <Row>
        <h1>All Tickets</h1>
      </Row>
      <Row>{state.tickets.map(renderTicketCard)}</Row>
      <Pagination {...pagination} />
    </Container>
  );
};

export default connect(...containerReduxState)(TicketList);
