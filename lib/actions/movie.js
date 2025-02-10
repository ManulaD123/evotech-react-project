"use server"
import clientPromise from "@/lib/mongodb";

// Movies related server actions

export const createMovie = async (movie) => {
  try {
    const client = await clientPromise();
    const db = client.db("sample_mflix");
    // Create movie query
    const result = await db.collection("movies-n").insertOne(movie);

    console.log(`A movie was inserted with the _id: ${result.insertedId}`);
  } catch {
    console.log("Mongodb insert failed!");
  }
};
