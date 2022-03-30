import {
    axiosOptions, triggerSendEmail,url
} from "./support/library.mjs"
import {testData} from "./support/config.mjs"
import { expect } from "chai"
import { config } from "dotenv"; config()

describe("Trigger to send email Test", function() {

    describe ("Get Features by Name should return the correct value",  function() {
        // this.retries(4)
        let sendEmail
        let endPointUrl = url()

        it("Trigger to send email should return success msg", async function () {
            //Trigger to send email
            console.log("endPointUrl: " + endPointUrl + ", testData.triggerSendEmail" + testData.triggerSendEmail);
            sendEmail = await triggerSendEmail(endPointUrl + testData.triggerSendEmail,
                axiosOptions)
            // expect(sendEmail.status).to.be.equals(200)
            console.log("sendEmail:" + sendEmail.status);
            console.log("sendEmail.data.message: " + sendEmail.data.message);
            // expect(sendEmail.data.message).to.be.equals("Send add_card emails successfully.")
        })
    })
})