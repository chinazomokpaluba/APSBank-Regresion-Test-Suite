function Launch_URL()
{
  //Launch URL test: Test the URL
  Browsers.Item(btChrome).Run("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  let browser = Aliases.browser;
  let browserWindow = browser.BrowserWindow;
  Aliases.browser.BrowserWindow.Click(130, 81);
  Browsers.Item(btChrome).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
}

function Carousel_Navigation()
{
  Browsers.Item(btChrome).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  let panel = Aliases.browser.pageApsBankMalta.panelAnytimeAnywhere2;
  panel.button3.ClickButton();
  panel.button2.ClickButton();
  panel.button1.ClickButton();
}

function Sign_Up()
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


function Mobile_App_Download()
{
  Browsers.Item(btChrome).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  let page = Aliases.browser.pageApsBankMalta;
  page.buttonSignUp2.ClickButton();
  let panel = page.panelSignUp;
  panel.linkDetailsIdEuNewfrontierIbanki.panel.ClickR(49, 15);
  panel.linkId1454207441.panel.ClickR(58, 23);
  panel.buttonClose.ClickButton();
}

function Need_Help()
{
  Browsers.Item(btChrome).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  let page = Aliases.browser.pageApsBankMalta;
  page.buttonSignUp2.ClickButton();
  page.panelSignUp.linkNeedHelp.Click();
}

function LogIn()
{
  Browsers.Item(btChrome).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  let page = Aliases.browser.pageApsBankMalta;
  page.textbox3.Click(39, 26);
  page.passwordbox2.Click(46, 30);
  page.buttonLogIn3.ClickButton();
  page.panelSignUp.buttonOk.ClickButton();
}

function UsernameandMobileApp()
{
  Browsers.Item(btChrome).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  Aliases.browser.pageApsBankMalta.radiobuttonLoginradio3.ClickButton();
}


function UsernameandPhysicalToken()
{
  Browsers.Item(btChrome).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  Aliases.browser.pageApsBankMalta.radiobuttonLoginradio4.ClickButton();
}

function LogIn_Guide()
{
  Browsers.Item(btChrome).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  NameMapping.Sys.browser.pageApsBankMalta.panelRenderWrapper.panelPagehost.panelPanelusernameotp.Click(243, 102);
  Aliases.browser.pageApsBankMalta.panelStep12.Click(1120, 351);
}

function Demo()
{
  Browsers.Item(btChrome).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  Aliases.browser.pageApsBankMalta.linkDemo.panel.Click(26, 37);
}

function Help_()
{
  Browsers.Item(btChrome).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  Aliases.browser.pageApsBankMalta.linkHelp.panel.Click(28, 36);
}

function Branches()
{
  Browsers.Item(btChrome).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  Aliases.browser.pageApsBankMalta.linkBranches.panel.Click(33, 29);
}

function Contact()
{
  Browsers.Item(btChrome).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  Aliases.browser.pageApsBankMalta.linkContact.panel.Click(22, 19);
}

function Terms_and_Conditions()
{
  Browsers.Item(btChrome).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  Aliases.browser.pageApsBankMalta.linkTermsConditions.Click();
}

function Copyright_2018()
{
  Browsers.Item(btChrome).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  Aliases.browser.pageApsBankMalta.panelFooterLogin.linkCopyright2018ApsBankPlc2.Click();
}