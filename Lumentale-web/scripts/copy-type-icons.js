import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const sourceDir = path.resolve(__dirname, '../../types/types')
const targetDir = path.resolve(__dirname, '../public/images/types')

if (!fs.existsSync(sourceDir)) {
  console.warn('copy-type-icons: source missing, skipped:', sourceDir)
  process.exit(0)
}

fs.mkdirSync(targetDir, { recursive: true })

const files = fs.readdirSync(sourceDir).filter((name) => name.endsWith('.png'))
for (const name of files) {
  fs.copyFileSync(path.join(sourceDir, name), path.join(targetDir, name))
}

console.log(`Copied ${files.length} type icons to public/images/types/`)
