import { Component } from '@Core/component';
import { WelcomePopUp } from './popUpRegistrationForm/welcomePopUp';

export class PopUpRegistrationForm extends Component {
    private LOCATORS = {
        welcomePopUp: this.page.locator('//div[contains(@class,"rc-dialog welcomePopup")]'),
        submitButton: this.page.locator('//button[contains(@aria-label,"Create new account")]'),
        popUpRegistrationForm: this.page.locator(
            '//div[contains(@class,"ReactModal__Content ReactModal")]'
        ),
        title: this.page.locator('//h2[contains(@class,"loginPopup__title")]'),
        subtitle: this.page.locator(
            '//p[contains(@class,"loginPopup__text") and text()="Create an account and enjoy exclusive benefits"]'
        ),
        inputs: {
            firstName: this.page.locator('//input[contains(@name,"firstName")]'),
            lastName: this.page.locator('//input[contains(@name,"lastName")]'),
            email: this.page.locator('//input[contains(@name,"email")]'),
            password: this.page.locator('//input[contains(@name,"password")]'),
        },
    };
    public welcomePopUp = new WelcomePopUp(this.LOCATORS.welcomePopUp, this.page);
    public async clickOnCreateAccountButton(): Promise<void> {
        await this.LOCATORS.submitButton.click();
    }
    public async isVisible(): Promise<boolean> {
        return await this.LOCATORS.popUpRegistrationForm.isVisible();
    }
    public async getTitle(): Promise<string | null> {
        return await this.LOCATORS.title.textContent();
    }
    public async getSubTitle(): Promise<string | null> {
        return await this.LOCATORS.subtitle.textContent();
    }
    public async fillForm(
        firstname: string,
        lastname: string,
        email: string,
        pass: string
    ): Promise<void> {
        await this.LOCATORS.inputs.firstName.type(firstname);
        await this.LOCATORS.inputs.lastName.type(lastname);
        await this.LOCATORS.inputs.email.type(email);
        await this.LOCATORS.inputs.password.type(pass);
    }
    public async fillFormAuto(): Promise<void> {
        const firstName = 'Ivan';
        const lastName = 'Ivanov';
        const email = `test@test${Math.round(Math.random() * 60)}1${Math.round(
            Math.random() * 60
        )}.com`;
        const password = 'Test1234';
        // this.fillForm(firstName, lastName, email, password);
        await this.LOCATORS.inputs.firstName.type(firstName);
        await this.LOCATORS.inputs.lastName.type(lastName);
        await this.LOCATORS.inputs.email.type(email);
        await this.LOCATORS.inputs.password.type(password);
    }
}
