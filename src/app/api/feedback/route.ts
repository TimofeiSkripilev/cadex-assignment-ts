import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    console.log("Message received:", {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      message: `Thank you for your interest, ${name}!`,
      status: 200,
    });
  } catch (error) {
    console.error("Error processing message:", error);
    return NextResponse.json({
      message: "Error processing message",
      status: 500,
    });
  }
}
