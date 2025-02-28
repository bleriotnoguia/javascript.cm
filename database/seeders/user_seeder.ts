import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'

export default class UserSeeder extends BaseSeeder {
  async run() {
    // Create a test user
    await User.create({
      username: 'testuser',
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123',
      isAdmin: true,
      isSponsor: false,
    })

    // You can add more test users if needed
    await User.create({
      username: 'regularuser',
      name: 'Regular User',
      email: 'regular@example.com',
      password: 'password123',
      isAdmin: false,
      isSponsor: false,
    })

    console.log('✅ Users seeded successfully')
  }
}
