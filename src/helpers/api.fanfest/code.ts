import type { PrizeAns, UserPrizes } from '@dtypes/api.fanfest'
import { get_api_url } from '@helpers/env'
import { get_error_message } from '@helpers/string'

export async function get_prize(auth_token:string, code:string) {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
    }

    const ENDPOINT = `${get_api_url()}/giveaway/${code}`
    
    console.log(`Requesting: GET ${ENDPOINT}`)

    try {
        const response = await fetch(ENDPOINT, {
            headers: headers,
            method: 'GET'
        })

        // console.log(response)

        if (!response.ok) {
            throw new Error(get_error_message(
                response.status,
                `GET: ${ENDPOINT}`
            ));
        }

        return await response.json() as PrizeAns;
    } catch (error) {
        console.log(error)
        throw new Error(`Error claiming prize: ${error.message}`);
    }
}

export async function get_user_prizes(auth_token:string) {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
    }

    const ENDPOINT = `${get_api_url()}/user/`
    
    console.log(`Requesting: GET ${ENDPOINT}`)

    try {
        const response = await fetch(ENDPOINT, {
            headers: headers,
            method: 'GET'
        })

        // console.log(response)

        if (!response.ok) {
            throw new Error(get_error_message(
                response.status,
                `GET: ${ENDPOINT}`
            ));
        }

        return await response.json() as UserPrizes;
    } catch (error) {
        console.log(error)
        throw new Error(`Error fetching user prizes: ${error.message}`);
    }
}