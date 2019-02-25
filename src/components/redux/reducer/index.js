import { combineReducers } from "redux";

const init = {
  Data: []
};

var Ev;
const reducer = (state = init, action) => {
  switch (action.type) {
    case "DATA_TO_STORE":
      let finalData = action.payload;
      Ev = action.payload.apiResult;
      global = action.payload.apiResult;
      console.log("EV", Ev);
      return finalData;
    case "SHOW_MARKS":
      return action.payload;
    case "ADD_RECORD":
      console.log("add", Ev);
      console.log("action.payload.data", action.payload.Data);
      finalData = Ev.concat(action.payload.Data);
      return finalData;
    case "STOP_API":
      return false;
    default:
      return "DATA_NOT_RECEIVED";
  }
};

export default combineReducers({ reducer });
