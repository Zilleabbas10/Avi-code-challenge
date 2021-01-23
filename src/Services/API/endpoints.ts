import moment from 'moment';

const UNIQUE_PURCHASE_MS = moment().subtract(30, 'days').valueOf();

export default {
  GET_PRACTICES: `/practices`,
};
