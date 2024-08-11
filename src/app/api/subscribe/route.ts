import { subscribe } from "@/lib/firebase/services";
import { apiResponse } from "@/utils/apiResponse";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  const response = await subscribe(email);
  return apiResponse(response, "success");
}
