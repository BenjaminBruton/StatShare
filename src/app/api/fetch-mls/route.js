export async function GET(request) {
  const res = await fetch(
    "https://api-football-v1.p.rapidapi.com/v3/fixtures?league=253&season=2025",
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    }
  );

  const data = await res.json();

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
