const marked=require('marked');//convert the markdown to the html
const sanitizeHtml=require('sanitize-html');//sanitize the html
const TurndownService = require('turndown');//convert html to markdown

//script tags nikal jaayega
function sanitizeMarkdownContent(markdownContent){
    const turndownService = new TurndownService()
    //1.convert markdown to html
    const convertedHtml=marked.parse(markdownContent);
    //2.sanitizr Html
    const sanitizedHtml=sanitizeHtml(convertedHtml,{
        allowedTages:sanitizeHtml.defaults.allowedTags
    })
    //3.convert sanitized html to the sanitized markdown
    const santitizedMarkdowm = turndownService.turndown(sanitizedHtml);

    return santitizedMarkdowm;
}

module.exports=sanitizeMarkdownContent;

