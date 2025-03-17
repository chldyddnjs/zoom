import React from 'react';
import ChatCompletion from './layouts/chatLayout';

function HelloMessage(params) {
    return (
        <ChatCompletion title={params.title} />
    )
}
// module.exports = HelloMessage;
export default HelloMessage