import { marked } from 'marked';

export const remove_space = (text:string):string => {
    return text.replaceAll(" ", "_")
}

export const query_string = (params:any):URLSearchParams => {
    return new URLSearchParams(params)
}

export const is_valid_http_url = (string:string):boolean => {
    let url:URL;

    try {
        url = new URL(string);
    } catch (_) {
        return false;  
    }

    return url.protocol === "http:" || url.protocol === "https:";
}

export const is_html = RegExp.prototype.test.bind(/(<([^>]+)>)/i)

export const capitalize = (text:string):string => {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export async function parse_markdown(text:string) {
    return await marked.parseInline(text)
}

export function get_error_message(status:number, endpoint:string) {
    return `HTTP error! Status — ${status}<br><pre style="width: fit-content"><code>${endpoint}</code></pre>`
}

export function decode_unicode_escapes(text:string) {
    return text.replace(/\\u([0-9A-Fa-f]{4})/g, (match, p1) => String.fromCharCode(parseInt(p1, 16)));
}