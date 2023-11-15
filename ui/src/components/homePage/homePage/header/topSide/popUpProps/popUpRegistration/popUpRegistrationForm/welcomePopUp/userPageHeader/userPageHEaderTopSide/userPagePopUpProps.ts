import { Component } from '@Core/component';

export class UserPagePopUpProps extends Component {
    private LOCATORS = {
        popUpProps: this.page.locator('//div[./ul[contains(@class,"myAccount__logged")]]'),
        signOutButton: this.page.locator('//button[text()="Sign out"]'),
    };
    public async isVisible(): Promise<boolean> {
        return await this.LOCATORS.popUpProps.isVisible();
    }
    public async clickOnSignOutButton(): Promise<void> {
        await this.LOCATORS.signOutButton.click();
    }
}
