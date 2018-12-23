const rp = require('request-promise');
const path = require('path');
const shared = require('../../../TEST_FRAMEWORK/shared');

describe('Testing the DEMO api', () => {

    beforeEach(() => {
        jest.setTimeout(shared.MAX_TIMEOUT);
    });

    const test1 = it(shared.SEPERATOR + 'demo_1', async () => {
        const testName = shared.getTestName(test1, shared.SEPERATOR);
        const requestBody = require(path.join(__dirname, testName , 'request.json'));
        const expectedResponse = require(path.join(__dirname, testName, 'response.json'));
        // console.log('expectedResponse= ' + JSON.stringify(expectedResponse));

        const options = {
            method: 'GET',
            uri: 'https://reqres.in/api/users?page=1',
            body: requestBody,
            json: true,
            resolveWithFullResponse: true
        };

        const response = await rp(options);
        expect(response.statusCode).toEqual(200);
        expect(response.headers['content-type']).toContain("application/json");
        expect(response.headers.server).toEqual(expectedResponse.headers.server);
        expect(response.body.data[0].first_name).toEqual(expectedResponse.body.data[0].first_name);
    });

    const test2 = it(shared.SEPERATOR + 'demo_2', async () => {
        const testName = shared.getTestName(test2, shared.SEPERATOR);
        const requestBody = require(path.join(__dirname, testName , 'request.json'));
        const expectedResponse = require(path.join(__dirname, testName, 'response.json'));

        const options = {
            method: 'POST',
            uri: 'https://reqres.in/api/users',
            body: requestBody,
            json: true,
            resolveWithFullResponse: true
        };

        const response = await rp(options);
        // console.log(`response=${JSON.stringify(response)}`);
        expect(response.statusCode).toEqual(201);
        expect(response.headers['content-type']).toContain(expectedResponse.headers['content-type']);
        expect(response.headers.server).toEqual(expectedResponse.headers.server);
        expect(response.body.name).toBeDefined();
        expect(response.body.name).toEqual(expectedResponse.body.name);
        expect(parseInt(response.body.id)).toBeGreaterThan(1);
    });

});

