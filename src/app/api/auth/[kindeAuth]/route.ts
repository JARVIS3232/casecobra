// import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

// export const GET = handleAuth();
import { NextRequest, NextResponse } from "next/server";
import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

export async function GET(req: NextRequest) {
  const authResult = await handleAuth(req as unknown as Request);

  const response = NextResponse.json(authResult);

  response.headers.set(
    "Access-Control-Allow-Origin",
    "https://casecobra-eight-delta.vercel.app"
  );
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  return response;
}
export async function OPTIONS(req: NextRequest) {
  const response = new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "https://casecobra-eight-delta.vercel.app",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });

  return response;
}
