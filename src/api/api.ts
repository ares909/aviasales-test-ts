import axios from "axios";
import { url } from "../constants/constants";
import { IResponse } from "../models/Ticket";

export const getSearchId = async () => {
    const response = await axios.get(`${url}/search`);
    return response.data;
};

export const getTickets = async (searchId: string) => {
    const response = await axios.get<IResponse>(`${url}/tickets`, { params: { searchId } });
    return response.data;
};
