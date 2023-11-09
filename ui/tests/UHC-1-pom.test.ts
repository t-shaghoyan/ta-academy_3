import { expect, test } from '@Test';
import { CategoryUri } from '@Components/categoryPage/categoryPage';
import { timeout } from '@Utils/timeout';
//<h2 class="welcomePopup__title">"Welcome, " "Alex"</h2>

test.describe('UHC-1-pom', () => {
    test('Hover on ‘My Account’ button and click on ‘Log In’ button', async ({
        page,
        homePage,
    }) => {
        await test.step('step 1: Open home page, hover on My Account and Click Sign in button', async () => {
            await homePage.open();
            await homePage.Header.TopSide.hover();
            expect(await homePage.Header.TopSide.popUpProps.isVisible()).toBe(true);
            await homePage.Header.TopSide.popUpProps.clickOnLogInButton();
        });
        await test.step('step 2: Click on Create button', async () => {
            expect(await homePage.Header.TopSide.popUpProps.popUpRegistration.isVisible()).toBe(
                true
            );
            const expectedTitle = 'Access your vision benefits';
            expect(
                await homePage.Header.TopSide.popUpProps.popUpRegistration.getTitle()
            ).toStrictEqual(expectedTitle);
            await homePage.Header.TopSide.popUpProps.popUpRegistration.clickOnCreateAccountButton();
        });
        await test.step('step 3: Fill Form and click Create Account', async () => {
            // expect(await homePage.Header.TopSide.popUpProps.popUpRegistration.isVisible()).toBe(
            //     false
            // );
            expect(
                await homePage.Header.TopSide.popUpProps.popUpRegistration.popUpRegistrationForm.isVisible()
            ).toBe(true);
            const expectedText = 'No vision insurance? We got you!';
            const expectedSubText =
                'Create an account and enjoy exclusive benefitsfor Unitedhealthcare members';
            expect(
                await homePage.Header.TopSide.popUpProps.popUpRegistration.popUpRegistrationForm.getTitle()
            ).toStrictEqual(expectedText);
            expect(
                await homePage.Header.TopSide.popUpProps.popUpRegistration.popUpRegistrationForm.getSubTitle()
            ).toStrictEqual(expectedSubText);
            await homePage.Header.TopSide.popUpProps.popUpRegistration.popUpRegistrationForm.fillFormAuto();
            await homePage.Header.TopSide.popUpProps.popUpRegistration.popUpRegistrationForm.clickOnCreateAccountButton();
            await homePage.Header.TopSide.popUpProps.popUpRegistration.popUpRegistrationForm.welcomePopUp.wait();
            expect(
                await homePage.Header.TopSide.popUpProps.popUpRegistration.popUpRegistrationForm.welcomePopUp.isVisible()
            ).toBe(true);
            expect(
                await homePage.Header.TopSide.popUpProps.popUpRegistration.popUpRegistrationForm.welcomePopUp.getSubTitle()
            ).toStrictEqual('You can start enjoying everything we have to offer');
            // expect(
            //     await homePage.Header.TopSide.popUpProps.popUpRegistration.popUpRegistrationForm.welcomePopUp.getTitle()
            // ).toStrictEqual('Welcome,Ivan');
        });
        await test.step('step 4: Click on close button', async () => {
            await homePage.Header.TopSide.popUpProps.popUpRegistration.popUpRegistrationForm.welcomePopUp.clickOnCloseButton();
            expect(
                await homePage.Header.TopSide.popUpProps.popUpRegistration.popUpRegistrationForm.welcomePopUp.isClosed()
            ).toBe(true);
            expect(
                await homePage.Header.TopSide.popUpProps.popUpRegistration.popUpRegistrationForm.welcomePopUp.userPageHeader.userPageHeaderTopSide.getTitle()
            ).toStrictEqual('Hello, Ivan');
            expect(
                await homePage.Header.TopSide.popUpProps.popUpRegistration.popUpRegistrationForm.welcomePopUp.userPagePopUp.getTitle()
            ).toStrictEqual('Hi Ivan');
        });
        await test.step('step 5: Hover on My Account and click Sign Out', async () => {
            await homePage.Header.TopSide.popUpProps.popUpRegistration.popUpRegistrationForm.welcomePopUp.userPageHeader.userPageHeaderTopSide.hover();
            expect(
                await homePage.Header.TopSide.popUpProps.popUpRegistration.popUpRegistrationForm.welcomePopUp.userPageHeader.userPageHeaderTopSide.userPagePopUpProps.isVisible()
            ).toBe(true);
            await homePage.Header.TopSide.popUpProps.popUpRegistration.popUpRegistrationForm.welcomePopUp.userPageHeader.userPageHeaderTopSide.userPagePopUpProps.clickOnSignOutButton();
            expect(
                await homePage.Header.TopSide.popUpProps.popUpRegistration.popUpRegistrationForm.welcomePopUp.userPagePopUp.isVisible()
            ).toBe(false);
        });
        /*
        await test.step('Test-step 1-5 | Step description', async () => {
            await homePage.open();
            await homePage.Header.TopSide.hover();
            expect(await homePage.Header.TopSide.popUpProps.isVisible()).toBe(true);
            await homePage.Header.TopSide.popUpProps.clickOnLogInButton();
            expect(await homePage.Header.TopSide.popUpProps.popUpRegistration.isVisible()).toBe(
                true
            );
            const expectedTitle = 'Access your vision benefits';
            expect(
                await homePage.Header.TopSide.popUpProps.popUpRegistration.getTitle()
            ).toStrictEqual(expectedTitle);
            await homePage.Header.TopSide.popUpProps.popUpRegistration.clickOnCreateAccountButton();
            expect(
                await homePage.Header.TopSide.popUpProps.popUpRegistration.popUpRegistrationForm.isVisible()
            );
            const expectedText = 'No vision insurance? We got you!';
            const expectedSubText =
                'Create an account and enjoy exclusive benefitsfor Unitedhealthcare members';
            expect(
                await homePage.Header.TopSide.popUpProps.popUpRegistration.popUpRegistrationForm.getTitle()
            ).toStrictEqual(expectedText);
            expect(
                await homePage.Header.TopSide.popUpProps.popUpRegistration.popUpRegistrationForm.getSubTitle()
            ).toStrictEqual(expectedSubText);
            await homePage.Header.TopSide.popUpProps.popUpRegistration.popUpRegistrationForm.fillFormAuto();
            await homePage.Header.TopSide.popUpProps.popUpRegistration.popUpRegistrationForm.clickOnCreateAccountButton();
            await homePage.Header.TopSide.popUpProps.popUpRegistration.popUpRegistrationForm.welcomePopUp.wait();
            expect(
                await homePage.Header.TopSide.popUpProps.popUpRegistration.popUpRegistrationForm.welcomePopUp.isVisible()
            ).toBe(true);
            // waitfor???
            await homePage.Header.TopSide.popUpProps.popUpRegistration.popUpRegistrationForm.welcomePopUp.wait();
            expect(
                await homePage.Header.TopSide.popUpProps.popUpRegistration.popUpRegistrationForm.welcomePopUp.getSubTitle()
            ).toStrictEqual('You can start enjoying everything we have to offer');
            // expect(
            //     await homePage.Header.TopSide.popUpProps.popUpRegistration.popUpRegistrationForm.welcomePopUp.getTitle()
            // ).toStrictEqual('Welcome,Ivan');
            await homePage.Header.TopSide.popUpProps.popUpRegistration.popUpRegistrationForm.welcomePopUp.clickOnCloseButton();
            expect(
                await homePage.Header.TopSide.popUpProps.popUpRegistration.popUpRegistrationForm.welcomePopUp.isClosed()
            ).toBe(true);
            expect(
                await homePage.Header.TopSide.popUpProps.popUpRegistration.popUpRegistrationForm.welcomePopUp.userPagePopUp.getTitle()
            ).toStrictEqual('Hi Ivan');
            expect(
                await homePage.Header.TopSide.popUpProps.popUpRegistration.popUpRegistrationForm.welcomePopUp.userPagePopUp.isVisible()
            ).toBe(true);
            // expect(
            //     await homePage.Header.TopSide.popUpProps.popUpRegistration.popUpRegistrationForm.welcomePopUp.userPagePopUp.getTitle()
            // ).toStrictEqual('Hi Ivan');
            await homePage.Header.TopSide.popUpProps.popUpRegistration.popUpRegistrationForm.welcomePopUp.userPageHeader.userPageHeaderTopSide.hover();
            expect(
                await homePage.Header.TopSide.popUpProps.popUpRegistration.popUpRegistrationForm.welcomePopUp.userPageHeader.userPageHeaderTopSide.userPagePopUpProps.isVisible()
            ).toBe(true);
            await homePage.Header.TopSide.popUpProps.popUpRegistration.popUpRegistrationForm.welcomePopUp.userPageHeader.userPageHeaderTopSide.userPagePopUpProps.clickOnSignOutButton();
            expect(
                await homePage.Header.TopSide.popUpProps.popUpRegistration.popUpRegistrationForm.welcomePopUp.userPagePopUp.isVisible()
            ).toBe(false);
        });
        */
    });
});
