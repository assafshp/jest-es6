module.exports = {

    MAX_TIMEOUT: 10000,
    SEPERATOR: "::",
    getTestName: function (test, seperator) {
        const fullTestName = test.getFullName();
        // console.log(`fullTestName= ${fullTestName}`);
        const testName = fullTestName.substr(fullTestName.indexOf(seperator) + 2);
        console.log(`testName = ${testName}`);
        return testName;
    }

};