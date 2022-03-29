export const testData =
    {
        "data": {
                "limitCheck": {
                        "featureName": "fp_test_feature_by_limit_check",
                        "categories": "CONSUMER",
                        "subCat1": null,
                        "numOfFeatures": 1,
                        "defaultValue": -26,
                        "valueType": "INTEGER",
                        "checkPoint": ["LIMIT_CHECK"],
                        "requestCheckPoint": "LIMIT_CHECK",
                        "updatedDefaultValue": 18012022,
                },
                "getFeaturesByCheckpointBatch":{
                        "featureName": "fp_test_consumer_get_feature_by_checkpoint_batch",
                        "defaultValue": 5,
                        "valueType": "INTEGER",
                        "categories": "CONSUMER",
                        "subCat1": null,
                        "checkPoint": ["ALLOWED_LIST"],
                        "requestCheckPoint": "ALLOWED_LIST",
                        "entityId": "fp_test_consumer_checkpoint_batch_entity_id",
                        "putFeatures": { "fp_test_consumer_get_feature_by_checkpoint_batch" : 10},
                        "updatedValue": 10,
                        "numResult": 3,
                        "invalidCheckPoint": "NotValid"
                },
                "inputFeature": {
                        "featureName": "fp_test_input_feature_2_plus_2",
                        "featureNameBatch": "fp_test_input_feature_batch_2_plus_2",
                        "requestCheckPoint": "ALLOWED_LIST",
                        "calculatedFormulaValue": 4
                },
                "derivedFeature": {
                        "featureName": "fp_test_derived_feature_5_plus_5",
                        "featureNameBatch": "fp_test_derived_feature_batch_5_plus_5",
                        "featureNameInternal": "fp_test_derived_internal_5_plus_5",
                        "requestCheckPoint": "ALLOWED_LIST",
                        "calculatedFormulaValue": 10
                },
                "getFeaturesByEntityBatch": {
                        "featureName": "fp_test_get_feature_by_entity_batch",
                        "defaultValue": null,
                        "valueType": "STRING",
                        "categories": "CONSUMER",
                        "subCat1": null,
                        "checkPoint": ["BARCODE_REDEMPTION"],
                        "requestCheckPoint": "BARCODE_REDEMPTION",
                        "entityId": "fp_test_entity_batch_entity_id",
                        "putFeatures": { "fp_test_get_feature_by_entity_batch" : "fp_test_value_entity_batch"},
                },
                "uploadFeatures": {
                        "featureName": "c_outstanding_order_cnt",
                        "entityId": "upload_feature_entity_id",
                        "uploadFeature": { "numberOutstandingOrders" : 3},
                        "resetUploadFeature": { "numberOutstandingOrders" : 0},
                        "updatedValueUpload": 3,
                        "requestCheckPoint": "BARCODE_REDEMPTION",
                },
                "addressLinking": {
                        "featureName": "fp_test_address_linking",
                        "numOfFeatures": 50,
                        "defaultValue": null,
                        "updatedValue": "fp_test_value",
                        "updatedValueBatch": "fp_test_value_update_2",
                        "valueType": "STRING",
                        "categories": "ADDRESS",
                        "subCat1": "RAW_BILLING_ADDRESS",
                        "checkPoint": ["CHECKOUT_CONFIRM"],
                        "requestCheckPoint": "CHECKOUT_CONFIRM",
                        "entityId": "fp_test_address_linking_id",
                        "entityIdNull": "rawBillingAddressEntityID",
                        "putFeatures": { "fp_test_address_linking" : "fp_test_value"},
                        "putFeatures2": { "fp_test_address_linking" : "fp_test_value_update_2"},
                },
                "paymentMethod": {
                        "featureName": "fp_test_payment_method_cat",
                        "categories": "PAYMENT_METHOD",
                        "subCat1": null,
                        "valueType": "INTEGER",
                        "numOfFeatures": 50,
                        "defaultValue": -5,
                        "checkPoint": ["ONLINE_CHECKOUT_LOGIN"]
                },
                "getFeatureByEntity": {
                        "featuresByEntityWithValue": "bp_c_fst_successful_pymt_card_brand",
                        "featuresByEntityDefaultValue": "bp_c_fst_successful_pymt_card_type",
                        "unknownFeatureByEntity": "raw_billing_address_id",
                        "featureByEntityValue": "newcard",
                        "endpoint": "/v1/get_features_by_entity",
                        "validEntity": "consumer",
                        "invalidEntity": "raw_billing_address_id"
                },
                "multipleFeatures": {
                        "featureName1": "fp_test_multiple_feature_1",
                        "featureName2": "fp_test_multiple_feature_2",
                        "requestCheckPoint": "LOGIN",
                        "checkPoint": ["LOGIN"],
                        "defaultValue": 0
                },
                "getUserDefinedFeatures":{
                        deviceIdType : "2"
                },
                "errorMessage": "",
                "numFeatures": 2,
                "numCheckpoints": 20,
                "categories": 18,
                "sub_categories_1": 30,
                "sub_categories_2": 25,
                "feature_types": 6,
                "value_types": 10,
                "ping_message": "pong"
        },
        "stgUrl": "https://feature-platform-staging.herokuapp.com",
        "qaUrl":  "https://feature-platform-qa.risk.us.platform.afterpay-beta.com",
        "timeout": 1000,
        "localUrl": "http://localhost:5000",
        "consumerCategory": "CONSUMER",
        "internalCategory": "INTERNAL",
        "featureTypeBatch": "BATCH",
        "featureTypeStreaming": "STREAMING",
        "featureTypeRealTime": "REAL_TIME",
        "featureDefinitionEndPoint": "/v1/feature_definitions",
        "featureDefinitionCheckpointEndPoint": "/v1/feature_definitions/checkpoint",
        "featureBatchDefinitions": "/v1/feature_definitions/batch",
        "putFeatureEndPoint": "/v1/put_features",
        "putFeaturesBatchEndPoint": "/v1/put_features_batch",
        "uploadFeatures": "/v1/upload_features",
        "getFeatureByCheckpoint": "/v1/get_features_by_checkpoint",
        "getFeatureByCheckpointBatch": "/v1/get_features_by_checkpoint_batch",
        "getFeatureByEntityBatch": "/v1/get_features_by_entity_batch",
        "getFeaturesByName": "/v1/get_features_by_name",
        "triggerSendEmail": "/manual/manually_send_add_card_email",
        "getUserDefinedFeatures": "/v1/get_user_defined_features"
    }