import React from 'react';

function ChatCompletion(params) {
    return (
        <html>
            <head>
                <title>{params.title}</title>
                <link rel="styleSheet" href="https://unpkg.com/mvp.css" />
            </head>
            <body>
                <main>
                    <ul>
                        <form id="nickname">
                            <input type="text" placeholder="Choose the nickname"/>
                            <button>Save</button>
                        </form>
                    </ul>
                    <ul>
                        <form id="message">
                            <input type="text" placeholder="write down the message"/>
                            <button>Send</button>
                        </form>
                    </ul>
                </main>
            </body>
            <script src="public/ts/app.js" />
        </html>
    );
}

export default ChatCompletion;