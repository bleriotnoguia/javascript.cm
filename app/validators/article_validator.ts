import vine from '@vinejs/vine'

export const articleValidator = vine.compile(
  vine.object({
    title: vine.string().minLength(10).maxLength(255),
    content: vine.string().minLength(100),
    excerpt: vine.string().minLength(50).maxLength(160),
    tags: vine.array(vine.string()),
    isPublished: vine.boolean().optional(),
  })
)
