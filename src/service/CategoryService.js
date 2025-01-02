import api from "../config/Axios";
import { CATEGORY_API } from "../constants/Index";


export const GET_ALL_CATEGORIES = async () => {
    const response = await api.get(CATEGORY_API.GET_ALL);
    return response;
}

export const GET_CATEGORY_BY_ID = async (id) => {
    const response = await api.get(CATEGORY_API.GET_BY_ID + id);
    return response;
}


