import {pathOr, map, propOr} from 'ramda';

/**
 * Parses Practices object to its own format and return a new object
 *
 * @param {*} news
 * @returns
 */
const formatPractices = (practice) => {
  const lat = pathOr({}, ['address', 'geolocation', 'lat'], practice)
  const lon = pathOr({}, ['address', 'geolocation', 'lon'], practice)
  const zoom = pathOr({}, ['address', 'geolocation', 'zoom'], practice)
  return {
    name: propOr('', 'name', practice),
    city: pathOr('', ['address', 'city'], practice),
    state: pathOr('', ['address', 'state'], practice),
    postCode: pathOr('', ['address', 'postCode'], practice),
    id: propOr('', 'practiceId', practice),
    geolocation: pathOr({}, ['address', 'geolocation'], practice),
    map: {
      coords: [lon, lat],
      zoom
    }

  };
};

/**
 * Parses response from the endpoint.GET_PRACTICES and returns formatted practices
 *
 * @param {*} response
 * @returns
 */
const getFormattedPractices = (response) => {
  const practicesList = pathOr([], ['data'], response);
  return map((practices) => {
    return formatPractices(practices);
  }, practicesList);
};

export default {
  getFormattedPractices,
};
