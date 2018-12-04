const rp = require('request-promise');

const MAX_TIMEOUT = 5000;
const X_IBM_CLIENT_SECRET = 'acc64d6c-813f-4ea7-9069-5d789f30f40d';
const X_IBM_CLIENT_ID = 'W7hU5qU7eJ6yI1gI0eV6vW8gU1tG2pE5aD2uR1uC4hA5dJ2mB6';


describe('car_policy_api', () => {

    //const Testing_CAR-POLICY_api' - api library

    beforeEach(() => {
        jest.setTimeout(MAX_TIMEOUT);
    });

    it('offer', async () => {
        const options = {
            method: 'POST',
            uri: 'https://apigw-test.harel-office.com/api/test-external/car-policy/v1.0/Offer',
            json: true,
            resolveWithFullResponse: true,
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json',
                'harel-security-ticket': 'REPLACE_THIS_VALUE',
                'harel-info-request-timestamp': 'REPLACE_THIS_VALUE',
                'harel-info-app-type': 'REPLACE_THIS_VALUE',
                'harel-info-transaction-id': 'REPLACE_THIS_VALUE',
                'harel-info-client-name': 'REPLACE_THIS_VALUE',
                'x-ibm-client-secret': X_IBM_CLIENT_SECRET,
                'x-ibm-client-id': X_IBM_CLIENT_ID
            },
            body: {
                UserCode: 'TESTAPI',
                ActionCode: 'CALC',
                AgentNumber: '008972',
                StartDate: '04102018',
                EndDate: '31072019',
                CollectiveNumber: 0,
                InsuranceType: 1,
                AllowedDriver: 0,
                CarOwnership: 1,
                BodyInjury: 0,
                LicenseRevocation: 1,
                Claim1: 0,
                Claim2: 0,
                Claim3: 0,
                InsuranceType1: 1,
                InsuranceType2: 1,
                InsuranceType3: 1,
                LackClaimApproval: 1,
                BirthDate1: '01011961',
                BirthDate2: '01011961',
                BirthDate3: '01011961',
                YoungDriverLicenseDateIssued: '1997',
                YoungDriverBirthDate: '01011981',
                YoungDriverGender: 1,
                YoungDriverSeniority: 1,
                LicenseNumber: '12345678',
                ModelCode: 590120,
                CarModelYear: 2001,
                ID: '307422535',
                ZipCode: '1234567',
                AreaCode: '050',
                PhoneNumber: 1234567,
                DeductionDiscount: 0,
                OtherDiscount: 0,
                Discount11020: 0,
                Discount11021: 0,
                Discount11025: 0,
                Discount11009: 57.13184339,
                Towing: 1,
                CarWindshield: 1,
                NewForOld: 1,
                CancelDeduction: 0,
                Strike: 0,
                Earthquake: 0,
                PolicyHolderDepreciation: 0,
                SaturdayDriving: 0,
                Coverage10000: 0,
                Distance: '0',
                TotalLost: 0,
                Coverage1: '50',
                Coverage2: '62'
            }
        };

        const response = await rp(options);
        // console.log(`response=${JSON.stringify(response)}`);
        expect(response.statusCode).toEqual(200);
        expect(response.headers['content-type']).toContain("application/json");
        // expect(data).toBeDefined()
        // expect(response.headers.server).toEqual("cloudflare");
        // expect(response.body.data[0].first_name).toEqual("George");
    });


    it ('offer_with_car_1', async()=>{
        const expectedResult = 'test_offer_with_car1'; //libr
        
    })

});

