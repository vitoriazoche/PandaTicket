import axios from 'axios';

const BASE_URL = 'http://localhost:3001/tickets';

const api = {
  getTickets: () => axios.get(BASE_URL),
  newTicket: ticket => axios.post(BASE_URL, ticket),
  editTicket: status => axios.patch(BASE_URL, { status }),
};

export default api;
