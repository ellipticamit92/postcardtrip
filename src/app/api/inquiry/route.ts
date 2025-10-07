import { fetchFromCMS } from "@/lib/fetchCMS";
import { NextRequest, NextResponse } from "next/server";

interface InquiryProps {
  name: string | null;
  email: string | null;
  mobile: string | null;
  destination: string | null;
  budget: string | null;
  travellers: string | null;
  message: string | null;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as InquiryProps;
    if (!body.name || !body.email || !body.mobile) {
      return NextResponse.json(
        {
          success: false,
          error: 'Fields "name", "mobile number" and "email" are required',
        },
        { status: 400 }
      );
    }

    const response = await fetchFromCMS("/inquiry", {
      method: "POST",
      body,
    });

    return NextResponse.json(
      { success: true, data: response, message: "Inquiry successfully sent." },
      { status: 201 }
    );
  } catch (err) {
    console.error("POST /api/destinations error:", err);
    return NextResponse.json(
      {
        success: false,
        error: err instanceof Error ? err.message : "Failed to send inquiry",
      },
      { status: 500 }
    );
  }
}
