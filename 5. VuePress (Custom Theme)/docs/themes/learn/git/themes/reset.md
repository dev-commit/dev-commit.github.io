# Отмена изменений файлов

- Варианиы отмены изменений файлов в разных состояниях: `Untracked`, `Modified`, `Staged` и `Commited`

#### 1. Untracked
```bash:no-line-numbers:no-line-numbers
git clean -f
```

#### 2. Modified
```bash:no-line-numbers:no-line-numbers
git restore index.html  # Только для index.html
git restore .           # Все файлы
```

#### 3. Staged
```bash:no-line-numbers:no-line-numbers
git restore --staged .
git reset
```

#### 4. Commited
```bash:no-line-numbers:no-line-numbers
git reset HEAD~1
```
