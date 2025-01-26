import {NextResponse } from "next/server";

const MOVIES=[
    {id:1, title:"Harry Potter 1"},
    {id:2, title:"Lord of the Ring"},
    {id:3, title:"Hobbit"},
    {id:4, title:"Insteller"},
    {id:5, title:"Harry Potter 2"},
    {id:6, title:"Spider Man"},
    {id:7, title:"Bat Man"},
    {id:8, title:"Avengers"}
   
]

export const GET=async (req)=>{
 return NextResponse.json({success:true, movies:MOVIES})
}