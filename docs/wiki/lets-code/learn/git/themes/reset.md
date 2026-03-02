# Отмена изменений файлов

- Варианиы отмены изменений файлов в разных состояниях: `Untracked`, `Modified`, `Staged` и `Commited`

#### 1. Untracked

```bash
git clean -f
```

#### 2. Modified

```bash
git restore index.html  # Только для index.html
git restore .           # Все файлы
```

#### 3. Staged

```bash
git restore --staged .
git reset
```

#### 4. Commited

```bash
git reset HEAD~1
```
