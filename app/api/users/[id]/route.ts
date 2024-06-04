import { NextRequest, NextResponse } from "next/server";

import prisma  from "../../../../prisma/client";

import schema from "../schema";

interface Props {
    params: {
        id: string
    }
}


export async function GET(request: NextRequest, { params: { id } }: Props) {
    const body = await request.json()
    
    // 1. Validate the request body
    const validation = schema.safeParse(body)
    if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 })
    
    // 2. Check if user already exists
    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 })
    
    // 3. Return the user   
    return NextResponse.json(user)
}


export async function PUT(request: NextRequest, { params: { id } }: Props) {
    const body = await request.json()

    // 1. Validate the request body
    const validation = schema.safeParse(body)
    if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 })

    // 2. Check if user already exists
    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 })

    // 3. Update the user
    const updatedUser = await prisma.user.update({
        where: {
            id: parseInt(id)
        },
        data: {
            name: body.name,
            email: body.email
        }
    })
    // 4. Return the updated user
    return NextResponse.json(updatedUser)
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
    const body = await request.json()
    
    // 1. Validate the request body
    const validation = schema.safeParse(body)
    if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 })

    // 2. Check if user already exists
    const userExists = await prisma.user.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    if (!userExists) return NextResponse.json({ error: "User not found" }, { status: 404 })

    // 3. Delete the user
    const user = await prisma.user.delete({
        where: {
            id: userExists.id
        }
    })

    // 4. Return a success message
    return NextResponse.json({ message: "User deleted" })
}