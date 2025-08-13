"use client"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { Upload } from "lucide-react"
import axios from "axios"

export default function EditBlogPage() {
  const { id } = useParams()
  const router = useRouter()

  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    category: "",
    image: "",
    content: "",
  })

  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [saving, setSaving] = useState(false)

  // Fetch blog
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blogs/${id}`)
        if (!res.ok) throw new Error("Blog not found")
        const blog = await res.json()

        setForm({
          title: blog.title || "",
          excerpt: blog.excerpt || "",
          category: blog.category || "",
          image: blog.image || "",
          content: blog.content || "",
        })
      } catch (err) {
        console.error("Failed to fetch blog:", err)
        alert("Failed to load blog")
        router.push("/blog")
      } finally {
        setLoading(false)
      }
    }

    if (id) fetchBlog()
  }, [id, router])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

 const handleImageUpload = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  setUploading(true);

  try {
    const formData = new FormData();
    formData.append("file", file);

    // Optional metadata
    formData.append(
      "pinataMetadata",
      JSON.stringify({ name: file.name })
    );

    // Optional Pinata options
    formData.append(
      "pinataOptions",
      JSON.stringify({ cidVersion: 1 })
    );

    const res = await axios.post(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      formData,
      {
        maxBodyLength: "Infinity",
        headers: {
          "Content-Type": "multipart/form-data",
          pinata_api_key: process.env.NEXT_PUBLIC_PINATA_API_KEY,
          pinata_secret_api_key: process.env.NEXT_PUBLIC_PINATA_SECRET_API_KEY,
        },
      }
    );

    const ipfsHash = res.data.IpfsHash;
    const ipfsUrl = `https://orange-large-reindeer-667.mypinata.cloud/ipfs/${ipfsHash}`;

    setForm((prev) => ({
      ...prev,
      image: ipfsUrl,
    }));

    console.log("File uploaded to Pinata:", ipfsUrl);
  } catch (err) {
    console.error("Error uploading to Pinata:", err);
    alert("Error uploading image to Pinata");
  } finally {
    setUploading(false);
  }
};
  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)

    try {
      const token = localStorage.getItem("adminToken")
      const response = await fetch(`/api/blogs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      })

      if (response.ok) {
        alert("Blog updated successfully")
        router.push(`/blog/${id}`)
      } else {
        const data = await response.json()
        alert(data.error || "Failed to update blog")
      }
    } catch (error) {
      console.error("Update error:", error)
      alert("Error updating blog")
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <p className="p-4 text-center">Loading blog...</p>

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Edit Blog Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          placeholder="Title"
          required
        />
        <input
          name="excerpt"
          value={form.excerpt}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          placeholder="Excerpt"
        />
        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          placeholder="Category"
        />
        <div className="space-y-2">
          <input
            type="file"
            id="image"
            onChange={handleImageUpload}
            accept="image/*"
            className="w-full px-4 py-2 border rounded"
            disabled={uploading}
          />
          {uploading && (
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <Upload className="h-4 w-4 animate-spin" />
              Uploading image...
            </p>
          )}
          {form.image && (
            <div className="mt-2">
              <img
                src={form.image}
                alt="Preview"
                className="h-32 w-32 object-cover rounded-md"
              />
            </div>
          )}
        </div>
        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          rows={10}
          className="w-full px-4 py-2 border rounded"
          placeholder="Content"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          disabled={saving}
        >
          {saving ? "Saving..." : "Update Blog"}
        </button>
      </form>
    </div>
  )
}
