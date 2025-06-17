"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Save } from "lucide-react"

export default function EditBlogPost() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [post, setPost] = useState(null)
  const router = useRouter()
  const params = useParams()

  // Sample blog posts data for demo
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Simplifying Complex Science Without Losing Accuracy",
      excerpt: "How to make scientific concepts accessible while maintaining scientific integrity and accuracy.",
      date: "May 15, 2023",
      category: "Science Communication",
      image: "/placeholder.svg?height=600&width=800",
      slug: "simplifying-complex-science",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      title: "Bridging the Gap: Communicating Rare Disease Research to Patients",
      excerpt: "Strategies for making rare disease research understandable and relevant to patient communities.",
      date: "April 28, 2023",
      category: "Patient Education",
      image: "/placeholder.svg?height=600&width=800",
      slug: "communicating-rare-disease-research",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      title: "Visual Storytelling in Scientific Communication",
      excerpt: "How visual elements can enhance understanding of complex scientific concepts.",
      date: "March 12, 2023",
      category: "Visual Communication",
      image: "/placeholder.svg?height=600&width=800",
      slug: "visual-storytelling-science",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ]

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = () => {
      const isAdmin = localStorage.getItem("adminAuthenticated")
      if (isAdmin !== "true") {
        router.push("/admin/login")
      } else {
        setIsAuthenticated(true)

        // Find the post by ID
        const postId = Number.parseInt(params.id)
        const foundPost = blogPosts.find((p) => p.id === postId)

        if (foundPost) {
          setPost({
            title: foundPost.title,
            category: foundPost.category,
            excerpt: foundPost.excerpt,
            content: foundPost.content,
            image: foundPost.image,
          })
        } else {
          router.push("/admin/dashboard")
        }
      }
      setIsLoading(false)
    }

    checkAuth()
  }, [router, params.id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setPost((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleImageChange = (e) => {
    // In a real application, you would handle file uploads
    // This is a simplified example
    setPost((prev) => ({
      ...prev,
      image: e.target.files[0],
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would update the blog post in a database
    // This is a simplified example
    alert("Blog post updated successfully!")
    router.push("/admin/dashboard")
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg">Loading...</p>
      </div>
    )
  }

  if (!isAuthenticated || !post) {
    return null // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Edit Blog Post</h1>
          <Button variant="outline" onClick={() => router.push("/admin/dashboard")} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-white p-6 rounded-lg shadow">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={post.title}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <input
                    type="text"
                    id="category"
                    name="category"
                    value={post.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
                    Excerpt
                  </label>
                  <input
                    type="text"
                    id="excerpt"
                    name="excerpt"
                    value={post.excerpt}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                    Content
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    rows="10"
                    value={post.content}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                    Featured Image
                  </label>
                  <div className="mb-2 text-sm text-gray-500">
                    Current image: {typeof post.image === "string" ? post.image : "New image selected"}
                  </div>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleImageChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    accept="image/*"
                  />
                </div>
                <div className="flex justify-end">
                  <Button type="submit" className="bg-teal-600 hover:bg-teal-700 flex items-center gap-2">
                    <Save className="h-4 w-4" />
                    Update Post
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
