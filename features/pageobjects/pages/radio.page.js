class Radiobuttonclass{
    get cliradio()
    {
        return $('#male')
    }
    get clicheck()
    {
        return $('#sunday')
    }
    get cliteusday()
    {
        return $('#tuesday')
    }

    async radiocheck()
    {
        await this.cliradio.click()
        await browser.pause(2000)
        await this.clicheck.click()
        await this.clicheck.isEnabled()
        await this.clicheck.isSelected()
        await this.clicheck.isDisplayed()
        await browser.pause(1000)
        await this.cliteusday.click()
    }
}
module.exports =new Radiobuttonclass()