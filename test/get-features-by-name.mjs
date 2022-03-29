import {
    createFeatureData, getFeaturesByNames
} from "./requests/feature-definiton-request.mjs"
import {
    assignFeatureRequestPayload,
    axiosOptions, deleteFeatureDefinitionEndpoint,
    getFeatureByEndpoint, postEndpoint, url,
} from "./support/library.mjs"
import {testData} from "./support/config.mjs"
import { expect } from "chai"
import { config } from "dotenv"; config()

describe("Get Features By Name Test", function() {

    describe ("Get Features by Name should return the correct value",  function() {
        this.retries(4)
        let features
        let endPointUrl = url()

        before(async function(){
            //Create 2 new Features
            await assignFeatureRequestPayload(createFeatureData,
                testData.data.getFeaturesByEntityBatch, testData.featureTypeBatch)
            await postEndpoint(endPointUrl + testData.featureDefinitionEndPoint,
                createFeatureData, axiosOptions)
        })

        it("Get Features By name should return status 200", async function () {
            //Get Feature By Checkpoint
            features = await getFeatureByEndpoint(endPointUrl + testData.getFeaturesByName,
                getFeaturesByNames, axiosOptions)
            expect(features.status).to.be.equals(200)
        })

        it("should return the features with the correct value", async function() {
            expect(features.data.features[testData.data.getFeaturesByEntityBatch.featureName]).to.be.
                equals(testData.data.getFeaturesByEntityBatch.defaultValue)
        })

        after (async function(){
            await deleteFeatureDefinitionEndpoint(endPointUrl + testData.featureDefinitionEndPoint
                + "/" + testData.data.getFeaturesByEntityBatch.featureName,
            axiosOptions)
        })
    })
})