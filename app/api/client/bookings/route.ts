import { supabaseClient } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { date, time, name, email, company, projectType, message, created_at } = await request.json();
    
    if (!date || !time || !name || !email || !projectType) {
        return NextResponse.json({
            success: false,
            message: "Date, time, name, email, project type are required!"
        }, { status: 404});
    }

    if (!created_at) {
        return NextResponse.json({
            success: false,
            message: "Date of creation is missing!"
        }, { status: 404 });
    }

    try {
        const { data, error } = await supabaseClient.from("booked_calls").insert([
            {
                name,
                email,
                company_name: company,
                project_type: projectType,
                description: message,
                date,
                time,
                created_at
            }
        ]).select();

        if (error) {
            return NextResponse.json({
                success: false,
                message: "Supabase error: Failed to create booking!",
                data
            }, { status: 500 });
        }

        return NextResponse.json({
            success: true,
            message: "Booking successful!"
        }, { status: 201 });
    } catch (error) {
        console.error("Something went wrong", error);
        return NextResponse.json({
            success: false,
            message: (error as Error).message || "Something went wrong"
        }, { status: 500 });
    }
}