import React from 'react';
import moment from 'moment';

import { Col, Card, Button, Badge } from 'react-bootstrap';
import styles from './styles.module.css';

const TicketCard = ({ onClick, image, name, date, location, badges = [] }) => {
  return (
    <Col xs={3} className={styles.cardWrapper}>
      <Card className={styles.card}>
        <Card.Img variant="top" src={image} />
        <Card.Body className={styles.cardBody}>
          <Card.Title className={styles.cardTitle}>{name}</Card.Title>
          <Card.Subtitle className={styles.cardSubTitle}>{moment(date).format('LL')}</Card.Subtitle>
          <Card.Text className={styles.cardSubTitle}>{location}</Card.Text>
          {badges.map((badge) => {
            return (
              <Badge
                className={styles.badge}
                variant="secondary"
                onClick={() => {
                  window.location.href = badge.href;
                }}
              >
                <span className={styles.badgeText}>{badge.name}</span>
              </Badge>
            );
          })}
        </Card.Body>
        <Button variant="dark" block onClick={onClick}>
          Show Detail
        </Button>
      </Card>
    </Col>
  );
};

export default TicketCard;
