const locators = {
    USER_REGISTRATION: {
     GENDER_MRS: '#id_gender2',
     EMAIL: '#email',
     EMAIL_ACCOUNT: '#create-account_form',
     FIRSTNAME: '#customer_firstname',
     LASTNAME: '#customer_lastname',
     PASSWORD: '#passwd',
     DAYS: '#days',
     MONTH: '#months',
     YEAR: '#years'
    },
    LOGIN:{
        EMAIL: '#email',
        PASSWORD: '#passwd',
    },
    FILTER:{
        ENABLE_FILTER:'#enabled_filters',
        TOP_CATEGORY: '#layered_category_4',
        S_SIZE:'#layered_id_attribute_group_1',
        BLUE_COLOR:'#layered_id_attribute_group_14',
        COLORFUL_DRESS:'#layered_id_feature_18',
        COTTOM_COMPOSITION:'#layered_id_feature_5',
        CASUAL:'#layered_id_feature_11',
        IN_STOCK:'#layered_quantity_1',
        NEW:'#layered_condition_new',
        PRICE_RANGE:'#layered_price_range'
    },
    BTN:{
        BTN_REGISTRY: '#submitAccount',
        BTN_SUBMIT_CREATE: '#SubmitCreate',
        BTN_MY_PERSONAL_INFO: '.login',
        BTN_LOGIN: '#SubmitLogin'
    },
    ALERT:{
        MESSAGE: '.alert',
        CREATE_ACCOUNT_ERROR: '#create_account_error',
        ERROR_LOGIN:'#center_column > :nth-child(2)',
        REQUIRED_FIELD:'#center_column > :nth-child(2)'
    },
    HEADER:{
        NAME: '.account'
    },
    MENU:{
        WOMAN:''
    }
}

export default locators;