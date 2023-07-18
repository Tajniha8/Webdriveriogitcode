class Handleclass{
    get clihandle()
    {
        return $('button[onclick="myFunction()"]')
    }
    get clilenovo()
    {
        return $('input[placeholder="Search"]')
    }
    get cliname()
    {
        return $('#name')
    }
    // get clearname()
    // {
    //     return $('#name')
    // }
    async handle(lenovo,name)
    {
    
        await this.clihandle.click()
        await browser.pause(1000)
        await browser.switchWindow("opencart.com")
        await this.clilenovo.setValue(lenovo)
        await browser.pause(2000)
        await browser.closeWindow();
        await browser.pause(1000)
        await browser.switchWindow("blogspot.com")
        await browser.pause(1000)
        // await browser.clearname.clearValue()
        // await browser.pause(2000)
        await this.cliname.setValue(name)

    }
}
module.exports = new Handleclass()