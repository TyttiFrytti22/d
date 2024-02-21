const Lesson = require('../models/lesson');

exports.getLessonById = (req, res) => {
  // Проверка роли пользователя
  if (req.user.role !== 'moderator') {
    return res.status(403).json({ message: 'Недостаточно прав' });
  }

  // Поиск урока по ID
  Lesson.findById(req.params.lessonId)
    .then((lesson) => {
      if (!lesson) {
        return res.status(404).json({ message: 'Урок не найден' });
      }

      res.status(200).json(lesson);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Ошибка сервера' });
    });
};
