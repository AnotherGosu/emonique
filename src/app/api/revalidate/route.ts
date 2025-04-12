import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const key = request.headers.get("RevalidateKey");

  if (key === process.env.API_REVALIDATE_KEY) {
    revalidatePath("/");

    return NextResponse.json({ revalidated: true, now: Date.now() });
  }
}
