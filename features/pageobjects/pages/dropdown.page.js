class Dropdownclass{
    get clidrop()
    {
        return $('#country')
    }
    async rdrop()
    {
    
        await this.clidrop.selectByVisibleText('United Kingdom')
        await browser.pause(500)
    }
}
module.exports = new Dropdownclass()