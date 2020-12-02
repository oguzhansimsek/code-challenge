import React from 'react';
import { Pagination } from 'react-bootstrap';

const CPagination = ({ number, totalPages }) => {
  const { search } = window.location;
  const page = number ? number + 1 : 1;

  const firstPaginationNumber = 1;
  const lastPaginationNumber = totalPages > 50 ? 50 : totalPages;

  let pageItems = [];

  switch (page) {
    case firstPaginationNumber:
      pageItems = [firstPaginationNumber, firstPaginationNumber + 1, firstPaginationNumber + 2];
      break;
    case lastPaginationNumber:
      pageItems = [lastPaginationNumber - 2, lastPaginationNumber - 1, lastPaginationNumber];
      break;
    default:
      pageItems = [page - 1, page, page + 1];
      break;
  }
  return (
    <Pagination>
      <Pagination.First disabled={page === firstPaginationNumber} href={`/tickets${search}`} />
      {pageItems.map((item) => {
        const href = item === firstPaginationNumber ? `/tickets${search}` : `/tickets/${item}${search}`;
        return (
          <Pagination.Item key={item} active={item === page} href={href}>
            {item}
          </Pagination.Item>
        );
      })}
      <Pagination.Last disabled={page === lastPaginationNumber} href={`/tickets/${lastPaginationNumber}${search}`} />
    </Pagination>
  );
};

export default CPagination;
