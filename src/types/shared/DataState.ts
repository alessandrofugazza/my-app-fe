import { ApiTest } from "../ApiTest";
import { GeneralNote } from "../general-notes/GeneralNote";

export type DataState = {
  data: ApiTest[] | GeneralNote[];
  isLoading: boolean;
  isError: boolean;
};

export const DATA_FETCH_INIT = "DATA_FETCH_INIT";
export const DATA_FETCH_FAILURE = "DATA_FETCH_FAILURE";
export const DATA_FETCH_SUCCESS = "DATA_FETCH_SUCCESS";
export const REMOVE_DATA_ENTRY = "REMOVE_DATA_ENTRY";

type Payloads = ApiTest[] | GeneralNote[];

type DataFetchInitAction = {
  type: typeof DATA_FETCH_INIT;
};

type DataFetchSuccessAction = {
  type: typeof DATA_FETCH_SUCCESS;
  payload: Payloads;
};

type DataFetchFailureAction = {
  type: typeof DATA_FETCH_FAILURE;
};

type DataEntryRemoveAction = {
  type: typeof REMOVE_DATA_ENTRY;
  payload: string;
};

export type DataAction = DataFetchInitAction | DataFetchSuccessAction | DataFetchFailureAction | DataEntryRemoveAction;

export const dataReducer = (state: DataState, action: DataAction) => {
  switch (action.type) {
    case DATA_FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case DATA_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case DATA_FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case REMOVE_DATA_ENTRY:
      return {
        ...state,
        data: state.data.filter((entry) => {
          if ("id" in entry) {
            return entry.id !== action.payload;
          }
          return true;
        }) as ApiTest[] | GeneralNote[], // Type assertion to ensure correct type
      };
    default:
      throw new Error("Unknown action type");
  }
};
