import { Component } from '@Core/component';
import { UserPageHeader } from './welcomePopUp/userPageHeader';
import { UserPagePopUp } from './welcomePopUp/userPagePopUp';
// //div[contains(@class,"rc-dialog-content")]
// //div[contains(@class,"welcomePopup__content")]
export class WelcomePopUp extends Component {
    private LOCATORS = {
        welcomePopUp1: this.page.locator('//div[contains(@class,"welcomePopup__wrapper")]'),
        welcomePopUp2: this.page.locator('//div[contains(@class,"rc-dialog-mask")]'),
        welcomePopUp: this.page.locator('//div[contains(@class,"rc-dialog-content")]'),
        // welcomePopUp: this.page.locator('//div[contains(@class,"welcomePopup__content")]'),
        userPageHeader: this.page.locator('//div[contains(@class,"topStrip__wrap")]'),
        userPagePopUp: this.page.locator('//div[contains(@class,"eligibilityWidget__shadow")]'),
        popUpRegistrationForm: this.page.locator(
            '//div[contains(@class,"ReactModal__Content ReactModal")]'
        ),
        title: this.page.locator('//h2[contains(@class,"welcomePopup__title")]'),
        subtitle: this.page.locator(
            '//p[text()="You can start enjoying everything we have to offer"]'
        ),
        closeButton: this.page.locator('//button[contains(@class,"rc-dialog-close")]'),
    };
    public userPageHeader = new UserPageHeader(this.LOCATORS.userPageHeader, this.page);
    public userPagePopUp = new UserPagePopUp(this.LOCATORS.userPagePopUp, this.page);
    public async isClosed(): Promise<boolean> {
        return await this.LOCATORS.popUpRegistrationForm.isHidden();
    }
    public async isVisible(): Promise<boolean> {
        return await this.LOCATORS.welcomePopUp.isVisible();
    }
    public async getTitle(): Promise<string | null> {
        return await this.LOCATORS.title.textContent();
    }
    public async getSubTitle(): Promise<string | null> {
        return await this.LOCATORS.subtitle.textContent();
    }
    public async clickOnCloseButton(): Promise<void> {
        await this.LOCATORS.closeButton.click();
    }
    public async wait(): Promise<void> {
        await this.LOCATORS.welcomePopUp2.waitFor();
    }
}
