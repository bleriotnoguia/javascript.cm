import vine from '@vinejs/vine'

/**
 * Validates the login action
 */
export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(6),
    remember: vine.boolean().optional(),
  })
)
