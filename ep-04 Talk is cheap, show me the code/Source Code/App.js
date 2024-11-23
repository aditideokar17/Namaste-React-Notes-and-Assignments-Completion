import React from "react";
import ReactDOM from "react-dom/client";

// Components to build
/**
 * 
 * Header
 *  -logo
 *  -nav Items
 * 
 * Body
 *  -Search
 *  -Restaurent Container
 *      -Restaurent Card
 * 
 * Footer
 *  -copyright
 *  -links
 *  -address
 *  -contacts
 * 
 */

// Config Driven UI
const resObj = {
    "info": {
      "id": "195429",
      "name": "Sanju Ka Dhaba",
      "cloudinaryImageId": "hjao7sorzggaeqito6au",
      "locality": "Vishnu Nagar",
      "areaName": "Prasia Road",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "North Indian",
        "South Indian",
        "Chinese"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "177443",
      "avgRatingString": "4.5",
      "totalRatingsString": "1.1K+",
      "sla": {
        "deliveryTime": 51,
        "lastMileTravel": 14.9,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "14.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-11-23 22:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-f7bd6270-f5fa-48de-8d12-4c5d4a1a070e"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/chhindwara/sanju-ka-dhaba-vishnu-nagar-prasia-road-rest195429",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  }


// Header Component
const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://i.pinimg.com/736x/59/5f/a5/595fa5ffb3d67f62ceabaa0d9a40d1e2.jpg" alt="logo img"/>
            </div>

            <div className="nav-items" >
            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>Services</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
            </div>

        </div>
    );
};

// Restaurent Card
const RestaurentCard = (props) =>{
    const {resData} = props;
    return(
        <div className="res-card">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId} />
        <h3>{resData.info.name}</h3>
        <h4>{resData.info.cuisines.join(", ")}</h4>
        <h4>{resData.info.avgRating} stars</h4>
        <h4>{resData.info.costForTwo}</h4>
        <h4>{resData.info.sla.deliveryTime} Minutes</h4>
        </div>
    );
};


// Body Component
const Body = () =>{
    return(
        <div className="body">
            <div className="search">
            <input className="search-input" placeholder="search" />
            <button className="search-btn">search</button>
            </div>

            <div className="res-container">
                <RestaurentCard resData = {resObj}/>
            </div>
        </div>
    );
};


//AppLayout Component
const AppLayout = () =>{
    return(
        <div className="app">
        <Header/>
        <Body/>
        </div>
    );
};


// rendering
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <AppLayout/>
);