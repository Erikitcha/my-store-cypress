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
      YEAR: '#years',
      BTN_REGISTRY: '#submitAccount',
    },
  
    LOGIN: {
      EMAIL: '#email',
      PASSWORD: '#passwd',
      BTN_SUBMIT_CREATE: '#SubmitCreate',
      BTN_MY_PERSONAL_INFO: '.login',
      BTN_LOGIN: '#SubmitLogin',
    },
  
    FILTER: {
      CATEGORY_MENU: '.sf-menu',
      SHOWING_ITENS_COUNT_TEXT: '.top-pagination-content > .product-count',
      ENABLE_FILTER: '#enabled_filters',
      TOP_CATEGORY: '#layered_category_4',
      S_SIZE: '#layered_id_attribute_group_1',
      BLUE_COLOR: '#layered_id_attribute_group_14',
      COLORFUL_DRESS: '#layered_id_feature_18',
      COTTON_COMPOSITION: '#layered_id_feature_5',
      CASUAL: '#layered_id_feature_11',
      IN_STOCK: '#layered_quantity_1',
      NEW: '#layered_condition_new',
      PRICE_RANGE: '#layered_price_range',

      PRICE_SLIDER: '.ui-slider-range',
      SLIDER_BUTTON_SELECTOR: '[style="left: 0%;"]',

      CURRENT_PRICE_RANGE_TEXT: '#layered_price_range',
      FIRST_PRODUCT_IN_RANGE: '.product_list .product-container'
    },
  
    ALERT: {
      MESSAGE: '.alert',
      CREATE_ACCOUNT_ERROR: '#create_account_error',
      ERROR_LOGIN: '#center_column > :nth-child(2)',
      REQUIRED_FIELD: '#center_column > :nth-child(2)',
    },
  
    PRODUCT: {
      PRICE: '.price-box > .price',
      OLD_PRICE: '.price-box > .old-price',
      DISCOUNT: '.price-percent-reduction',
    },
  
    HEADER: {
      NAME: '.account',
    },
  
    MENU: {
      FULL_SELECTOR: '.block_content',
      TOPS_SELECTOR: '.block_content > .tree > :nth-child(1) > .grower',
      MORE_BUTTON: '.lnk_view > span',
      PRODUCT_DETAILS: '#short_description_content > p',
      SORT_BY_OPTIONS: '#selectProductSort',
      IN_STOCK_TEXT: ':nth-child(1) > .product-container > .right-block > .availability > .available-now',
      SPECIAL_BLOCK: '#special_block_right',
    },
  };
  
  export default locators;