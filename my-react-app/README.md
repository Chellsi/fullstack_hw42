# React Data Fetcher App

Цей проєкт демонструє використання React, TypeScript, axios для асинхронного отримання даних з API, а також стилізацію через Tailwind CSS.

## Основні можливості
- Асинхронне отримання даних з API через axios
- Обробка станів: завантаження, помилка, успішне отримання
- Сучасна адаптивна стилізація через Tailwind CSS
- TypeScript типізація компонентів

## Швидкий старт

### 1. Встановлення залежностей
```bash
npm install
```

### 2. Запуск у режимі розробки
```bash
npm run dev
```

### 3. Відкрийте у браузері
```
http://localhost:5173
```

## DataFetcher компонент
Компонент `DataFetcher` знаходиться у `src/components/DataFetcher.tsx`.
- При монтуванні виконує запит до `https://jsonplaceholder.typicode.com/posts`
- Відображає список постів, або повідомлення про помилку/завантаження

### Як використати у додатку
```tsx
import DataFetcher from './components/DataFetcher';

function App() {
  return (
    <div>
      <DataFetcher />
    </div>
  );
}
```

## Налаштування Tailwind CSS
Якщо потрібно перевстановити Tailwind:
1. Встановіть залежності:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```
2. Вкажіть шляхи у `tailwind.config.js`:
   ```js
   content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
   ],
   ```
3. Додайте у `src/index.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

## Основні команди
- `npm run dev` — запуск у режимі розробки
- `npm run build` — зібрати production-білд
- `npm run preview` — перегляд production-білду

---
