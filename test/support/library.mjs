import axios from "axios";
import {expect} from "chai";
import { config } from "dotenv";
import {testData} from "./config.mjs";
config()

export const axiosOptions = {
    headers: {
        "Accept": "application/json",
        "content-type": "application/json"
        // ,"source_service": "feature_editor_ui"
    },
    auth: {
        username: "apt",    // process.env.HTTP_USER,
        password: "dispute" //process.env.HTTP_PASSWORD
    }
}

export function url (){
    if (process.env.ENVIRONMENT === "stg"){
        return testData.stgUrl
    }else if(process.env.ENVIRONMENT === "qa") {
        return testData.qaUrlDisputer
    }else if(process.env.ENVIRONMENT === 'local'){
        return testData.localUrl
    }else{
        console.log("Please set the environment variable. E.g export ENVIRONMENT='stg' or export ENVIRONMENT='qa'")
    }
}

export async function  postEndpoint(endPointUrl, newFeaturePayload, axiosOptions, printError = true) {
    try{
        let result = await axios.post(endPointUrl, newFeaturePayload, axiosOptions)
        return result
    }catch(err){
        if (printError === true) console.log(err)
        return err
    }
}

export async function  UpdateFeatureDefinitionEndpoint(endPointUrl, updateFeaturePayload, axiosOptions) {
    try{
        let updateFeatureResult = await axios.put(endPointUrl, updateFeaturePayload, axiosOptions)
        return updateFeatureResult
    }catch(err){
        return err
    }
}

export async function getFeatureDefinitionEndpoint(endPointUrl, axiosOptions) {
    try{
        let featureDefinition = await axios.get(endPointUrl, axiosOptions)
        return featureDefinition
    }catch(err){
        return err
    }
}

// add
export async function triggerSendEmail(endPointUrl, axiosOptions) {
    try{
        let sendEmail = await axios.get(endPointUrl, axiosOptions)
        return sendEmail
    }catch(err){
        console.log("err: " + err);
        return err
    }
}

export async function putFeature(endPointUrl, putFeaturePayload, axiosOptions){
    try{
        let putFeatureResult = await axios.post(endPointUrl, putFeaturePayload, axiosOptions)
        expect(putFeatureResult.status).to.be.equals(200)
    }catch(err){
        console.log(err)
        throw err
    }
}

export async function assignPutFeatureTestData(putFeaturePayload, entityId, putFeatures){
    putFeaturePayload.entity_id = entityId
    putFeaturePayload.features = putFeatures
}

export async function deleteFeatureDefinitionEndpoint(deleteEndPointUrl, axiosOptions) {
    try{
        let deleteFeature = await axios.delete(deleteEndPointUrl, axiosOptions)
        expect(deleteFeature.status).to.be.equals(200)
    }catch(err){
        console.log(err)
        throw err
    }
}

export async function assignFeatureRequestPayload(createFeatureData, testData, featureType){
    createFeatureData.feature_definition.name = testData.featureName
    createFeatureData.feature_definition.value_type = testData.valueType
    createFeatureData.feature_definition.default_value = testData.defaultValue
    createFeatureData.feature_definition.category = testData.categories
    createFeatureData.feature_definition.sub_category_1 = testData.subCat1
    createFeatureData.feature_definition.checkpoints = testData.checkPoint
    createFeatureData.feature_definition.feature_type = featureType
}

export async function assignGetFeatureRequestPayload(payload, requestCheckpoint, entityId){
    payload.checkpoint = requestCheckpoint
    payload.keys.raw_billing_address_id = entityId
    payload.keys.raw_profile_address_id = entityId
    payload.keys.raw_shipping_address_id = entityId
    payload.keys.normalized_shipping_address_id = entityId
    payload.keys.normalized_billing_address_id = entityId
    payload.keys.normalized_profile_address_id = entityId
}
export async function getFeatureByEndpoint(endPointUrl, featureRequest, axiosOptions ){
    try{
        return await axios.post(endPointUrl, featureRequest, axiosOptions)
    }catch(error){
        return error
    }
}

export async function putFeatureDefinition(endPointUrl, featureRequest, axiosOptions ){
    try{
        return await axios.put(endPointUrl, featureRequest, axiosOptions)
    }catch(error){
        console.log(error)
        throw error
    }
}