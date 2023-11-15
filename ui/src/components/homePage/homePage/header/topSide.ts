import { Component } from '@Core/component';
import { PopUpProps } from './topSide/popUpProps';

export class TopSide extends Component {
    private LOCATORS = {
        myAccount: this.page.locator('//div[contains(@class,"myAccount__myAccountMenu")]'),
        popUpProps: this.page.locator(
            '//div[contains(@class,"topStripMenuDropdown__topStripMenuDropdown___3a5HE myAccount__activeClass")]'
        ),
    };
    public popUpProps = new PopUpProps(this.LOCATORS.popUpProps, this.page);
    public async hover(): Promise<void> {
        await this.LOCATORS.myAccount.hover();
    }
}
