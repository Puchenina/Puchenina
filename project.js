function generatePermutations(arr) {
    // Проверка, является ли arr массивом
    if (!Array.isArray(arr)) {
      console.log('Входной параметр должен быть массивом');
      return;
    }
    
    // Функция, которая меняет местами два элемента массива
    function swap(a, b) {
      const temp = arr[a];
      arr[a] = arr[b];
      arr[b] = temp;
    }
  
    // Рекурсивная функция для генерации перестановок
    function generate(n) {
      if (n === 1) {
        console.log(arr);
        return;
      }
      for (let i = 0; i < n; i++) {
        generate(n - 1);
        if (n % 2 === 0) {
          swap(i, n - 1);
        } else {
          swap(0, n - 1);
        }
      }
    }
  
    generate(arr.length);
  }
  
  // Пример использования функции
  const array = [1, 2, 3];
  generatePermutations(array);