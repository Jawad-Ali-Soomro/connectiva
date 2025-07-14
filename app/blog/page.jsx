"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { User } from "lucide-react"

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [pagination, setPagination] = useState({})

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async (page = 1) => {
    setLoading(true)
    try {
      const response = await fetch(`/api/blogs?page=${page}&limit=6`)
      if (response.ok) {
        const data = await response.json()
        setBlogPosts(data.blogs)
        setPagination(data.pagination)
      }
    } catch (error) {
      console.error("Error fetching blogs:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-50 to-blue-50 py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Insights & Blog</h1>
            <p className="text-lg md:text-xl text-gray-700">
              Explore our latest thoughts on scientific communication, healthcare content, and making complex concepts
              accessible.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {blogPosts.length > 0 && (
        <section className="py-12 px-4 md:px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-[300px] md:h-auto">
                  <Image
                    src={blogPosts[0].image || "/placeholder.svg?height=600&width=800"}
                    alt="Featured blog post"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="text-teal-600 font-medium mb-2">Featured Article</div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">{blogPosts[0].title}</h2>
                  <p className="text-gray-700 mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden border flex items-center justify-center bg-gray-200">
                      <User />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{blogPosts[0].author}</p>
                      <p className="text-gray-600">{new Date(blogPosts[0].createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <Link href={`/blog/${blogPosts[0]._id}`}>
                    <Button className="bg-teal-600 hover:bg-teal-700 text-white">Read Article</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          {loading ? (
            <div className="text-center py-8">
              <p>Loading blog posts...</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.slice(1).map((post) => (
                  <div
                    key={post._id}
                    className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="relative h-[200px]">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    </div>
                    <div className="p-6">
                      <div className="text-teal-600 text-sm font-medium mb-2">{post.category}</div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">{post.title}</h3>
                      <p className="text-gray-700 mb-4">{post.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 text-sm">{new Date(post.createdAt).toLocaleDateString()}</span>
                        <Link href={`/blog/${post._id}`} className="text-teal-600 font-medium hover:underline">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {pagination.pages > 1 && (
                <div className="mt-12 text-center">
                  <Button
                    variant="outline"
                    className="border-teal-600 text-teal-600 hover:bg-teal-50"
                    onClick={() => fetchBlogs(pagination.page + 1)}
                    disabled={pagination.page >= pagination.pages}
                  >
                    Load More Articles
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-gray-700 mb-6">
                  Stay updated with the latest insights on scientific communication, healthcare content, and making
                  complex concepts accessible.
                </p>
              </div>
              <div>
                <form className="space-y-4">
                  <div>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">Subscribe</Button>
                  <p className="text-sm text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
