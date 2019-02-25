var globalList;
export const dataToStore = apiResult => {
  globalList = apiResult;
  return {
    type: "DATA_TO_STORE",
    payload: {
      apiResult
    }
  };
};

export const showMarks = (s1, s2, s3, name) => {
  return {
    type: "SHOW_MARKS",
    payload: {
      s1,
      s2,
      s3,
      name
    }
  };
};

export const addRecord = wholeState => {
  console.log("ACTION", wholeState);
  return {
    type: "ADD_RECORD",
    payload: wholeState
  };
};

export const stopApi = value => {
  return {
    type: "STOP_API",
    playlaod: value
  };
};
