const rp = require('request-promise');
var path = require('path');

// import * as requestBody from 'test_create_user/request.json';
// var someObject = require('./somefile.json')



const MAX_TIMEOUT = 10000;

describe('Testing the USERS api', () => {

    beforeEach(() => {
        jest.setTimeout(MAX_TIMEOUT);
    });

    xit('test_get_users', async () => {
        
        const options = {
            method: 'GET',
            uri: 'https://reqres.in/api/users?page=1',
            json: true,
            resolveWithFullResponse: true
        };

        const response = await rp(options);
        // console.log(`response=${JSON.stringify(response)}`);
        expect(response.statusCode).toEqual(200);
        expect(response.headers['content-type']).toContain("application/json");
        expect(response.headers.server).toEqual("cloudflare");
        expect(response.body.data[0].first_name).toEqual("George");
    });

    // it('test_create_user', async () => {
    //     const requestBody = JSON.parse(fs.readFileSync('file', 'utf8'));
        
    //     const options = {
    //         method: 'POST',
    //         uri: 'https://reqres.in/api/users',
    //         body: {
    //             name: 'morpheus',
    //             job: 'leader'
    //         },
    //         json: true,
    //         resolveWithFullResponse: true
    //     };

    //     const response = await rp(options);
    //     // console.log(`response=${JSON.stringify(response)}`);
    //     expect(response.statusCode).toEqual(201);
    //     expect(response.headers['content-type']).toContain("application/json");
    //     expect(response.headers.server).toEqual("cloudflare");
    //     expect(response.body.name).toBeDefined();
    //     expect(response.body.name).toEqual("morpheus");
    //     expect(parseInt(response.body.id)).toBeGreaterThan(1);
    // });

    it(testName = 'test_create_user', async () => {
        console.log(`testName=${testName}`);
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
        expect(response.headers.server).toEqual("cloudflare");
        expect(response.body.name).toBeDefined();
        expect(response.body.name).toEqual(expectedResponse.body.name);
        expect(parseInt(response.body.id)).toBeGreaterThan(1);
    });

    

});

