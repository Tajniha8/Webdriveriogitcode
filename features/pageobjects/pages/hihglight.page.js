class Highlights{
    get clihigh()
    {
        const elementToHighlight = $('h1[class="title"]');

    }
    async handlehighlight()
    {
        await this.clihigh.highlightElement(elementToHighlight)       
    }
}
module.exports = new Highlights()