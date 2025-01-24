import {NextResponse } from "next/server";

export const POST=async (req)=>{
    const request=await req.json();
    console.log(request);

    // bind database
    // find the user in database
    // check passod validity
    // return the response with the token
    // if password invalid return error response
    
    return NextResponse.json({success: true, username:"Manula"});
};
