import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { expensesRoute } from './routes/expenses'
import { authRoute } from './routes/auth'

const app = new Hono()

app.use('*', logger())

app.get("/test", (c) => c.json({ "message": "test" }))

const apiRoutes = app.basePath('/api').route('expenses', expensesRoute).route('/', authRoute)

export default app
