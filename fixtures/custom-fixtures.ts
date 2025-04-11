// fixtures/custom-fixtures.ts
import { test as baseTest } from '@playwright/test';

export const test = baseTest.extend({
  page: async ({ page }, use) => {
    await page.goto('');
    await page.waitForTimeout(1000);

    // Ждем, если баннер появляется
    const closeBtn = page.locator('button[data-dismiss="modal"]', {
      hasText: 'Shop now!',
    });
    if (
      await closeBtn
        .first()
        .isVisible({ timeout: 3000 })
        .catch(() => false)
    ) {
      await closeBtn.first().click();
    }

    // Передаем управление дальше
    await use(page);
  },
});

export { expect } from '@playwright/test';
