const amqp = require('amqplib/callback_api');



// Step 1: Create Connection
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
        const QUEUE = ': from rajeev'
        channel.assertQueue(QUEUE);
        // Step 4: Send message to queue


        channel.sendToQueue(QUEUE, Buffer.from("hello this is rajeev kumar maurya"));
        console.log(`Message send ${QUEUE}`);
        setInterval(() => {
            channel.sendToQueue(QUEUE, Buffer.from("hello this is rajeev kumar maurya"));
            console.log(`Message send ${QUEUE}`);
        }, 5000);

    })
})


