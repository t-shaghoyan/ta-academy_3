import type { Options } from '@Test';
import { test, expect } from '@Test';

test.describe('UHC-1', () => {
    test('Hover on ‘My Account’ button and click on ‘Log In’ button', async ({
        page,
        baseURL,
    }: Options) => {
        await page.goto(baseURL, { waitUntil: 'domcontentloaded' });
        // step 1 done
        const buttonMyAccount = page.locator('//div[contains(@class,"myAccount__myAccountMenu")]');
        await buttonMyAccount.hover();
        const logInButton = page.locator('//button[text()="Log in"]');
        await logInButton.click();
        const expectedText = 'Access your vision benefits';
        const popUpRegTitle = page.locator(
            '//div/section/h2[contains(@class,"loginPopup__title") and text()="Access your vision benefits"]'
        );
        const text = await popUpRegTitle.textContent();
        expect(text).toStrictEqual(expectedText);
        // step 2 done
        const button = page.locator('//button/span/span[text()="Create UHCGlasses.com Account"]');
        await button.click();
        expect(
            await page
                .locator('//div[contains(@class,"ReactModal__Content ReactModal")]')
                .isVisible()
        ).toBe(true);
        const firstName = 'Ivan';
        const lastName = 'Ivanov';
        const email = `test@test${Math.round(Math.random() * 60)}1${Math.round(
            Math.random() * 60
        )}.com`;
        const password = 'Test1234';
        const inputFirstName = page.locator('//input[contains(@name,"firstName")]');
        const inputLastName = page.locator('//input[contains(@name,"lastName")]');
        const inputEmail = page.locator('//input[contains(@name,"email")]');
        const inputPassword = page.locator('//input[contains(@name,"password")]');
        const subbmitButton = page.locator('//button[contains(@aria-label,"Create new account")]');
        await inputFirstName.type(firstName);
        await inputLastName.type(lastName);
        await inputEmail.type(email);
        await inputPassword.type(password);
        await subbmitButton.click();
        //3.1 done ?????
        await page
            .locator('//div[contains(@class,"rc-dialog welcomePopup")]')
            .waitFor({ state: 'visible', timeout: 10000 });
        expect(await page.locator('//div[contains(@class,"loginPopup__wrap")]').isVisible()).toBe(
            false
        );
        //3.2 done
        await page
            .locator('//div[contains(@class,"rc-dialog welcomePopup")]')
            .waitFor({ state: 'visible', timeout: 10000 });
        expect(await page.locator('//div[contains(@class,"rc-dialog-body")]').isVisible()).toBe(
            true
        );
        // expect(
        //     await page.locator('//div/h2[contains(@class,"welcomePopup__title")]').textContent()
        // ).toStrictEqual(`Welcome, ${firstName}`);
        //3.3
        await page.locator('//div[contains(@class,"rc-dialog-mask")]').waitFor();
        expect(
            await page.locator('//h2[contains(@class,"welcomePopup__title")]').textContent()
        ).toStrictEqual('Welcome, Ivan');

        await page
            .locator('//div[contains(@class,"rc-dialog welcomePopup")]')
            .waitFor({ state: 'visible', timeout: 10000 });
        // 3.4
        expect(
            await page
                .locator('//p[text()="You can start enjoying everything we have to offer"]')
                .textContent()
        ).toStrictEqual('You can start enjoying everything we have to offer');
        await page
            .locator('//div[contains(@class,"rc-dialog welcomePopup")]')
            .waitFor({ state: 'visible', timeout: 10000 });
        //4 done
        const closePopUp = page.locator('//button[@aria-label="Close"]');
        await closePopUp.click();
        //4.1 done
        expect(
            await page.locator('//div[contains(@class,"rc-dialog welcomePopup")]').isVisible()
        ).toBe(false);
        //4.2 done
        expect(
            await page.locator('//div[contains(@class,"myAccount__title")]').textContent()
        ).toStrictEqual('Hello, Ivan');
        //4.3 done
        expect(
            await page.locator('//div[contains(@class,"eligibilityWidget__shadow")]').isVisible()
        ).toBe(true);
        expect(await page.locator('//p[text()="Hi "and "Ivan"]').textContent()).toStrictEqual(
            'Hi Ivan'
        );
        //5.1
        const buttonMyAccount1 = page.locator('//div[contains(@class,"myAccount__myAccountMenu")]');
        await buttonMyAccount1.hover();
        const buttonSignOut = page.locator('//button[text()="Sign out"]');
        await buttonSignOut.click();
        //5.2
        expect(
            await page
                .locator('//section[contains(@class,"eligibilityWidget__widget")]')
                .isVisible()
        ).toBe(false);
    });
});
