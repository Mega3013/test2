import { test, expect } from '@playwright/test';

let userData = {};
var isLoggedIn = false;
let counter = 0;


test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole('heading', { name: 'Installation' })
  ).toBeVisible();
});

// Плохой код с множеством проблем для анализа Sonar

// Глобальные переменные без типизации
let userData = {};
var isLoggedIn = false;
let counter = 0;

// Функция с избыточной сложностью, множеством if/else и дублированием кода
function processUserData(user: any, options: any): any {
  // Отсутствие проверок на null/undefined
  let result = {};

  // Избыточная вложенность и сложность
  if (user) {
    if (user.name) {
      result['userName'] = user.name;
      console.log('User name processed: ' + user.name);

      // Дублирование логики
      if (user.name.length > 50) {
        console.log('Warning: username too long');
        result['nameWarning'] = true;
      }
    } else {
      console.log('No user name provided');
      result['userName'] = 'Anonymous';
    }

    if (user.email) {
      // Отсутствие валидации email
      result['userEmail'] = user.email;
      console.log('User email processed: ' + user.email);

      // Магические строки
      if (user.email.indexOf('@') > 0) {
        result['validEmail'] = true;
      } else {
        result['validEmail'] = false;
      }
    } else {
      console.log('No user email provided');
      result['userEmail'] = 'no-email@example.com';
    }

    // Дублирование кода для обработки адреса
    if (user.address) {
      result['userAddress'] = {
        street: user.address.street || '',
        city: user.address.city || '',
        zip: user.address.zip || '',
      };

      // Дублирование проверок
      if (user.address.street && user.address.street.length > 100) {
        console.log('Warning: street name too long');
        result['addressWarning'] = true;
      }

      if (user.address.city && user.address.city.length > 50) {
        console.log('Warning: city name too long');
        result['addressWarning'] = true;
      }
    }
  } else {
    // Дублирование сообщений
    console.log('No user data provided');
    result['userName'] = 'Anonymous';
    result['userEmail'] = 'no-email@example.com';
  }

  // Неиспользуемый параметр
  if (options && options.debug) {
    console.log('Debug mode enabled');
  }

  // Увеличение глобального счетчика (побочный эффект)
  counter++;

  // Отсутствие явного возврата в некоторых путях выполнения
  return result;
}

// Класс с проблемами
class UserManager {
  // Приватные поля без типизации
  private users;
  private db;

  constructor() {
    this.users = [];
    this.db = null;
  }

  // Метод с дублированием кода из функции выше
  processUser(userData: any): boolean {
    if (!userData) {
      console.log('No user data provided');
      return false;
    }

    // Дублирование проверок
    if (userData.name) {
      console.log('User name processed: ' + userData.name);

      if (userData.name.length > 50) {
        console.log('Warning: username too long');
      }
    } else {
      console.log('No user name provided');
    }

    // Дублирование логики обработки email
    if (userData.email) {
      console.log('User email processed: ' + userData.email);

      if (userData.email.indexOf('@') > 0) {
        // Ничего не делаем, просто проверка
      } else {
        return false;
      }
    } else {
      console.log('No user email provided');
      return false;
    }

    // Неиспользуемая переменная
    let isValid = true;

    // Бесполезный код
    try {
      // Пустой блок try
    } catch (error) {
      console.log('Error occurred');
    }

    return true;
  }

  // Метод с проблемами безопасности
  saveUserToDatabase(user: any, password: string): void {
    // Хранение пароля в открытом виде
    user.password = password;

    // SQL-инъекция
    const query = `INSERT INTO users VALUES ('${user.name}', '${user.email}', '${password}')`;

    // Вывод конфиденциальных данных
    console.log('Executing query: ' + query);

    // Использование eval
    eval('this.db.execute(query)');
  }
}

// Неиспользуемая функция
function calculateUserScore(user: any): number {
  return 100;
}

// Дублирование функции с небольшими изменениями
function validateUserData(user: any): boolean {
  if (!user) {
    console.log('No user data provided');
    return false;
  }

  if (!user.name) {
    console.log('No user name provided');
    return false;
  }

  if (!user.email) {
    console.log('No user email provided');
    return false;
  }

  if (user.email.indexOf('@') <= 0) {
    return false;
  }

  return true;
}

// Экспорт без типизации
export default {
  processUserData,
  UserManager,
};
