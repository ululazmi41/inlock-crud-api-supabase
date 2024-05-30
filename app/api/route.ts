import { NextResponse } from "next/server";
import { database } from '@/core/database';
import { Post } from "@/core/enum/Post";

export async function GET(): Promise<NextResponse> {
  const { data, error } = await database.get()
  if (error) {
    throw error
  }
  const response = {
    message: "Retrieved records",
    data: data,
  }
  return NextResponse.json(response)
}

export async function POST(request: Request): Promise<NextResponse> {
  const { title, description } = await request.json()
  const post: Post = {
    title,
    description,
  }
  const error = await database.post(post)
  if (error) {
    throw error
  }
  const response = {
    message: "record added succesfully",
  }
  return NextResponse.json(response)
}

export async function PUT(request: Request): Promise<NextResponse> {
  const { id, title, description } = await request.json()
  const post: Post = {
    title,
    description,
  }
  const error = await database.put(id, post)
  if (error) {
    throw error
  }
  const response = {
    message: "record updated succesfully",
  }
  return NextResponse.json(response)
}

export async function DELETE(request: Request): Promise<NextResponse> {
  const { id } = await request.json()
  const error = await database.delete(id)
  if (error) {
    throw error
  }
  const response = {
    message: "record deleted succesfully",
  }
  return NextResponse.json(response)
}
