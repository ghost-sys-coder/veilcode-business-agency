import { supabaseClient } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { name, email, companyName, projectType, budgetRange, projectDescription } = await request.json();

    if (!name || !email || !companyName || !projectType || !budgetRange || !projectDescription) {
        console.log({ name, email, companyName, projectType, budgetRange, projectDescription });
        return NextResponse.json({
            success: false,
            message: "name, email, company name, project type, budget range and project description are required!"
        }, { status: 400 });
    }

    try {
        const { data, error } = await supabaseClient.from("client_messages").insert([
            {
                name, email,
                company_name: companyName,
                project_type: projectType,
                budget_range: budgetRange,
                project_description: projectDescription,
                created_at: new Date().toISOString()
            }
        ]).select();

        if (error) {
            console.error("Supabase error:", error);
            return NextResponse.json({
                success: false,
                message: "Failed to save message"
            }, { status: 500 });
        }

        return NextResponse.json({
            success: true,
            message: "Message saved successfully!",
            data
        }, { status: 201 });
    } catch (error) {
        console.error("Failed to save message", error);
        return NextResponse.json({
            success: false,
            message: (error as Error).message || "Failed to save message"
        }, { status: 500 });
    }
}