import fs from "fs"
import glob from "glob"

const FOLDER = "@themes"

const checkFile = (file) => {
  const cut = file
    .replace('@themes/', '')
    .replace('.html', '')
  
  const arr = cut.split('/')
  const result = arr[0]+"#"+cut

  // const urlLocal = 'http://127.0.0.1:1001/pages/'
  // const urlGithub = 'https://dev-commit.github.io/pages/'
  const urlLocal = '/pages/'

  return urlLocal+result
}

const getHtml = (data) => {
  const styles = `
    a {
      text-decoration: none;
      color: gray;
      display: block;
      margin-bottom: 4px;
      font-family: sans-serif;
      border-bottom: 1px solid gray;
      padding: 5px;
      max-width: 50%;
    }
  `
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Search</title>
      <meta charset="UTF-8">
      <style>${styles}</style>
    </head>
    <body>
      ${data}
    </body>
    </html>
  `

  return html;
}

//----------------------------------------------

// Функция для поиска всех .html файлов в директории src и поддиректориях
function findHtmlFiles(dir) {
  return new Promise((resolve, reject) => {
    glob(`${dir}/**/*.html`, (err, files) => {
      if (err) reject(err)
      resolve(files)
    })
  })
}

// Функция для извлечения текста между тегами <h1></h1>
function extractTagsContent(htmlContent) {
  const regex = /<search>(.*?)<\/search>/g
  const matches = []
  let match
  while ((match = regex.exec(htmlContent)) !== null) {
    matches.push(match[1]) // Захватываем только содержимое между тегами
  }
  return matches
}


// Главная функция для поиска заголовков и записи их в .html файл
async function extractAndSaveHeadings() {
  const htmlFiles = await findHtmlFiles(FOLDER) // Поиск всех .html файлов
  let headings = []

  htmlFiles.forEach((file) => {
    const content = fs.readFileSync(file, "utf-8") // Чтение файла
    const tagHeadings = extractTagsContent(content) // Извлечение заголовков

    if (tagHeadings.length !== 0) {
      const filePath = checkFile(file)
      const html = `<a href="${filePath}">${tagHeadings}</a>`
      headings = headings.concat(html) // Добавление заголовков в общий массив
    }
  })

  if (headings.length > 0) {
    const html = getHtml(headings.join("\n"))
    fs.writeFileSync("search.html", html, "utf-8") // Запись заголовков в .html файл
    console.log("Saved in file search.html")
  } else {
    console.log("No data")
  }
}

// Вызов основной функции
extractAndSaveHeadings().catch((err) => console.error("Error:", err))
