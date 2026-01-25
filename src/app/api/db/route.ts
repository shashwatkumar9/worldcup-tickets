import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/lib/db/sqlite'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, table, values, filters, orderBy, limit, single, where, query, params } = body

    const db = getDb()

    // Support raw SQL queries
    if (query) {
      const stmt = db.prepare(query)

      // Determine if query returns data (SELECT) or not (INSERT, UPDATE, DELETE)
      const queryType = query.trim().toUpperCase().split(/\s+/)[0]

      if (queryType === 'SELECT') {
        const results = params ? stmt.all(...params) : stmt.all()
        return NextResponse.json({ results, error: null })
      } else {
        // INSERT, UPDATE, DELETE
        const result = params ? stmt.run(...params) : stmt.run()
        return NextResponse.json({
          results: [{
            changes: result.changes,
            lastInsertRowid: result.lastInsertRowid
          }],
          error: null
        })
      }
    }

    switch (action) {
      case 'select': {
        let query = `SELECT * FROM ${table}`
        let params: any[] = []
        let whereClauses: string[] = []

        // Apply filters
        if (filters) {
          Object.keys(filters).forEach(key => {
            whereClauses.push(`${key} = ?`)
            params.push(filters[key])
          })
        }

        if (whereClauses.length > 0) {
          query += ` WHERE ${whereClauses.join(' AND ')}`
        }

        // Apply ordering
        if (orderBy) {
          const direction = orderBy.ascending === false ? 'DESC' : 'ASC'
          query += ` ORDER BY ${orderBy.column} ${direction}`
        }

        // Apply limit
        if (limit) {
          query += ` LIMIT ${limit}`
        }

        const stmt = db.prepare(query)
        const rows = stmt.all(...params)

        if (single) {
          return NextResponse.json({
            data: rows.length > 0 ? rows[0] : null,
            error: rows.length === 0 ? { message: 'No rows found' } : null
          })
        }

        return NextResponse.json({ data: rows, error: null })
      }

      case 'insert': {
        const keys = Object.keys(values)
        const placeholders = keys.map(() => '?').join(', ')
        const insertQuery = `INSERT INTO ${table} (${keys.join(', ')}) VALUES (${placeholders})`

        const stmt = db.prepare(insertQuery)
        stmt.run(...keys.map(k => values[k]))

        return NextResponse.json({ data: values, error: null })
      }

      case 'update': {
        const keys = Object.keys(values)
        const setClause = keys.map(k => `${k} = ?`).join(', ')
        const whereKey = Object.keys(where)[0]
        const updateQuery = `UPDATE ${table} SET ${setClause}, updated_at = CURRENT_TIMESTAMP WHERE ${whereKey} = ?`

        const stmt = db.prepare(updateQuery)
        stmt.run(...keys.map(k => values[k]), where[whereKey])

        return NextResponse.json({ data: values, error: null })
      }

      case 'delete': {
        const whereKey = Object.keys(where)[0]
        const deleteQuery = `DELETE FROM ${table} WHERE ${whereKey} = ?`

        const stmt = db.prepare(deleteQuery)
        stmt.run(where[whereKey])

        return NextResponse.json({ error: null })
      }

      default:
        return NextResponse.json({ error: { message: 'Invalid action' } }, { status: 400 })
    }
  } catch (error: any) {
    console.error('Database error:', error)
    return NextResponse.json({ error: { message: error.message } }, { status: 500 })
  }
}
