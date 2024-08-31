// import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

// export const GET = handleAuth();
import { NextApiRequest, NextApiResponse } from "next";
import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*"); // Replace '*' with your domain if necessary
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Handle the preflight request
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // Continue with the authentication handling
  return handleAuth()(req, res);
}
