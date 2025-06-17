import { NextResponse } from "next/server"
import { writeFile } from "fs/promises"
import path from "path"
import { authMiddleware } from "@/lib/middleware"

export async function POST(request) {
  try {
    // Check authentication
    if (!authMiddleware(request)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const data = await request.formData()
    const file = data.get("file")

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 })
    }

    // Validate file type
    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ error: "Only image files are allowed" }, { status: 400 })
    }

    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: "File size must be less than 5MB" }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Generate unique filename
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9)
    const extension = path.extname(file.name)
    const filename = `blog-${uniqueSuffix}${extension}`

    // Save file to public/uploads directory
    const uploadPath = path.join(process.cwd(), "public", "uploads", filename)
    await writeFile(uploadPath, buffer)

    // Return the file URL
    const fileUrl = `/uploads/${filename}`

    return NextResponse.json({
      message: "File uploaded successfully",
      url: fileUrl,
      filename: filename,
    })
  } catch (error) {
    console.error("Error uploading file:", error)
    return NextResponse.json({ error: "Failed to upload file" }, { status: 500 })
  }
}
