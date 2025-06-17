import { NextResponse } from "next/server"
import { ObjectId } from "mongodb"
import clientPromise from "@/lib/mongodb"
import { Blog } from "@/lib/models/Blog"
import { authMiddleware } from "@/lib/middleware"

// GET - Fetch single blog
export async function GET(request, { params }) {
  try {
    const client = await clientPromise
    const db = client.db("Connectiva")

    const blog = await db.collection("blogs").findOne({
      _id: new ObjectId(params.id),
    })

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 })
    }

    return NextResponse.json(blog)
  } catch (error) {
    console.error("Error fetching blog:", error)
    return NextResponse.json({ error: "Failed to fetch blog" }, { status: 500 })
  }
}

// PUT - Update blog
export async function PUT(request, { params }) {
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

    // Update blog
    const updateData = {
      ...body,
      updatedAt: new Date(),
    }

    const result = await db.collection("blogs").updateOne({ _id: new ObjectId(params.id) }, { $set: updateData })

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 })
    }

    return NextResponse.json({
      message: "Blog updated successfully",
    })
  } catch (error) {
    console.error("Error updating blog:", error)
    return NextResponse.json({ error: "Failed to update blog" }, { status: 500 })
  }
}

// DELETE - Delete blog
export async function DELETE(request, { params }) {
  try {
    // Check authentication
    if (!authMiddleware(request)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const client = await clientPromise
    const db = client.db("connectiva")

    const result = await db.collection("blogs").deleteOne({
      _id: new ObjectId(params.id),
    })

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 })
    }

    return NextResponse.json({
      message: "Blog deleted successfully",
    })
  } catch (error) {
    console.error("Error deleting blog:", error)
    return NextResponse.json({ error: "Failed to delete blog" }, { status: 500 })
  }
}
