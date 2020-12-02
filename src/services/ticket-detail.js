import { useParams } from 'react-router-dom';

import request from './request';

/**
 * Ticket Detay Sayfası Class'ı
 */
class TicketDetail {
  constructor() {
    this.id = null;
    this.getTicketId();
  }

  getTicketId() {
    // URL içinden id parametresi
    const { id } = useParams();
    this.id = id;
  }

  getTicketDataById() {
    // Detay datasının çekilmesi
    return request.get(`/events/${this.id}`).then((res) => res.data);
  }
}

export default TicketDetail;
