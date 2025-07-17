import clientPromise from "@/app/lib/mongodb";

export async function POST(req) {
    try {
        const body = await req.json();
        const client = await clientPromise;
        const db = await client.db("test");
        const collection = db.collection("links");

        const doc = await collection.findOne({ handle: body.handle });
        if (doc) {
            return Response.json({
                message: "Handle already exists",
                success: false
            });
        }

        const result = await collection.insertOne(body);

        if (!result.acknowledged) {
            return Response.json({
                message: "Failed to add link",
                success: false
            });
        }

        return Response.json({
            message: "Link added successfully",
            data: body,
            success: true
        });
    } catch (error) {
        console.error("Error in POST /api/add:", error);
        return Response.json({
            message: "An error occurred",
            success: false,
            error: error.message || error.toString()
        }, { status: 500 });
    }
}