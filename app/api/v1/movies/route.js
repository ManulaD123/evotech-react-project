import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  // get movies from mongo db
  try {
    const client = await clientPromise();
    // sample mflix is the database name
    const db = client.db("sample_mflix");

    // fetch movies from the database
    const movies = await db
      .collection("movies-n")
      .find({})
      .sort({ metacritic: -1 })
      .limit(10) // movies records limit
      .toArray();

    return NextResponse.json(movies);
  } catch (error) {
    console.log("MONGODB ERROR", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
