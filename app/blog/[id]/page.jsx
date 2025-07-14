import clientPromise from "@/lib/mongodb"
import { ObjectId } from "mongodb"
import { notFound } from "next/navigation"

export default async function BlogDetailPage({ params }) {
  const { id } = params
  let blog = null

  try {
    const client = await clientPromise
    const db = client.db("connectiva")
    blog = await db.collection("blogs").findOne({ _id: new ObjectId(id) })

    if (!blog) notFound()
  } catch (error) {
    console.error("Error loading blog:", error)
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Cover Image */}
      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full max-h-[400px] object-cover rounded-2xl shadow mb-8"
        />
      )}

      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {blog.title}
      </h1>

      {/* Meta Info */}
      <div className="text-sm text-gray-500 mb-6 flex items-center gap-4">
        <span>By <strong>{blog.author}</strong></span>
        <span>·</span>
        <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
        <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs">
          {blog.category}
        </span>
      </div>

      {/* Excerpt */}
      {blog.excerpt && (
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          <em>{blog.excerpt}</em>
        </p>
      )}

      {/* Content */}
      <div className="prose dark:prose-invert max-w-none text-gray-800 dark:text-gray-200 leading-relaxed">
        {blog.content}
      </div>
    </div>
  )
}
