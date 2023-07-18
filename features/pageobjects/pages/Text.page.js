class Loginautomation
{
    get aname()
    {
        return $('#name')
    }
    get aemail()
    {
        return $('#email')
    }
    get aphone()
    {
        return $('#phone')
    }
    get atextarea()
    {
        return $('#textarea')
    }

    async automation(name,email,phone,textarea)
    {
        await this.aname.setValue(name)
        await browser.pause(500)
        await this.aemail.setValue(email)
        await browser.pause(500)
        await this.aphone.setValue(phone)
        await browser.pause(500)
        await this.atextarea.setValue(textarea)
        await browser.pause(500)
    }
}
module.exports = new Loginautomation()