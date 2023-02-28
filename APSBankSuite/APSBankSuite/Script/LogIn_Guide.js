function LogIn_Guide()
{
  Browsers.Item(btChrome).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  NameMapping.Sys.browser.pageApsBankMalta.panelRenderWrapper.panelPagehost.panelPanelusernameotp.Click(243, 102);
  Aliases.browser.pageApsBankMalta.panelStep12.Click(1120, 351);
}
