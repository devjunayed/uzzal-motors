import { NextResponse } from "next/server";

export async function GET(){
    try {
        return NextResponse.json({message: "working"});
    } catch (error: any) {
        return NextResponse.json({message: error.message});
    }
}