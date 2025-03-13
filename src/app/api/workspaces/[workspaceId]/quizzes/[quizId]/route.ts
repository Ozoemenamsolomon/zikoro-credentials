import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { workspaceId: number; quizId: string } }
) {
  const supabase = createRouteHandlerClient({ cookies });

  if (req.method === "GET") {
    try {
      const { workspaceId, quizId } = params;

      console.log(workspaceId, quizId);

      const query = supabase
        .from("quiz")
        .select("*")
        .eq("id", quizId)
        .maybeSingle();

      const { data, error, status } = await query;

      console.log(data);

      if (error) {
        return NextResponse.json(
          {
            error: error?.message,
          },
          {
            status: 400,
          }
        );
      }

      if (error) throw error;

      return NextResponse.json(
        {
          data,
        },
        {
          status: 200,
        }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        {
          error: "An error occurred while making the request.",
        },
        {
          status: 500,
        }
      );
    }
  } else {
    return NextResponse.json({ error: "Method not allowed" });
  }
}

export const dynamic = "force-dynamic";
