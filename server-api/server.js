import { app } from './app/app.js'

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Port listening on ${port}`))