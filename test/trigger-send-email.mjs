import {
    axiosOptions, triggerSendEmail, url,
} from "./support/library.mjs"
import {testData} from "./support/config.mjs"
import { expect } from "chai"
import { config } from "dotenv"; config()

describe("Get Features By Name Test", function() {

    describe ("Get Features by Name should return the correct value",  function() {
        // this.retries(4)
        let sendEmail
        // let endPointUrl = url()

        it("Trigger to send email should return success msg", async function () {
            //Trigger to send email
            sendEmail = await triggerSendEmail("https://dispute.risk.us.platform.afterpay-beta.com/manual/manually_send_add_card_email",
                axiosOptions)
            expect(sendEmail.data.message).to.be.equals("Send add_card emails successfully.")
        })
    })
})