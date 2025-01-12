import type { Auth } from '@dtypes/api.fanfest'
import { get_api_url } from '@helpers/env'
import { get_error_message } from '@helpers/string'

export async function authenticate(code:string) {
    const data = JSON.stringify({
        'code': code,
    });

    const headers = {
        'Content-Type': 'application/json',
    }

    const ENDPOINT = `${get_api_url()}/oauth/login`
    
    console.log(`Requesting: POST ${ENDPOINT}`)

    try {
        const response = await fetch(ENDPOINT, {
            headers: headers,
            body: data,
            method: 'POST'
        })

        // console.log(response)

        if (!response.ok) {
            throw new Error(get_error_message(
                response.status,
                `POST: ${ENDPOINT}`
            ));
        }

        return await response.json() as Auth;
    } catch (error) {
        throw new Error(`Error authenticating: ${error.message}`);
    }
}
