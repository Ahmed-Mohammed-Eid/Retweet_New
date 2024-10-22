import {cookies} from "next/headers";


export const dynamic = 'force-dynamic' // defaults to force-static

export async function POST(request) {
    const body = await request.json();

    if (body?.formType === "login") {
        // SET THE COOKIES With Next.js
        cookies().set('retweet-token', body?.token);
        cookies().set('retweet-user-id', body?.userId);
        cookies().set('retweet-user-email', body?.userEmail);
        cookies().set('retweet-user-name', body?.userName);
        cookies().set('retweet-user-phone', body?.userPhone);
    }

    if (body?.formType === "signup") {
        // SET THE COOKIES With Next.js
        cookies().set('retweet-sign-up-email', body?.email);
        cookies().set('retweet-verify-email', body?.statusRedirect);
    }


    if (body?.formType === "google") {
        // SET THE COOKIES With Next.js
        cookies().set('retweet-token', body?.token);
        cookies().set('retweet-user-id', body?.userId);
        cookies().set('retweet-has-profile', body?.hasProfile);
    }
    return Response.json({body}, {status: 201});
}