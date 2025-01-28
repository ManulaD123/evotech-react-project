import { MongoClient } from "mongodb";
import { version } from "react";

const clientPromise=()=>{
    const MONGODB_URL=process.env.NEXT_PUBLIC_MONGODB_URI;
    const options={};
    if (!MONGODB_URL){
        throw new Error('Invalid/Missing environment variable: "MONGODB_URL"');
    }

    const client=new MongoClient(MONGODB_URL, options);
    return client.connect();
}

export default clientPromise;