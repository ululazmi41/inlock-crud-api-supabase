import { createClient } from '@supabase/supabase-js'
import { Post } from './enum/Post'

const TABLE = 'posts'
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

class Database {
  async get() {
    const { data, error } = await supabase.from(TABLE).select()
    return { data, error }
  }
  
  async post(post: Post) {
    const { error } = await supabase.from(TABLE).insert(post)
    return error
  }
  
  async put(id: number, post: Post) {
    const { error } = await supabase.from(TABLE).update(post).eq('id', id)
    return error
  }

  async delete(id: number) {
    const { error } = await supabase.from(TABLE).delete().eq('id', id)
    return error
  }
}

const database = new Database()
export { database }