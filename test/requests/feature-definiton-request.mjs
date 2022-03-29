export let inputFeatureData =
{
    "feature_definition": {
        "name": "{feature_name}",
        "value_type": "INTEGER",
        "default_value": null,
        "category": "CONSUMER",
        "sub_category_1": null,
        "sub_category_2": null,
        "checkpoints": [
            "ALLOWED_LIST"
        ],
        "formula": "2+2",
        "is_formula_complex": false,
        "feature_type": "INPUT",
        "source": null,
        "created_by": "fp_test@mailinator.com",
        "is_global": false
    }
}

export let derivedFeatureData =
{
    "feature_definition": {
        "name": "{feature_name}",
        "value_type": "INTEGER",
        "default_value": null,
        "category": "{{category}}",
        "sub_category_1": null,
        "sub_category_2": null,
        "checkpoints": [
            "ALLOWED_LIST"
        ],
        "formula": "result=5+5",
        "is_formula_complex": true,
        "feature_type": "DERIVED",
        "source": null,
        "created_by": "fp_test@mailinator.com",
        "is_global": false
    }
}

export let createFeatureData =
{
    "feature_definition": {
        "name": "{feature_name}",
        "value_type": "{value_type}",
        "default_value": "{default_value}",
        "category": "{{category}}",
        "sub_category_1": "{sub_category_1}",
        "sub_category_2": null,
        "checkpoints": "[{checkpoints}]",
        "formula": null,
        "is_formula_complex": null,
        "feature_type": "{feature_type}",
        "source": null,
        "created_by": "ff_test@mailinator.com",
        "is_global": false
    }
}

export let updateFeatureDefinitionPayload =
    {
        "name": "{feature_name}",
        "default_value": "{default_value}",
    }

export let putFeatureDefinitionPayload =
{
    "name": "{feature_name}",
    "default_value": "18012022",
}

export const getFeatureByCheckpoint =
{
    "checkpoint": "{checkpoints}",
    "keys": {
    },
    "source_request": {
        "consumer": {
            "address": {
                "mobile": "foo"
            }
        }
    }
}

export const getFeatureByCheckpointBatch =
    {
        "checkpoint": "{checkpoints}",
        "batch_keys": [
            {"consumer_uuid": "fp_test_consumer_checkpoint_batch_entity_id"},
            {"consumer_uuid": "unknown_entity_id"},
            {}
        ],
        "source_request": {
            "session": {
                "foo": "bar"
            }
        },
        "should_fetch_vendor_features_map": {
            "consumer": false,
            "merchant": true,
            "device": true,
            "raw_billing_address": true
        }
    }

export const getFeatureDefinitionsName =
{
    "features": [
       "fp_test_address_linking"
    ]
}

export const getFeatureByEntity =
{
    "entity": "{entity}",
    "keys": {
        'consumer_uuid': "fp_test_by_entity_123"
    }
}

export const uploadGetFeatureByEntityPayload =
    {
        "entity": "consumer",
        "keys": {
            "consumer_uuid": "upload_feature_entity_id"
        }
    }

export const getFeatureByEntityBatch =
[
    {
        "entity": "consumer",
        "keys": {
            "consumer_uuid": "fp_test_by_entity_123"
        }
    },
    {
        "entity": "consumer",
        "keys": {
            "consumer_uuid": "fp_test_entity_batch_entity_id"
        }
    }
]

export const getFeaturesByNames =
{
    "features":
        [
        "fp_test_address_linking",
        "fp_test_get_feature_by_entity_batch",
        "c_outstanding_order_cnt"
        ],
    "keys": {},
    "source_request": {}
}

export const getUserDefinedFeatures =
{
    "features": [
        {
            "entity": "device_id_blocklist",
            "entity_id": "000001f88468448288154417bdb8ff45",
            "feature": "device_id_type"
        }
    ]
}


export const putFeaturePayload =
{
    "entity_id": "{entityId}",
    "features": { 'feature_name': 'value' }
}

export const uploadFeaturePayload =
{
     "entity_id": "{entityId}",
     "features": {'feature_name': 'value' }
}

export const putFeaturesBatchPayload =
[
   {
       "entity_id": "{entityId}",
       "features": { 'feature_name': 'value' }
   },
   {
       "entity_id": "fp_test_get_feature_by_entity_batch_id",
       "features": { "fp_test_get_feature_by_entity_batch": "value_entity_batch" }
   }
]

export const getFeatureByCheckpointAddressLinking =
{
    "checkpoint": "{checkpoints}",
    "keys": {
        "raw_shipping_address_id": "{raw_shipping_address_id}",
        "raw_billing_address_id": "{raw_billing_address_id}",
        "raw_profile_address_id": "{raw_profile_address_id}",
        "normalized_shipping_address_id": "{normalized_shipping_address_id}",
        "normalized_billing_address_id": "{normalized_billing_address_id}",
        "normalized_profile_address_id": "{normalized_profile_address_id}"
    },
    "source_request": {}
}

export const postFeatureBatchDefinition =
{
    "feature_definitions":
    [{
        "name": "{feature_name1}",
        "value_type": "FLOAT",
        "default_value": 0.0,
        "category": "PAYMENT_METHOD",
        "sub_category_1": "CARD_ADD_HISTORY",
        "sub_category_2": null,
        "formula": null,
        "feature_type": "BATCH",
        "is_global": false,
        "created_by": "test@afterpay.com",
        "checkpoints": "{checkpoints}"},
    {
        "name": "{feature_name2}",
        "value_type": "FLOAT",
        "default_value": 0.0,
        "category": "PAYMENT_METHOD",
        "sub_category_1": "CARD_ADD_HISTORY",
        "sub_category_2": null,
        "formula": null,
        "feature_type": "BATCH",
        "is_global": false,
        "created_by": "ff_test@mailinator.com",
        "checkpoints": "{checkpoints}"
    }]
}


