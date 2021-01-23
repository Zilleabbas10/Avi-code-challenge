import { getFormattedDataForMap } from "../homeHelpers";

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
    },
    {
        "practiceId": 3,
        "id": 3,
        "name": "Test Practice Berlin",
        "address": {
            "postCode": "81927",
            "street": "Freischützstraße 13",
            "district": "Borgenhausen",
            "city": "München",
            "state": "Bayern",
            "geolocation": {
                "lat": 48.1554929,
                "lon": 11.6318064,
                "zoom": 15
            }
        },
        "map": {
            "coords": [11.6318064, 48.1554929],
            "zoom": 15,
        }
    }
]

const selectedIds = [2]


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
})
