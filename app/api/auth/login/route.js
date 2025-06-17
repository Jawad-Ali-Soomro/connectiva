import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const { email, password } = await request.json()

    if (email === "admin@connectiva.com" && password === "admin123") {
      const token = "admin-token"
      return NextResponse.json({
        message: "Login successful",
        token: token,
        user: {
          email: email,
          role: "admin",
        },
      })
    } else {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }
  } catch (error) {
    console.error("Error during login:", error)
    return NextResponse.json({ error: "Login failed" }, { status: 500 })
  }
}
