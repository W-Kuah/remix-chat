import { LoaderFunctionArgs } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";

export async function loader({params, request}: LoaderFunctionArgs) {
    if(typeof params.provider !== 'string') throw new Error('invalid provider');

    return await authenticator.authenticate(params.provider, request, {
        successRedirect: '/chat',
        failureRedirect: '/',
    }); 
}