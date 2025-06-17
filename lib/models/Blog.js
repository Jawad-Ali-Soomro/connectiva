export class Blog {
  constructor(data) {
    this.title = data.title
    this.content = data.content
    this.excerpt = data.excerpt
    this.category = data.category
    this.image = data.image
    this.slug = data.slug || this.generateSlug(data.title)
    this.createdAt = data.createdAt || new Date()
    this.updatedAt = data.updatedAt || new Date()
    this.published = data.published || false
  }

  generateSlug(title) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim("-")
  }

  static validate(data) {
    const errors = []

    if (!data.title || data.title.trim().length === 0) {
      errors.push("Title is required")
    }

    if (!data.content || data.content.trim().length === 0) {
      errors.push("Content is required")
    }

    if (!data.excerpt || data.excerpt.trim().length === 0) {
      errors.push("Excerpt is required")
    }

    if (!data.category || data.category.trim().length === 0) {
      errors.push("Category is required")
    }

    return errors
  }
}
