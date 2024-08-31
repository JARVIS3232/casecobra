// import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

// export const GET = handleAuth();
import { NextRequest, NextResponse } from "next/server";
import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

export async function GET(req: NextRequest) {
  const res = NextResponse.next(); // Create a NextResponse object to manage the response
  res.headers.set("Access-Control-Allow-Origin", "*"); // Replace '*' with your domain if necessary
  res.headers.set("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  if (req.method === "OPTIONS") {
    return new NextResponse(null, { status: 200 });
  }
  return handleAuth()(req, res);
}
