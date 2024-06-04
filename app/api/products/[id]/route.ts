import { NextResponse, NextRequest } from "next/server";

import prisma from "../../../../prisma/client";
import schema from "../schema";

interface Props {
    params: {
        id: string
    }
}


export default async function GET(request: NextRequest, { params: { id } }: Props) {
  const body = await request.json()

  // 1. Validate the request body
  const validation = schema.safeParse(body)
  if (!validation.success) 
      return  NextResponse.json(validation.error.errors,{ status: 400 })

  // 2. Check if product already exists
  // @ts-ignore
  const productExists = await prisma.product.findFirst({
      where: {
          id: parseInt(id)
      }
  })

  if (!productExists) 
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
  
  NextResponse.json(productExists)
}


async function PUT(request: NextRequest, { params: { id } }: Props) {
  const body = await request.json()

  // 1. Validate the request body
  const validation = schema.safeParse(body)
  if (!validation.success) 
      return  NextResponse.json(validation.error.errors,{ status: 400 })

  // 2. Check if product already exists
  // @ts-ignore
  const productExists = await prisma.product.findFirst({
      where: {
          id: parseInt(id)
      }
  })

  if (!productExists) 
      return NextResponse.json({ error: "Product not found" }, { status: 404 })

  // 3. Update the product
  // @ts-ignore
  const product = await prisma.product.update({
      where: {
          id: parseInt(id)
      },
      data: {
          name: body.name,
          price: body.price
      }
  })
  return NextResponse.json(product)
}


async function DELETE(request: NextRequest, { params: { id } }: Props) {
  // 1. Check if product exists
  // @ts-ignore
  const productExists = await prisma.product.findFirst({
      where: {
          id: parseInt(id)
      }
  })

  if (!productExists) 
      return NextResponse.json({ error: "Product not found" }, { status: 404 })

  // 2. Delete the product
  // @ts-ignore
  await prisma.product.delete({
      where: {
          id: parseInt(id)
      }
  })
  return NextResponse.json({ message: "Product deleted" })
}