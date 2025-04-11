import { test as baseTest, BrowserContext } from '@playwright/test';

export const test = baseTest.extend<{
  context: BrowserContext;
}>({
  context: async ({ browser }, use) => {
    const context = await browser.newContext({
      userAgent:
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      extraHTTPHeaders: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Upgrade-Insecure-Requests': '1',
      },
    });
    await use(context);
    await context.close();
  },

  page: async ({ context }, use) => {
    const page = await context.newPage();
    await page.goto('');
    await page.waitForTimeout(1000);

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

    await use(page);

    // ❌ Этого больше нет:
    // await page.close();
  },
});

export { expect } from '@playwright/test';
