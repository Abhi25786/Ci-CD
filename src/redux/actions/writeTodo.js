import apiEndpoints from "../../config/url";
import { apiPost } from "../../utils/utils";

// ------------------ upload todo Api ---------
export const uploadTodo = (data, header) => {
    console.log(data,'datadatadatadata');
    return apiPost(apiEndpoints.UPLOADTODO, data, header);
  };
  