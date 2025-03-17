import React from 'react';

function DefaultLayout(params) {
    return (
        <html>
            <head>
                <title>{params.title}</title>
                <link rel="styleSheet" href="https://unpkg.com/mvp.css" />
            </head>
            <body>
            </body>
            <script src="/public/js/app.js" />
        </html>
    );
}

export default DefaultLayout