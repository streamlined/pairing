import qs from "qs";
import got from 'got';

export const get = async (path, params = {}, accessToken = "", options = {}) => {
    return await makeRequest( path, params, 'GET', accessToken, options);
};

export const post = async (path, params = {}, accessToken = "", options = {}) => {
    return await makeRequest( path, params, 'POST', accessToken, options);
};

export const put = async (path, params = {}, accessToken = "", options = {}) => {
    return await makeRequest( path, params, 'PUT', accessToken, options);
};

export const del = async (path, params = {}, accessToken = "", options = {}) => {
    return await makeRequest( path, params, 'DELETE', accessToken, options);
};


const makeRequest = async ( url, params = {}, method = 'GET', accessToken, options) => {
    try{
        const { headers, formData, responseType, ...rest } = options;
        const request = {
            method: method,
            url: `${process.env.API_ENDPOINT}/${url}`,
            responseType: responseType || 'json',
            headers: {
                'X-Waf-Token': process.env.WAF_TOKEN,
                ...{
                    ...(!formData && {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        Accept: 'application/json'
                    } || {}),
                    ...(formData && {
                        "Content-Length": formData.getLengthSync(),
                        ...formData.getHeaders(),

                    } || {}),
                    ...(accessToken !== "" && {Authorization: `Bearer ${accessToken}`})
                },
                ...(headers || {})
            },
            ...((method === 'GET' && {searchParams: params}) || {}),
            ...(method !== 'GET' && {body: formData || qs.stringify(params)}),
            ...rest
        };
        const {body, statusCode} = await got(request);

        return [
            statusCode,
            body || {},
        ];
    } catch (error) {
        throw error;
    }
};
