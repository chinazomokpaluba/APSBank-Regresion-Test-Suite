function Launch_URL()
{
  Browsers.Item(btEdge).Run("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  let browserWindow = Aliases.browser.BrowserWindow;
  let browser = Aliases.browser;
}

