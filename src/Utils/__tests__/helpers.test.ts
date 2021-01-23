import { capitalizeFirstLetter, isAnyPropertyEmptyInObject, isEmptyOrNil, renameKeysInList, renameKeysInObject, sortListByKey } from "../helpers";


test('Capitalize first character of the string or word', () => {
    expect(capitalizeFirstLetter('twic')).toBe('Twic');
  });

describe('EmtyOrNull function use-cases', () => {
    test('if string is empty', () => {
        expect(isEmptyOrNil('')).toBe(true);
      });
    test('if string is not empty', () => {
        expect(isEmptyOrNil('Twic Wellness')).toBe(false);
      });
    test('if object is empty', () => {
        expect(isEmptyOrNil({})).toBe(true);
      });
    test('if string is not empty', () => {
        expect(isEmptyOrNil({name:'Twic Wellness'})).toBe(false);
      });
    test('if array is empty', () => {
        expect(isEmptyOrNil([])).toBe(true);
      });
    test('if array is not empty', () => {
        expect(isEmptyOrNil([{name:'Twic Wellness'}])).toBe(false);
      });
    test('if null is nill', () => {
        expect(isEmptyOrNil(null)).toBe(true);
      });
    test('if undefined is not nil', () => {
        expect(isEmptyOrNil(undefined)).toBe(true);
      });
})


describe('Sort array both ascending and descending', () => {
  const dumySort = [{
      id: 5,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];

  test('Ascending order sort', () => {
      expect(sortListByKey('asc', 'id')(dumySort)).toEqual([{"id": 2}, {"id": 3}, {"id": 5}])
  });

  test('Descending order sort', () => {
      expect(sortListByKey('desc', 'id')(dumySort)).toEqual([{"id": 5}, {"id": 3}, {"id": 2}])
  });
})

describe('Verify empty properties in object', () => {
  const dumyObjWithEmptyEntry = {
    id: 5,
    name: "",
    company: "Twic"
  };

  const dumyObjWithNoEmptyEntry = {
    id: 5,
    name: "Test",
    company: "Twic"
  };

  test('If any property is empty in object with an empty entry if no entry is ommited from object ', () => {
      expect(isAnyPropertyEmptyInObject(dumyObjWithEmptyEntry, [])).toEqual(true)
  });

  test('If any property is empty in object with zero empty entry if no entry is ommited from object ', () => {
      expect(isAnyPropertyEmptyInObject(dumyObjWithNoEmptyEntry, [])).toEqual(false)
  });

  test('If any property is empty in object with an empty entry if empty entry is ommited from object ', () => {
      expect(isAnyPropertyEmptyInObject(dumyObjWithEmptyEntry, ['name'])).toEqual(false)
  });

  test('If any property is empty in object with zero empty entry if filled entry is ommited from object ', () => {
      expect(isAnyPropertyEmptyInObject(dumyObjWithNoEmptyEntry, ['id'])).toEqual(false)
  });

})

describe('Change key name in object', () => {
  const dumyObj = {
    id: 5,
    name: "",
    company: "Twic"
  };

  test('If multiple keys names can be changed', () => {
      expect(renameKeysInObject({company: "companyName", name: "fullName"})(dumyObj)).toEqual({"companyName": "Twic", "id": 5, "fullName": ""})
  });

  test('If single key name can be changed', () => {
      expect(renameKeysInObject({company: "companyName"})(dumyObj)).toEqual({"companyName": "Twic", "id": 5, "name": ""})
  });

})

describe('Rename keys of list of objects', () => {
  const dumyObj = [{
    id: 5,
    name: "",
    company: "Twic"
  },{
    id: 6,
    name: "Test",
    company: "Twic Wellness"
  }];

  test('If single key name can be changed', () => {
      expect(renameKeysInList({company: "companyName"}, dumyObj)).toEqual([{companyName: "Twic", id: 5, name: ""}, {"companyName": "Twic Wellness", "id": 6, "name": "Test"}])
  });

})

describe('Replace property in list', () => {
  const dumyObj = [{
    id: 5,
    name: "",
    company: "Twic"
  },{
    id: 6,
    name: "Test",
    company: "Twic Wellness"
  }];

})