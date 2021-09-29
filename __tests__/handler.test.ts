test("helloWorld handler returns statusCode 200", async () => {
    const { statusCode } = await require('../src/handler').helloWorld(undefined);
    expect(statusCode).toEqual(200)
})
