const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (connError, connection) => {
    if (connError) {
        throw connError;
    }
    // Step 2: Create Channel
    connection.createChannel((channelError, channel) => {
        if (channelError) {
            throw channelError;
        }
        // Step 3: Assert Queue
        const QUEUE = 'from rajeev'
        channel.assertQueue(QUEUE);
        // Step 4: Receive Messages
        setInterval(() => {
            channel.consume(QUEUE, (msg) => {
                console.log(`Message received: ${msg.content.toString()}`)
        }, 2000);
        }, {
            noAck: true 
        })
    })
})