import clientPromise from "@/app/lib/mongodb";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const handle = searchParams.get("handle");
  if (!handle) {
    return Response.json({ message: "No handle provided", success: false }, { status: 400 });
  }
  const client = await clientPromise;
  const db = client.db("test");
  const collection = db.collection("links");
  const links = await collection.find({ handle }).toArray();
  return Response.json({ links, success: true });
} 