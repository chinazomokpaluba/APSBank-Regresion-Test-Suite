function LogIn()
{
  Browsers.Item(btChrome).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  let page = Aliases.browser.pageApsBankMalta;
  page.textbox3.Click(39, 26);
  page.passwordbox2.Click(46, 30);
  page.buttonLogIn3.ClickButton();
  page.panelSignUp.buttonOk.ClickButton();
}