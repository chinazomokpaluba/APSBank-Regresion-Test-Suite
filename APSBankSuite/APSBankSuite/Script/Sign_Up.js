﻿function Sign_Up()
{
  Browsers.Item(btChrome).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  let page = Aliases.browser.pageApsBankMalta;
  page.panelAnytimeAnywhere2.panelAnytimeAnywhere.panel1.panel.Click(671, 302);
  page.buttonSignUp2.ClickButton();
  let panel = page.panelSignUp;
  panel.panel.Click(5, 8);
  panel.buttonNext.ClickButton();
  panel.buttonClose.ClickButton();
}