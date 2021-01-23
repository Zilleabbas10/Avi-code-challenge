import {
    isEmpty,
    isNil,
    anyPass,
    addIndex,
    map,
    keys,
    forEach,
    curry,
    assoc,
    reduce,
    any,
    values,
    omit,
    pipe,
    ascend,
    prop,
    descend,
    sort,
  } from 'ramda';
  import { useRef, useEffect } from 'react';
  
  // returns true if the param is empty or nil
  export const isEmptyOrNil = anyPass([isEmpty, isNil]);
  export const mapIndexed = addIndex(map);
  
  export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  
  export const renameKeysInList = (keyMap, list) => {
    if (isEmptyOrNil(keyMap) || isEmptyOrNil(list)) return list;
  
    const renameKeys = curry((keysMap, obj) => reduce((acc, key) => assoc(keysMap[key] || key, obj[key], acc), {}, keys(obj)));
    return map(renameKeys(keyMap), list)
  }
  
  export const createFormData = (data: object) => {
    const formData = new FormData();
    const formKeys = keys(data);
  
    forEach((key) => {
      formData.append(key, data[key]);
    }, formKeys);
  
    return formData;
  };
  
  export const renameKeysInObject = curry((keysMap, obj) =>
    reduce(
      (acc, key) => assoc(keysMap[key] || key, obj[key], acc),
      {},
      keys(obj),
    ),
  );
  
  export const isAnyPropertyEmptyInObject = (
    obj: object,
    omittedKeys: Array<string> = [],
  ) => {
    return pipe(omit(omittedKeys), values, any(isEmptyOrNil))(obj);
  };
  
  export const sortListByKey = curry((sortOrder, key, list) => {
    const sortingFunction =
      sortOrder === 'asc' ? ascend(prop(key)) : descend(prop(key));
    //@ts-ignore
    const sortedList = sort(sortingFunction, list);
    return sortedList;
  });
  
  
  // Hook
  export const usePreviousHook = (value: any) => {
    // The ref object is a generic container whose current property is mutable ...
    // ... and can hold any value, similar to an instance property on a class
    const ref = useRef();
  
    // Store current value in ref
    useEffect(() => {
      ref.current = value;
    }, [value]); // Only re-run if value changes
  
    // Return previous value (happens before update in useEffect above)
    return ref.current;
  };
  