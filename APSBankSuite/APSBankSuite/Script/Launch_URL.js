function Launch_URL()
{
  //Launch URL test: Test the URL
  Browsers.Item(btChrome).Run("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  let browser = Aliases.browser;
  let browserWindow = browser.BrowserWindow;
  Aliases.browser.BrowserWindow.Click(130, 81);
  Browsers.Item(btChrome).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
}

