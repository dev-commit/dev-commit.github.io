# v-tree

Компонент для отображения структуры директорий (дерево папок и файлов).

### Пример

```vue
<v-tree
  :tree="[
    {
      type: 'folder',
      name: 'Root Folder',
      children: [
        {
          type: 'folder',
          name: 'Child Folder 1',
          children: [{ type: 'file', name: 'File.js' }],
        },
        {
          type: 'folder',
          name: 'Child Folder 2',
          children: [
            {
              type: 'folder',
              name: 'Sub Child Folder',
              children: [
                { type: 'comment', text: 'Комментарий' },
                { type: 'file', name: 'File.tsx' },
              ],
            },
          ],
        },
      ],
    },
  ]"
/>
```

<v-tree :tree="[
  {
    type: 'folder',
    name: 'Root Folder',
    children: [
      {
        type: 'folder',
        name: 'Child Folder 1',
        children: [{ type: 'file', name: 'File.js' }]
      },
      {
        type: 'folder',
        name: 'Child Folder 2',
        children: [
          {
            type: 'folder',
            name: 'Sub Child Folder',
            children: [
              { type: 'comment', text: 'Комментарий' },
              { type: 'file', name: 'File.tsx' }
            ]
          }
        ]
      }
    ]
  }
]" />

### Типы узлов

| type      | Описание      | Поля                |
| --------- | ------------- | ------------------- |
| `folder`  | Папка 📂      | `name`, `children?` |
| `file`    | Файл ›        | `name`              |
| `comment` | Комментарий # | `text`              |
