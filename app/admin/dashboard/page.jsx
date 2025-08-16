"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Edit, Trash2, Plus, LogOut } from "lucide-react"

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [blogPosts, setBlogPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = () => {
      const isAdmin = localStorage.getItem("adminAuthenticated")
      const token = localStorage.getItem("adminToken")

      if (isAdmin !== "true" || !token) {
        router.push("/admin/login")
      } else {
        setIsAuthenticated(true)
        fetchBlogs()
      }
      setIsLoading(false)
    }

    checkAuth()
  }, [router])

  const fetchBlogs = async () => {
    setLoading(true)
    try {
      const token = localStorage.getItem("adminToken")
      const response = await fetch("/api/admin/blogs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.ok) {
        const data = await response.json()
        setBlogPosts(data.blogs)
      } else {
        console.error("Failed to fetch blogs")
      }
    } catch (error) {
      console.error("Error fetching blogs:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated")
    localStorage.removeItem("adminToken")
    localStorage.removeItem("adminUser")
    router.push("/admin/login")
  }

  const handleDeletePost = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      try {
        const token = localStorage.getItem("adminToken")
        const response = await fetch(`/api/blogs/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (response.ok) {
          setBlogPosts(blogPosts.filter((post) => post._id !== id))
        } else {
          alert("Failed to delete blog post")
        }
      } catch (error) {
        console.error("Error deleting blog:", error)
        alert("Error deleting blog post")
      }
    }
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg">Loading...</p>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Admin Dashboard</h1>
          <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Blog Posts</h2>
              <Link href="/admin/blog/new">
                <Button className="bg-teal-600 hover:bg-teal-700 flex text-white items-center gap-2">
                  <Plus className="h-4 w-4" />
                  New Post
                </Button>
              </Link>
            </div>

            {loading ? (
              <div className="text-center py-8">
                <p>Loading blogs...</p>
              </div>
            ) : (
              <div className="overflow-hidden bg-white shadow sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                  {blogPosts.map((post) => (
                    <li key={post._id}>
                      <div className="flex items-center px-4 py-4 sm:px-6">
                        <div className="flex min-w-0 flex-1 items-center">
                          <div className="flex-shrink-0">
                            <div className="relative h-16 w-16 rounded-md overflow-hidden">
                              <Image
                                src={post.image || "/placeholder.svg"}
                                alt={post.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>
                          <div className="min-w-0 flex-1 px-4">
                            <div>
                              <p className="truncate text-sm font-medium text-teal-600">{post.category}</p>
                              <p className="truncate text-sm font-medium text-gray-900">{post.title}</p>
                              <p className="mt-1 truncate text-sm text-gray-500">{post.excerpt}</p>
                            </div>
                            <div className="mt-2">
                              <p className="text-xs text-gray-500">
                                Published on {new Date(post.createdAt).toLocaleDateString()}
                              </p>
                              <p className="text-xs text-gray-500">Status: {post.published ? "Published" : "Draft"}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Link href={`/admin/blog/edit/${post._id}`}>
                            <Button variant="outline" size="sm" className="flex items-center gap-1">
                              <Edit className="h-4 w-4" />
                              Edit
                            </Button>
                          </Link>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-1 text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
                            onClick={() => handleDeletePost(post._id)}
                          >
                            <Trash2 className="h-4 w-4" />
                            Delete
                          </Button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
