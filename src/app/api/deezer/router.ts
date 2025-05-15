// app/api/deezer/route.ts
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q");

  if (!q) {
    return NextResponse.json({ error: "Missing query" }, { status: 400 });
  }

  const deezerRes = await fetch(`https://api.deezer.com/search?q=${q}`);
  const data = await deezerRes.json();

  return NextResponse.json(data);
}
