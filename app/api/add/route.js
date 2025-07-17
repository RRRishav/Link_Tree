import clientPromise from "@/app/lib/mongodb";

export async function POST(req) {
    const body = await req.json();
    const client = await clientPromise;
    const db = await client.db("test");
    const collection = db.collection("links");


    const result = await collection.insertOne(body);
    console.log(result)

  
    // You can process the body here if needed
    return Response.json({ 
        message: "Link added successfully", data: body,
        success: true
     });
}