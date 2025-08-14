import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  hp: z.string().optional(),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const result = schema.safeParse(body);
  if (!result.success || result.data.hp) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
  return NextResponse.json({ success: true });
}
