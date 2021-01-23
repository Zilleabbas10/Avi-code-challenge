import { getFormattedDataForMap, getFilteredPractices } from "../homeHelpers";

const practices = [
    {
        "practiceId": 1,
        "id": 1,
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
        },
        "map": {
            "coords": [11.5775, 48.1719723],
            "zoom": 17,
        }
    },
    {
        "practiceId": 2,
        "id": 2,
        "name": "Test Practice München 2",
        "address": {
            "postCode": "80335",
            "street": "Arnulfstraße 52",
            "district": "Maxvorstadt",
            "city": "München",
            "state": "Bayern",
            "geolocation": {
                "lat": 48.1500998,
                "lon": 11.5636855,
                "zoom": 12
            }
        },
        "map": {
            "coords": [11.5636855, 48.1500998],
            "zoom": 12,
        }
    }
]

const selectedIds = [2]

test('Capitalize first character of the string or word', () => {
    const practiceEqualToBe = [
        {
            "practiceId": 2,
            "id": 2,
            "name": "Test Practice München 2",
            "address": {
                "postCode": "80335",
                "street": "Arnulfstraße 52",
                "district": "Maxvorstadt",
                "city": "München",
                "state": "Bayern",
                "geolocation": {
                    "lat": 48.1500998,
                    "lon": 11.5636855,
                    "zoom": 12
                }
            },
            "map": {
                "coords": [11.5636855, 48.1500998],
                "zoom": 12,
            }
        }]
    expect(getFilteredPractices({selectedPracticesIds: selectedIds, practices})).toEqual(practiceEqualToBe);
  });

describe('getFormattedDataForMap function use-cases', () => {
    test('if selectedPracticesIds array is not empty', () => {
        const practiceEqualToBe = [
            {
                "coords": [11.5636855, 48.1500998],
                "zoom": 12
            }
        ]
        expect(getFormattedDataForMap({selectedPracticesIds: selectedIds, practices})).toEqual(practiceEqualToBe);
      });
    test('if selectedPracticesIds array is empty', () => {
        const practicesEqualToBe = [
            {
                "coords": [11.5775, 48.1719723],
                "zoom": 17,
            },
            {
                "coords": [11.5636855, 48.1500998],
                "zoom": 12
            }
        ]
        expect(getFormattedDataForMap({selectedPracticesIds: [], practices})).toEqual(practicesEqualToBe);
    });
})
