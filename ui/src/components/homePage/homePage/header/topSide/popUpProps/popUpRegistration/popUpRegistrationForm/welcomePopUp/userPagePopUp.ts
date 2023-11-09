import { Component } from '@Core/component';

export class UserPagePopUp extends Component {
    private LOCATORS = {
        userPagePopUp: this.page.locator('//div[contains(@class,"eligibilityWidget__shadow")]'),
        userPagePopUp1: this.page.locator(
            '//section[contains(@class,"eligibilityWidget__widget")]'
        ),
        title: this.page.locator('//p[text()="Hi "and "Ivan"]'),
    };
    public async isVisible(): Promise<boolean> {
        // return await this.LOCATORS.userPagePopUp.isVisible();
        return await this.LOCATORS.userPagePopUp1.isVisible();
    }
    public async getTitle(): Promise<string | null> {
        return await this.LOCATORS.title.textContent();
    }
}
