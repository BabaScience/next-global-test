import { NextResponse, NextRequest  } from "next/server";

import prisma from "../../../prisma/client";
import schema from "./schema";


export async function GET() {
  // @ts-ignore
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}


// TODO: POST NOT WORKING
export async function POST(request: NextRequest) {
  const body = await request.json();

  // 1. Validate the request body
  const validation = schema.safeParse(body);
  if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 });

  // 2. Save the product
  // @ts-ignore
  const product = await prisma.product.create({
    data: {
      name: body.name,
      price: parseFloat(body.price),
      description: body.description,
    },
  });

  return NextResponse.json(product, { status: 201 });
}