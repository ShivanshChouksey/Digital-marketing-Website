import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get("url");

  if (!targetUrl) {
    return NextResponse.json({ valid: false, reason: "missing_url" }, { status: 400 });
  }

  let parsedUrl: URL;

  try {
    parsedUrl = new URL(targetUrl);
  } catch {
    return NextResponse.json({ valid: false, reason: "invalid_url" }, { status: 400 });
  }

  if (parsedUrl.hostname !== "calendly.com" && !parsedUrl.hostname.endsWith(".calendly.com")) {
    return NextResponse.json({ valid: false, reason: "unsupported_host" }, { status: 400 });
  }

  try {
    const response = await fetch(parsedUrl, {
      method: "HEAD",
      redirect: "follow",
      cache: "no-store",
    });

    return NextResponse.json({
      valid: response.ok,
      status: response.status,
    });
  } catch {
    return NextResponse.json({ valid: false, reason: "request_failed" }, { status: 502 });
  }
}
