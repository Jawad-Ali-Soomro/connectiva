import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import { Blog } from "@/lib/models/Blog"
import { authMiddleware } from "@/lib/middleware"

// GET - Fetch all blogs
export async function GET(request) {
  try {
    const client = await clientPromise
    const db = client.db("connectiva")

    const { searchParams } = new URL(request.url)
    const offset = parseInt(searchParams.get("offset") || "0", 10)
    const limit = parseInt(searchParams.get("limit") || "6", 10)

    const blogs = await db
      .collection("blogs")
      .find({ published: true })
      .sort({ createdAt: -1 }) // newest first
      .skip(offset)
      .limit(limit)
      .toArray()

    const total = await db.collection("blogs").countDocuments({ published: true })

    return NextResponse.json({
      blogs,
      total,
    })
  } catch (error) {
    console.error("Error fetching blogs:", error)
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 })
  }
}



// POST - Create new blog
export async function POST(request) {
  try {
    // Check authentication
    if (!authMiddleware(request)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const client = await clientPromise
    const db = client.db("connectiva")

    const body = await request.json()

    // Validate blog data
    const errors = Blog.validate(body)
    if (errors.length > 0) {
      return NextResponse.json({ error: "Validation failed", details: errors }, { status: 400 })
    }

    // Create new blog instance
    const blog = new Blog(body)

    // Check if slug already exists
    const existingBlog = await db.collection("blogs").findOne({ slug: blog.slug })
    if (existingBlog) {
      blog.slug = `${blog.slug}-${Date.now()}`
    }

    // Insert blog into database
    const result = await db.collection("blogs").insertOne(blog)

    return NextResponse.json(
      {
        message: "Blog created successfully",
        blog: { ...blog, _id: result.insertedId },
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error creating blog:", error)
    return NextResponse.json({ error: "Failed to create blog" }, { status: 500 })
  }
}
