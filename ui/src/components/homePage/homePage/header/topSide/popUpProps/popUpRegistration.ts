import { Component } from '@Core/component';
import { PopUpRegistrationForm } from './popUpRegistration/popUpRegistrationForm';

export class PopUpRegistration extends Component {
    private LOCATORS = {
        createAccountButton: this.page.locator(
            '//button/span/span[text()="Create UHCGlasses.com Account"]'
        ),
        popUpRegistrationForm: this.page.locator(
            '//div[contains(@class,"ReactModal__Content ReactModal")]'
        ),
        title: this.page.locator(
            '//div/section/h2[contains(@class,"loginPopup__title") and text()="Access your vision benefits"]'
        ),
        popUpRegistration: this.page.locator('//div[contains(@role,"dialog")]'),
    };
    public popUpRegistrationForm = new PopUpRegistrationForm(
        this.LOCATORS.popUpRegistrationForm,
        this.page
    );
    public async clickOnCreateAccountButton(): Promise<void> {
        await this.LOCATORS.createAccountButton.click();
    }
    public async isVisible(): Promise<boolean> {
        return await this.LOCATORS.popUpRegistration.isVisible();
    }
    public async getTitle(): Promise<string | null> {
        const title = await this.LOCATORS.title.textContent();
        return title;
    }
}
