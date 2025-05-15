// app/api/deezer/route.ts
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q") || "eminem";

  const res = await fetch(`https://api.deezer.com/search?q=${q}`);
  const data = await res.json();

  return Response.json(data);
}
