// import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

// export const GET = handleAuth();
// app/api/auth/your-endpoint/route.ts
// app/api/auth/your-endpoint/route.ts
import { NextRequest, NextResponse } from "next/server";
import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

export async function GET(req: NextRequest) {
  // Create a response
  const res = NextResponse.next();

  // Configure CORS headers
  res.headers.set(
    "Access-Control-Allow-Origin",
    "https://casecobra-eight-delta.vercel.app"
  );
  res.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  // Handling authentication
  // You may need to adapt this based on Kinde's documentation
  const authResponse = await handleAuth(req as unknown as Request); // Adjust based on actual usage
  return NextResponse.json(authResponse); // Adapt if needed
}
