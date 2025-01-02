import { ApiTest } from "../ApiTest";
import { GeneralNote } from "../general-notes/GeneralNote";

export type DataState = {
  data: ApiTest[] | GeneralNote[];
  isLoading: boolean;
  isError: boolean;
};
