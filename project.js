import time

# Отображаем инструкцию для пользователя
print('Нажмите клавишу Enter, чтобы начать. После этого нажмите клавишу Enter, чтобы "нажать" на секундомер. Нажмите комбинацию клавиш Ctrl-C для останова секундомера и выхода из программы.')
input()
print('Начали.')
startTime = time.time() # стартовое время первого круга
lastTime = startTime
lapNum = 1

# Начало отслеживание круга
try:
    while True:
        input()
        lapTime = round(time.time() - lastTime, 2)
        totalTime = round(time.time() - startTime, 2)
        print('Круг #%s: %s (%s)' % (lapNum, totalTime, lapTime), end='')
        lapNum += 1
        lastTime = time.time() # сброс времени последнего круга
except KeyboardInterrupt:
    # Обработать исключение Ctrl-C, чтобы не отображалось сообщение об ошибке
    print('\nГотово.')
