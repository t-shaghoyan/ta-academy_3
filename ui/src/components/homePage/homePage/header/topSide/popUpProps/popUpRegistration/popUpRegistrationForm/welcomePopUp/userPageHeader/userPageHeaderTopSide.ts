import { Component } from '@Core/component';
import { UserPagePopUpProps } from './userPageHEaderTopSide/userPagePopUpProps';

export class UserPageHeaderTopSide extends Component {
    private LOCATORS = {
        userPageHeaderTopSide: this.page.locator('//div[contains(@class,"topStrip__container")]'),
        myAccount: this.page.locator('//div[contains(@class,"myAccount__myAccountMenu")]'),
        popUpProps: this.page.locator('//div[./ul[contains(@class,"myAccount__logged")]]'),
        title: this.page.locator('//div[contains(@class,"myAccount__title")]'),
    };
    public userPagePopUpProps = new UserPagePopUpProps(this.LOCATORS.popUpProps, this.page);
    public async hover(): Promise<void> {
        await this.LOCATORS.myAccount.hover();
    }
    public async getTitle(): Promise<string | null> {
        return await this.LOCATORS.title.textContent();
    }
}
