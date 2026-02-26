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
  const regex = /<f-search>(.*?)<\/f-search>/g
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

      headings.push({
        title: tagHeadings,
        path: filePath
      })
    }
  })


  if (headings.length > 0) {
    fs.writeFileSync("search-data.js", 'const searchArr = ' + JSON.stringify(headings), "utf-8") // Запись заголовков в .js файл
    console.log("Saved in file search.js")
  } else {
    console.log("No data")
  }
}

// Вызов основной функции
extractAndSaveHeadings().catch((err) => console.error("Error:", err))
