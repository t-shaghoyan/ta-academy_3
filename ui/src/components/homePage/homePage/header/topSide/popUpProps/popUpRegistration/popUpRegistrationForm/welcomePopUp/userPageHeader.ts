import { Component } from '@Core/component';
import { UserPageHeaderTopSide } from './userPageHeader/userPageHeaderTopSide';

export class UserPageHeader extends Component {
    private LOCATORS = {
        userPageHeaderTopSide: this.page.locator('//div[contains(@class,"topStrip__container")]'),
    };
    public userPageHeaderTopSide = new UserPageHeaderTopSide(
        this.LOCATORS.userPageHeaderTopSide,
        this.page
    );
}
