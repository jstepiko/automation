const { bugReportForm } = require('./../test-data/selectors');
let x = [bugReportForm.sum, bugReportForm.str, bugReportForm.actual, bugReportForm.expected];
let value = 'test'.repeat(76);
let attach = 'http://prntscr.com/min36w';

module.exports =
    function () {
        return it('PREREQUISITE: New bug report form is filled in', function () {
            for(let i = 0; i < x.length; i++){
                browser.setValue(x[i], value);
            }

            browser.setValue(bugReportForm.attachment, attach);

            browser.click(bugReportForm.assignee);
            browser.waitForVisible(bugReportForm.testUser, 200);
            browser.click(bugReportForm.testUser);

            browser.click(bugReportForm.priority);
            browser.waitForVisible(bugReportForm.low, 200);
            browser.click(bugReportForm.low);

            browser.click(bugReportForm.severity);
            browser.waitForVisible(bugReportForm.minor, 200);
            browser.click(bugReportForm.minor);

            browser.click(bugReportForm.repro);
            browser.waitForVisible(bugReportForm.always, 200);
            browser.click(bugReportForm.always);

            browser.click(bugReportForm.version);
            browser.waitForVisible(bugReportForm.sprint, 200);
            browser.click(bugReportForm.sprint);
        })
    };