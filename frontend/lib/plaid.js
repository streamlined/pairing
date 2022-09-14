import {post} from "../utils/requests";

export const createLinkToken = async (data) => {
    try {
        return await post('plaid/create_link_token', {
            plaid: data,
        });
    } catch (error) {
        return error;
    }
};

export const exchangeToken = async (data) => {
    try {
        return await post('plaid/exchange_token', {
            plaid: data,
        });
    } catch (error) {
        return error;
    }
};
