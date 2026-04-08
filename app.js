import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurentCard = (props) => {
  const {resData} = props;
  console.log(resData.card.card.info);
  const {
    cloudinaryImageId,
    name,
    avgRating,
    costForTwo,
    cuisines
  } = resData.card.card?.info;
  return (
    <div className="res-card">
      <img
        className="res-img"
        alt="food_img"
        src={resData.card.card.info.cloudinaryImageId ? ("https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId) : (<p> image </p>)}
      />
      <h3 className="menu-title">{cuisines.join(", ")}</h3>
      <h4>{name}</h4>
      <h4>{avgRating} Rating</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.card.card.info.sla.deliveryTime} mins</h4>
    </div>
  );
};

// const resObj = {
//   "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//   info: {
//     id: "1098386",
//     name: "Nothing But Chicken",
//     cloudinaryImageId: "65f38a8ef2068d736805821a0ef025e7",
//     locality: "Wakad",
//     areaName: "Wakad",
//     costForTwo: "₹400 for two",
//     cuisines: ["Salads", "Biryani", "Kebabs", "Fast Food", "Healthy Food"],
//     avgRating: 4.1,
//     parentId: "668",
//     avgRatingString: "4.1",
//     totalRatingsString: "411",
//     promoted: true,
//     adTrackingId:
//       "cid=d19cae03-25bf-44c3-b299-82c5da6b7ddd~p=0~adgrpid=d19cae03-25bf-44c3-b299-82c5da6b7ddd#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1098386~plpr=COLLECTION~eid=c2b370ab-eb0a-471c-ab39-0576b9db238a~srvts=1775646880216~collid=83639",
//     sla: {
//       deliveryTime: 22,
//       lastMileTravel: 2,
//       serviceability: "SERVICEABLE",
//       slaString: "20-25 mins",
//       lastMileTravelString: "2.0 km",
//       iconType: "ICON_TYPE_EMPTY",
//     },
//   }
// };
const resList = [
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "1098386",
              "name": "Nothing But Chicken",
              "cloudinaryImageId": "65f38a8ef2068d736805821a0ef025e7",
              "locality": "Wakad",
              "areaName": "Wakad",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Salads",
                "Biryani",
                "Kebabs",
                "Fast Food",
                "Healthy Food"
              ],
              "avgRating": 4.1,
              "parentId": "668",
              "avgRatingString": "4.1",
              "totalRatingsString": "411",
              "promoted": true,
              "adTrackingId": "cid=d19cae03-25bf-44c3-b299-82c5da6b7ddd~p=0~adgrpid=d19cae03-25bf-44c3-b299-82c5da6b7ddd#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1098386~plpr=COLLECTION~eid=c2b370ab-eb0a-471c-ab39-0576b9db238a~srvts=1775646880216~collid=83639",
              "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 2,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "2.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-04-09 04:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "High%20Protein/rx%20tag%205.png",
                    "description": "High Protein"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {},
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "High Protein",
                          "theme": "",
                          "imageId": "High%20Protein/rx%20tag%205.png"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {}
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹118",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {},
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "d19cae03-25bf-44c3-b299-82c5da6b7ddd"
            },
            "analytics": {},
            "cta": {
              "link": "swiggy://menu?restaurant_id=1098386&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "34579",
              "name": "Bird Valley",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/8/5/a1fbd3ab-779a-4e6b-aa74-30229f156965_afbc403b-32a3-447c-a9c5-c766c7d5af1e.jpg",
              "locality": "Datta Mandir Road",
              "areaName": "Wakad",
              "costForTwo": "₹700 for two",
              "cuisines": [
                "North Indian",
                "Continental",
                "Mughlai",
                "Chinese",
                "Biryani",
                "Beverages",
                "Desserts",
                "Punjabi",
                "Snacks",
                "Fast Food"
              ],
              "avgRating": 4.4,
              "parentId": "2708",
              "avgRatingString": "4.4",
              "totalRatingsString": "7.1K+",
              "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 0.8,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "0.8 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-04-08 23:30:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "High%20Protein/rx%20tag%204.png",
                    "description": "High Protein"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {},
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "High%20Protein/rx%20tag%204.png",
                          "description": "High Protein",
                          "theme": ""
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {}
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹139",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {},
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.0",
                  "ratingCount": "11K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
              "link": "swiggy://menu?restaurant_id=34579&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "1186260",
              "name": "Charcoal Eats - Biryani & Beyond",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/5/23/364eb00e-b639-4118-b324-960ab6164712_b3265ac2-ab70-4695-82bf-5197efa2e5fa.jpg",
              "locality": "Wakad",
              "areaName": "Wakad",
              "costForTwo": "₹600 for two",
              "cuisines": [
                "Biryani",
                "Rolls & Wraps",
                "North Indian"
              ],
              "avgRating": 4,
              "parentId": "5338",
              "avgRatingString": "4.0",
              "totalRatingsString": "322",
              "promoted": true,
              "adTrackingId": "cid=19cb82ad-a14e-42d8-b1fc-c181f246a2c1~p=3~adgrpid=19cb82ad-a14e-42d8-b1fc-c181f246a2c1#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1186260~plpr=COLLECTION~eid=59186ee7-3bb4-4d16-8cea-2b594dff93b0~srvts=1775646880216~collid=83639",
              "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 1,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-04-09 04:00:00",
                "opened": true
              },
              "badges": {},
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {},
                  "textExtendedBadges": {},
                  "textBased": {}
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "discountTag": "FLAT DEAL",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {},
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "19cb82ad-a14e-42d8-b1fc-c181f246a2c1"
            },
            "analytics": {},
            "cta": {
              "link": "swiggy://menu?restaurant_id=1186260&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "1338016",
              "name": "Anna Dosa",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/28/336bc9b0-614a-4f89-a4b9-238250cb3570_1017411.JPG",
              "locality": "Wakad",
              "areaName": "Wakad",
              "costForTwo": "₹350 for two",
              "cuisines": [
                "South Indian",
                "Biryani",
                "Indian"
              ],
              "avgRating": 4.3,
              "veg": true,
              "parentId": "33770",
              "avgRatingString": "4.3",
              "totalRatingsString": "5",
              "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 1.7,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "1.7 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-04-08 23:30:00",
                "opened": true
              },
              "badges": {},
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {},
                  "textExtendedBadges": {},
                  "textBased": {}
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "isNewlyOnboarded": true,
              "restaurantOfferPresentationInfo": {},
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
              "link": "swiggy://menu?restaurant_id=1338016&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "759135",
              "name": "Street Foods By Punjab Grill",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/7/5/58e16cdc-7201-4b1f-a8fd-6bc912bf3863_742c60aa-6d4b-47d8-8c0c-69cb3f3fb181.png",
              "locality": "BEHIND SAYAJI HOTEL",
              "areaName": "Wakad",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Kebabs",
                "Biryani",
                "Mughlai",
                "North Indian",
                "Snacks",
                "Thali",
                "Street Food",
                "rolls"
              ],
              "avgRating": 3.8,
              "parentId": "1345",
              "avgRatingString": "3.8",
              "totalRatingsString": "542",
              "promoted": true,
              "adTrackingId": "cid=5c906a11-1423-4211-9b11-77eb12898d1b~p=4~adgrpid=5c906a11-1423-4211-9b11-77eb12898d1b#ag6~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=759135~plpr=COLLECTION~eid=d8d0acc2-0d16-4e61-b644-0e960b92c86d~srvts=1775646880216~collid=83639",
              "sla": {
                "deliveryTime": 44,
                "lastMileTravel": 1,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "1.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-04-08 23:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "newg.png",
                    "description": "Gourmet"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {},
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "theme": "",
                          "imageId": "newg.png",
                          "description": "Gourmet"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {}
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹85"
              },
              "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {},
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.5",
                  "ratingCount": "211"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "5c906a11-1423-4211-9b11-77eb12898d1b"
            },
            "analytics": {},
            "cta": {
              "link": "swiggy://menu?restaurant_id=759135&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "1150575",
              "name": "Amul Ice Cream Parlour",
              "locality": "Wakad, PUNE PCMC ward",
              "areaName": "Chandrmauli Garden",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "Ice Cream"
              ],
              "avgRating": 4.4,
              "veg": true,
              "parentId": "32508",
              "avgRatingString": "4.4",
              "totalRatingsString": "21",
              "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-04-09 02:00:00",
                "opened": true
              },
              "badges": {},
              "isOpen": true,
              "aggregatedDiscountInfoV2": {},
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {},
                  "imageBased": {},
                  "textExtendedBadges": {}
                }
              },
              "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {},
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
              "link": "swiggy://menu?restaurant_id=1150575&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "261905",
              "name": "Zeeshan Restaurant Apna Hyderabadi Food",
              "cloudinaryImageId": "de56dffcc29d6ad046285c5b664bda8f",
              "locality": "Rajiv Gandhi Infotech Park",
              "areaName": "Hinjewadi",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Biryani",
                "Tandoor",
                "Sweets",
                "Mughlai",
                "Beverages"
              ],
              "avgRating": 3.9,
              "parentId": "520508",
              "avgRatingString": "3.9",
              "totalRatingsString": "16K+",
              "promoted": true,
              "adTrackingId": "cid=0f37a772-1766-4d8d-a2ab-230d4bc03274~p=6~adgrpid=0f37a772-1766-4d8d-a2ab-230d4bc03274#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=261905~plpr=COLLECTION~eid=d574c354-6455-4eb5-af28-18695f6833aa~srvts=1775646880216~collid=83639",
              "sla": {
                "deliveryTime": 38,
                "lastMileTravel": 4.7,
                "serviceability": "SERVICEABLE",
                "slaString": "35-45 mins",
                "lastMileTravelString": "4.7 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-04-09 03:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "brand_cards/Badges%202026/39_Best%20in%20Biryani2026.png",
                    "description": "Best in Biryani"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {},
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "theme": "",
                          "imageId": "brand_cards/Badges%202026/39_Best%20in%20Biryani2026.png",
                          "description": "Best in Biryani"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {}
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
              },
              "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {},
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "0f37a772-1766-4d8d-a2ab-230d4bc03274"
            },
            "analytics": {},
            "cta": {
              "link": "swiggy://menu?restaurant_id=261905&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      }
];
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
          resList.map((restaurent) => (<RestaurentCard  key={restaurent.card.card.info.id} resData={restaurent}/>))
        }
       
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* body */}
      <Body />
      {/* footer */}
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(root);
root.render(<AppLayout />);
