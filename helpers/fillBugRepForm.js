const gSel = require('./../test-data/selectors');
const formSel = gSel.bugReportForm;
let x = [formSel.summary, formSel.str, formSel.actual, formSel.expected];
let value = 'test'.repeat(76);
module.exports =
    function () {
        return it('PREREQUISITE: New bug report form is filled in', function () {
            for(let i = 0; i < x.length; i++){
                browser.setValue(x[i], value);
            }

            browser.click(formSel.assignee);
            browser.waitForVisible(formSel.testUser, 200);
            browser.click(formSel.testUser);

            browser.click(formSel.priority);
            browser.waitForVisible(formSel.low, 200);
            browser.click(formSel.low);

            browser.click(formSel.severity);
            browser.waitForVisible(formSel.minor, 200);
            browser.click(formSel.minor);

            browser.click(formSel.repro);
            browser.waitForVisible(formSel.always, 200);
            browser.click(formSel.always);

            browser.click(formSel.version);
            browser.waitForVisible(formSel.sprint, 200);
            browser.click(formSel.sprint);
        })
    };