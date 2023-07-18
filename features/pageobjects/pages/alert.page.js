class Alertclass
{
    get alertmessage()
    {
        return $('button[onclick="myFunctionAlert()"]')
    }
    async alertmethod()
    {
       await this.alertmessage.click()
       const alert_text =await browser.getAlertText()
       console.log(alert_text)
       await browser.pause(1000)
       await browser.acceptAlert()
       await browser.pause(1000)
    }
}
module.exports =new Alertclass()