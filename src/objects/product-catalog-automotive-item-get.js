 /*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * ProductCatalogAutomotiveItemGet
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalogAutomotiveItemGet extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      address: 'address',
      amount_currency: 'amount_currency',
      amount_percentage: 'amount_percentage',
      amount_price: 'amount_price',
      amount_qualifier: 'amount_qualifier',
      applinks: 'applinks',
      automotive_model_id: 'automotive_model_id',
      availability: 'availability',
      availability_circle_radius: 'availability_circle_radius',
      availability_circle_radius_unit: 'availability_circle_radius_unit',
      body_style: 'body_style',
      capabilities: 'capabilities',
      capabilities_disabled_by_user: 'capabilities_disabled_by_user',
      capabilities_rendering_catalog_manager: 'capabilities_rendering_catalog_manager',
      carfax_dealership_id: 'carfax_dealership_id',
      channels_to_integrity_status: 'channels_to_integrity_status',
      comscore_market_codes: 'comscore_market_codes',
      condition: 'condition',
      currency: 'currency',
      custom_label_0: 'custom_label_0',
      custom_label_1: 'custom_label_1',
      custom_label_2: 'custom_label_2',
      custom_label_3: 'custom_label_3',
      custom_label_4: 'custom_label_4',
      custom_number_0: 'custom_number_0',
      custom_number_1: 'custom_number_1',
      custom_number_2: 'custom_number_2',
      custom_number_3: 'custom_number_3',
      custom_number_4: 'custom_number_4',
      date_first_on_lot: 'date_first_on_lot',
      days_on_lot: 'days_on_lot',
      dealer_communication_channel: 'dealer_communication_channel',
      dealer_email: 'dealer_email',
      dealer_id: 'dealer_id',
      dealer_name: 'dealer_name',
      dealer_phone: 'dealer_phone',
      dealer_privacy_policy_url: 'dealer_privacy_policy_url',
      dealer_url: 'dealer_url',
      default_country: 'default_country',
      default_language_locale: 'default_language_locale',
      description: 'description',
      downpayment_currency: 'downpayment_currency',
      downpayment_price: 'downpayment_price',
      downpayment_qualifier: 'downpayment_qualifier',
      drivetrain: 'drivetrain',
      enabled_capability_to_review_status: 'enabled_capability_to_review_status',
      end_date: 'end_date',
      engine_size: 'engine_size',
      exterior_color: 'exterior_color',
      fb_page_id: 'fb_page_id',
      features: 'features',
      finance_description: 'finance_description',
      finance_type: 'finance_type',
      fuel_type: 'fuel_type',
      generation: 'generation',
      horse_power: 'horse_power',
      id: 'id',
      image_fetch_status: 'image_fetch_status',
      images: 'images',
      interior_color: 'interior_color',
      interior_upholstery: 'interior_upholstery',
      is_blackholed: 'is_blackholed',
      legal_disclosure_impressum_url: 'legal_disclosure_impressum_url',
      make: 'make',
      mileage: 'mileage',
      model: 'model',
      offer_description: 'offer_description',
      offer_disclaimer: 'offer_disclaimer',
      offer_disclaimer_url: 'offer_disclaimer_url',
      offer_type: 'offer_type',
      previous_currency: 'previous_currency',
      previous_price: 'previous_price',
      price: 'price',
      product_feed: 'product_feed',
      product_priority_0: 'product_priority_0',
      product_priority_1: 'product_priority_1',
      product_priority_2: 'product_priority_2',
      product_priority_3: 'product_priority_3',
      product_priority_4: 'product_priority_4',
      sale_currency: 'sale_currency',
      sale_price: 'sale_price',
      sanitized_images: 'sanitized_images',
      sanitized_previews: 'sanitized_previews',
      start_date: 'start_date',
      state_of_vehicle: 'state_of_vehicle',
      stock_number: 'stock_number',
      tags: 'tags',
      term_length: 'term_length',
      term_qualifier: 'term_qualifier',
      title: 'title',
      transmission: 'transmission',
      trim: 'trim',
      unit_price: 'unit_price',
      url: 'url',
      url_shimmed: 'url_shimmed',
      validation_errors: 'validation_errors',
      vehicle_id: 'vehicle_id',
      vehicle_offer_id: 'vehicle_offer_id',
      vehicle_registration_plate: 'vehicle_registration_plate',
      vehicle_specifications: 'vehicle_specifications',
      vehicle_type: 'vehicle_type',
      videos_metadata: 'videos_metadata',
      vin: 'vin',
      visibility: 'visibility',
      year: 'year',
    });
  }

  static get Availability (): Object {
    return Object.freeze({
      available: 'AVAILABLE',
      not_available: 'NOT_AVAILABLE',
      pending: 'PENDING',
      unknown: 'UNKNOWN',
    });
  }
  static get AvailabilityCircleRadiusUnit (): Object {
    return Object.freeze({
      km: 'KM',
      mi: 'MI',
    });
  }
  static get BodyStyle (): Object {
    return Object.freeze({
      convertible: 'CONVERTIBLE',
      coupe: 'COUPE',
      crossover: 'CROSSOVER',
      estate: 'ESTATE',
      grandtourer: 'GRANDTOURER',
      hatchback: 'HATCHBACK',
      minibus: 'MINIBUS',
      minivan: 'MINIVAN',
      mpv: 'MPV',
      none: 'NONE',
      other: 'OTHER',
      pickup: 'PICKUP',
      roadster: 'ROADSTER',
      saloon: 'SALOON',
      sedan: 'SEDAN',
      small_car: 'SMALL_CAR',
      sportscar: 'SPORTSCAR',
      supercar: 'SUPERCAR',
      supermini: 'SUPERMINI',
      suv: 'SUV',
      truck: 'TRUCK',
      van: 'VAN',
      wagon: 'WAGON',
    });
  }
  static get Capabilities (): Object {
    return Object.freeze({
      b2c_marketplace: 'B2C_MARKETPLACE',
      c2c_marketplace: 'C2C_MARKETPLACE',
      da: 'DA',
      daily_deals: 'DAILY_DEALS',
      daily_deals_legacy: 'DAILY_DEALS_LEGACY',
      ig_product_tagging: 'IG_PRODUCT_TAGGING',
      marketplace: 'MARKETPLACE',
      marketplace_ads_deprecated: 'MARKETPLACE_ADS_DEPRECATED',
      marketplace_shops: 'MARKETPLACE_SHOPS',
      mini_shops: 'MINI_SHOPS',
      offline_conversions: 'OFFLINE_CONVERSIONS',
      shops: 'SHOPS',
      universal_checkout: 'UNIVERSAL_CHECKOUT',
      whatsapp: 'WHATSAPP',
    });
  }
  static get CapabilitiesDisabledByUser (): Object {
    return Object.freeze({
      b2c_marketplace: 'B2C_MARKETPLACE',
      biz_msg_ai_agent: 'BIZ_MSG_AI_AGENT',
      business_inbox_in_messenger: 'BUSINESS_INBOX_IN_MESSENGER',
      buy_on_facebook: 'BUY_ON_FACEBOOK',
      c2c_marketplace: 'C2C_MARKETPLACE',
      cpas_parent_catalog: 'CPAS_PARENT_CATALOG',
      da: 'DA',
      daily_deals: 'DAILY_DEALS',
      daily_deals_legacy: 'DAILY_DEALS_LEGACY',
      event: 'EVENT',
      event_deprecated: 'EVENT_DEPRECATED',
      groups: 'GROUPS',
      ig_onsite_shopping: 'IG_ONSITE_SHOPPING',
      ig_product_tagging: 'IG_PRODUCT_TAGGING',
      ldp: 'LDP',
      marketplace: 'MARKETPLACE',
      marketplace_ads_deprecated: 'MARKETPLACE_ADS_DEPRECATED',
      marketplace_home_rentals: 'MARKETPLACE_HOME_RENTALS',
      marketplace_home_sales: 'MARKETPLACE_HOME_SALES',
      marketplace_motors: 'MARKETPLACE_MOTORS',
      marketplace_shops: 'MARKETPLACE_SHOPS',
      mini_shops: 'MINI_SHOPS',
      neighborhoods: 'NEIGHBORHOODS',
      offline_conversions: 'OFFLINE_CONVERSIONS',
      organic_discovery: 'ORGANIC_DISCOVERY',
      profile: 'PROFILE',
      service: 'SERVICE',
      shops: 'SHOPS',
      test_capability: 'TEST_CAPABILITY',
      universal_checkout: 'UNIVERSAL_CHECKOUT',
      us_marketplace: 'US_MARKETPLACE',
      whatsapp: 'WHATSAPP',
      whatsapp_marketing_message: 'WHATSAPP_MARKETING_MESSAGE',
    });
  }
  static get CapabilitiesRenderingCatalogManager (): Object {
    return Object.freeze({
      b2c_marketplace: 'B2C_MARKETPLACE',
      c2c_marketplace: 'C2C_MARKETPLACE',
      da: 'DA',
      daily_deals: 'DAILY_DEALS',
      daily_deals_legacy: 'DAILY_DEALS_LEGACY',
      ig_product_tagging: 'IG_PRODUCT_TAGGING',
      marketplace: 'MARKETPLACE',
      marketplace_ads_deprecated: 'MARKETPLACE_ADS_DEPRECATED',
      marketplace_shops: 'MARKETPLACE_SHOPS',
      mini_shops: 'MINI_SHOPS',
      offline_conversions: 'OFFLINE_CONVERSIONS',
      shops: 'SHOPS',
      universal_checkout: 'UNIVERSAL_CHECKOUT',
      whatsapp: 'WHATSAPP',
    });
  }
  static get Condition (): Object {
    return Object.freeze({
      excellent: 'EXCELLENT',
      fair: 'FAIR',
      good: 'GOOD',
      none: 'NONE',
      other: 'OTHER',
      poor: 'POOR',
      very_good: 'VERY_GOOD',
    });
  }
  static get DealerCommunicationChannel (): Object {
    return Object.freeze({
      chat: 'CHAT',
      email_chat_proxy: 'EMAIL_CHAT_PROXY',
      lead_form: 'LEAD_FORM',
      unknown: 'UNKNOWN',
    });
  }
  static get DisplayFormat (): Object {
    return Object.freeze({
      carousel_ad: 'CAROUSEL_AD',
      shops_pdp: 'SHOPS_PDP',
      single_ad: 'SINGLE_AD',
    });
  }
  static get Drivetrain (): Object {
    return Object.freeze({
      awd: 'AWD',
      four_wd: 'FOUR_WD',
      fwd: 'FWD',
      none: 'NONE',
      other: 'OTHER',
      rwd: 'RWD',
      two_wd: 'TWO_WD',
    });
  }
  static get FinanceType (): Object {
    return Object.freeze({
      hire_purchase: 'HIRE_PURCHASE',
      lease: 'LEASE',
      none: 'NONE',
      no_finance: 'NO_FINANCE',
      personal_contract_purchase: 'PERSONAL_CONTRACT_PURCHASE',
    });
  }
  static get FuelType (): Object {
    return Object.freeze({
      diesel: 'DIESEL',
      electric: 'ELECTRIC',
      flex: 'FLEX',
      gasoline: 'GASOLINE',
      hybrid: 'HYBRID',
      none: 'NONE',
      other: 'OTHER',
      petrol: 'PETROL',
      plugin_hybrid: 'PLUGIN_HYBRID',
    });
  }
  static get ImageFetchStatus (): Object {
    return Object.freeze({
      direct_upload: 'DIRECT_UPLOAD',
      fetched: 'FETCHED',
      fetch_failed: 'FETCH_FAILED',
      no_status: 'NO_STATUS',
      outdated: 'OUTDATED',
      partial_fetch: 'PARTIAL_FETCH',
    });
  }
  static get OfferType (): Object {
    return Object.freeze({
      cash: 'CASH',
      finance: 'FINANCE',
      lease: 'LEASE',
      none: 'NONE',
    });
  }
  static get StateOfVehicle (): Object {
    return Object.freeze({
      cpo: 'CPO',
      new: 'NEW',
      used: 'USED',
    });
  }
  static get Transmission (): Object {
    return Object.freeze({
      automatic: 'AUTOMATIC',
      manual: 'MANUAL',
      none: 'NONE',
      other: 'OTHER',
    });
  }
  static get VehicleType (): Object {
    return Object.freeze({
      boat: 'BOAT',
      car_truck: 'CAR_TRUCK',
      commercial: 'COMMERCIAL',
      motorcycle: 'MOTORCYCLE',
      other: 'OTHER',
      powersport: 'POWERSPORT',
      rv_camper: 'RV_CAMPER',
      trailer: 'TRAILER',
    });
  }
  static get Visibility (): Object {
    return Object.freeze({
      active: 'ACTIVE',
      archived: 'ARCHIVED',
      hidden: 'HIDDEN',
      legacy_public: 'LEGACY_PUBLIC',
      published: 'PUBLISHED',
      staging: 'STAGING',
      visible_only_with_overrides: 'VISIBLE_ONLY_WITH_OVERRIDES',
      whitelist_only: 'WHITELIST_ONLY',
    });
  }
}
