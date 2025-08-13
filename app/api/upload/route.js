import { NextResponse } from "next/server"
import { authMiddleware } from "@/lib/middleware"
import FormData from "form-data"

export async function POST(request) {
  try {
    // 1️⃣ Check authentication
    if (!authMiddleware(request)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // 2️⃣ Get uploaded file from form data
    const data = await request.formData()
    const file = data.get("file")

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 })
    }

    // 3️⃣ Validate file type
    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ error: "Only image files are allowed" }, { status: 400 })
    }

    // 4️⃣ Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: "File size must be less than 5MB" }, { status: 400 })
    }

    // 5️⃣ Convert file to Buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // 6️⃣ Prepare Pinata form-data
    const formData = new FormData()
    formData.append("file", buffer, {
      filename: file.name,
      contentType: file.type,
    })

    // Optional metadata
    formData.append(
      "pinataMetadata",
      JSON.stringify({
        name: `blog-${Date.now()}`,
      })
    )

    // Optional pinata options
    formData.append(
      "pinataOptions",
      JSON.stringify({
        cidVersion: 1,
      })
    )

    // 7️⃣ Upload to Pinata (important: DO NOT manually set Content-Type)
    const pinataRes = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PINATA_JWT}`, // store in .env
        ...formData.getHeaders()?.() // ✅ This sets the boundary correctly
      },
      body: formData,
    })

    if (!pinataRes.ok) {
      const errorText = await pinataRes.text()
      throw new Error(`Pinata upload failed: ${errorText}`)
    }

    const pinataData = await pinataRes.json()

    // 8️⃣ Return IPFS link
    return NextResponse.json({
      message: "File uploaded to Pinata successfully",
      ipfsHash: pinataData.IpfsHash,
      url: `https://orange-large-reindeer-667.mypinata.cloud/ipfs/${pinataData.IpfsHash}`,
    })
  } catch (error) {
    console.error("Error uploading to Pinata:", error)
    return NextResponse.json({ error: "Failed to upload file" }, { status: 500 })
  }
}
