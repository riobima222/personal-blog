import { getBlog } from "@/lib/firebase/services";
import { apiResponse } from "@/utils/apiResponse";

export async function GET() {
  const response = await getBlog();
  return apiResponse(response, "success", response);
}
