module.exports.helloWorld = async (event: any) => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'Hello World!',
                input: event,
            },
            null,
            2
        ),
    };
};
