import apiEndpoints from "../../config/url";
import { apiGet, apiPost } from "../../utils/utils";

// ------------------ upload todo Api ---------
export const getTodoList = (data, header) => {
    console.log(data,'datadatadatadata');
    return apiGet(apiEndpoints.GETTODOLIST, data, header);
  };
  