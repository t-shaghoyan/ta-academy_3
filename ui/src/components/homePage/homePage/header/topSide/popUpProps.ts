import { Component } from '@Core/component';
import { PopUpRegistration } from './popUpProps/popUpRegistration';

export class PopUpProps extends Component {
    private LOCATORS = {
        popUpPropsModal: this.page.locator(
            '//div[contains(@class,"topStripMenuDropdown__topStripMenuDropdown___3a5HE myAccount__activeClass")]'
        ),
        logInButton: this.page.locator('//button[text()="Log in"]'),
        popUpRegistration: this.page.locator('//div[contains(@role,"dialog")]'),
    };
    public popUpRegistration = new PopUpRegistration(this.LOCATORS.popUpRegistration, this.page);
    public async clickOnLogInButton(): Promise<void> {
        await this.LOCATORS.logInButton.click();
    }
    public async isVisible(): Promise<boolean> {
        return await this.LOCATORS.popUpPropsModal.isVisible();
    }
    // public async getTitle(): Promise<string> {
    //     return await this.LOCATORS.title.textContent();
    // }
}
