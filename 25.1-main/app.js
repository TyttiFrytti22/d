const express = require('express');
const app = express();
const auth = require('./middleware/auth');

// Подключение middleware для проверки токена
app.use(auth);

// Роуты или другие настройки приложения
// ...

app.listen(3000, () => {
  console.log('Сервер запущен');
});
