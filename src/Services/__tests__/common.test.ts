import CommonHelpers from "../Common";

const responseToTest = {
    "data": [
      {
        "practiceId": 1,
        "name": "Test Practice München 1",
        "address": {
          "postCode": "80804",
          "street": "Kölner Pl. 1",
          "district": "Maxvorstadt",
          "city": "München",
          "state": "Bayern",
          "geolocation": {
            "lat": 48.1719723,
            "lon": 11.5775,
            "zoom": 17
          }
        }
      }
    ],
    "status": 200,
    "statusText": "OK",
  }
  
const emptyResponseToTest = {
    "data": [],
    "status": 200,
    "statusText": "OK",
  }

describe('getFormattedPractices function use-cases', () => {
    test('return formatted practices if response data is not empty', () => {
          const expectedResult = [{
            "name": "Test Practice München 1",
            "city": "München",
            "state": "Bayern",
            "postCode": "80804",
            "id": 1,
            "geolocation": {
                "lat": 48.1719723,
                "lon": 11.5775,
                "zoom": 17
              },
              "map": {
                  "coords": [11.5775, 48.1719723],
                  "zoom": 17,
              }
          }]
        expect(CommonHelpers.getFormattedPractices(responseToTest)).toEqual(expectedResult);
    });
    test('return formatted practices if response data is empty', () => {
        expect(CommonHelpers.getFormattedPractices(emptyResponseToTest)).toEqual([]);
    });
})
