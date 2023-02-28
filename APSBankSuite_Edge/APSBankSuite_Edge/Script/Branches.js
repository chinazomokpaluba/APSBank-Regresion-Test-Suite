function Branches()
{
  Browsers.Item(btEdge).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  Aliases.browser.pageApsBankMalta.linkBranches.panel.Click(32, 28);
}