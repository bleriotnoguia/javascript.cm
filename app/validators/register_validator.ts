import vine from '@vinejs/vine'

/**
 * Validates the register action
 */
export const registerValidator = vine.compile(
  vine.object({
    username: vine.string(),
    name: vine.string(),
    email: vine.string().email(),
    password: vine.string().minLength(6),
  })
)
