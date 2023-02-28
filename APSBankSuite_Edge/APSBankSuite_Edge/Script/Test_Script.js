function Lounch_URL()
{
  //Lounch: APSBank URL on Microsoft Edge Browser
  Browsers.Item(btEdge).Run("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  let browserWindow = Aliases.browser.BrowserWindow;
  let browser = Aliases.browser;
}

function Carousel_Navigation()
{
  Browsers.Item(btEdge).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  let page = Aliases.browser.pageApsBankMalta;
  page.button3.ClickButton();
  page.button2.ClickButton();
  page.button1.ClickButton();
}

function Sign_Up()
{
  Browsers.Item(btEdge).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  let page = Aliases.browser.pageApsBankMalta;
  page.buttonSignUp.ClickButton();
  page.panel.Click(9, 10);
  let panel = page.panelSignUp;
  panel.buttonNext.ClickButton();
  panel.buttonClose.ClickButton();
}

function Mobile_App_Download()
{
  Browsers.Item(btEdge).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  let browser = Aliases.browser;
  let page = browser.pageApsBankMalta;
  page.buttonSignUp.ClickButton();
  page.panelSignUp.linkDetailsIdEuNewfrontierIbanki.panel.ClickR(71, 16);
  let browserWindow = browser.wndChrome_WidgetWin_1;
  browserWindow.Minimize();
  browserWindow.Click(157, 83);
  browserWindow.Minimize();
}

function Need_Help()
{
  Browsers.Item(btEdge).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  let browser = Aliases.browser;
  let page = browser.pageApsBankMalta;
  page.buttonSignUp.ClickButton();
  let link = page.linkNeedHelp;
  link.ClickR(44, 9);
  link.ClickR(35, 12);
  browser.wndChrome_WidgetWin_1.Minimize();
}

function  Log_In()
{
  Browsers.Item(btEdge).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  let page = Aliases.browser.pageApsBankMalta;
  page.buttonLogIn.ClickButton();
  page.buttonOk.ClickButton();
}

function UsernameandMobileApp()
{
  Browsers.Item(btEdge).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  let page = Aliases.browser.pageApsBankMalta;
  page.radiobuttonLoginradio2.ClickButton();
  page.textbox2.Click(21, 26);
  page.passwordbox.Click(41, 26);
}

function UsernameandPhysucalToken()
{
  Browsers.Item(btEdge).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  let page = Aliases.browser.pageApsBankMalta;
  page.radiobuttonLoginradio.ClickButton();
  page.textbox.Click(48, 25);
}

function Login_Guide()
{
  Browsers.Item(btEdge).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  NameMapping.Sys.browser.pageApsBankMalta.panelRenderWrapper.panelPagehost.panelAnytimeAnywhere.panelAnytimeAnywhere.panelZone2.panelLogInUsing.panelWidget.panelLogInUsing.panelLogInUsing.panelLogInUsing.panelLogInUsing.panelPanelusernameotp.Click(241, 101);
  Aliases.browser.pageApsBankMalta.panelStep1.Click(1090, 262);
}

function Demo()
{
  Browsers.Item(btEdge).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  Aliases.browser.pageApsBankMalta.linkDemo.panel.Click(8, 34);
}

function Help_()
{
  Browsers.Item(btEdge).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  Aliases.browser.pageApsBankMalta.linkHelp.textnodeHelp.Click(20, 5);
}

function Branches()
{
  Browsers.Item(btEdge).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  Aliases.browser.pageApsBankMalta.linkBranches.panel.Click(32, 28);
}

function Contact()
{
  Browsers.Item(btEdge).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  Aliases.browser.pageApsBankMalta.linkContact.textnodeContact.Click(29, 2);
}

function TermsCondition()
{
  Browsers.Item(btEdge).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  Aliases.browser.pageApsBankMalta.linkTermsConditions.Click();
}

function Copyright_2018()
{
  Browsers.Item(btEdge).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  Aliases.browser.pageApsBankMalta.linkCopyright2018ApsBankPlc.Click();
}