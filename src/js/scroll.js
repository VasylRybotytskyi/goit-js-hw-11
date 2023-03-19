SmoothScroll({
  // Час скролу 400 = 0.4 сек
  animationTime: 800,
  // Розмір кроку в пікселях
  stepSize: 75,

  // Додаткові налаштування:

  // Прискорення
  accelerationDelta: 30,
  // Максимальне прискорення
  accelerationMax: 2,

  // Підтримка клавіатури
  keyboardSupport: true,
  // Крок скролу стрілками на клавіатурі в пікселях
  arrowScroll: 50,

  // Pulse (less tweakable)
  // ratio of "tail" to "acceleration"
  pulseAlgorithm: true,
  pulseScale: 4,
  pulseNormalize: 1,

  // Підтримка тачпаду
  touchpadSupport: true,
});
