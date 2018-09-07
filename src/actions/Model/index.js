import {SET_CELL_MAP_DATA} from "../types";
import {showSuccess} from "../Utils/notification";
import {mockGraph} from "../../constants/mock";

export const setCellMapData = (data) => ({
  type: SET_CELL_MAP_DATA,
  payload: data,
});

export function fetchCellMapData() {
  return (dispatch) => {
    dispatch(setCellMapData(mockGraph));
    dispatch(showSuccess('Successfully fetched data'));
  }
}