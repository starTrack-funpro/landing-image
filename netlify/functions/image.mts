import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Access-Control-Allow-Origin", "*");
  headers.append("Access-Control-Allow-Method", "GET");
  return new Response(
    JSON.stringify({
      imageUrl:
        "https://cdn.discordapp.com/attachments/890761343546839111/1182940989900455997/Saly-43.png?ex=658686a5&is=657411a5&hm=ba6182306cdf9faf986c53bd4a14c3e4602131a661ca15d482065252094b5fea&",
    }),
    {
      headers,
    }
  );
};
