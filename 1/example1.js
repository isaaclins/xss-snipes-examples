document.addEventListener('DOMContentLoaded', function() {
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

    // Create a blob with the provided HTML content and create a URL for it
    var blob = new Blob([htmlContent], { type: 'text/html' });
    var url = URL.createObjectURL(blob);

    // Create an iframe and set its source to the provided HTML content
    var iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    document.body.appendChild(iframe);
});
