//Service to contain any api calls

import { AppConfig } from "./constants";
import { APIResponse } from "./store/types";

export const appService = {
  fetchContacts: (config: AppConfig): Promise<APIResponse> => {
    return fetch(
      `${config.userUrl}/?results=${config.numberCards}`
    ).then((res) => res.json());
  },
};
