import { GET_ALL_ARTICLE, GET_SINGLE_ARTICLE, GET_ARTICLE_COUNT_AND_AUTHOR_LIST, ADD_SINGLE_ARTICLE} from '../actions/constants'



const initialState = {
    all_articles : [
        {
          "name": "Ticketak",
          "img": "https://i.imgur.com/ojb4k5pr.jpg",
          "desc": "A movie ticketing platform and cinema aggregator site launched across the UAE, Saudi Arabia and Lebanon.",
          "dur" : "Sep, 2018 - Present",
          "google" : "https://play.google.com/store/apps/details?id=com.ticketak.ticketak",
          "apple" : "https://apps.apple.com/in/app/ticketak/id1454492437",
          "web" : "http://ticketak.com/"
        },
        {
          "name": "Gogo Cinema",
          "img": "https://i.imgur.com/UCbV9L7r.jpg",
          "desc": "GOGO Cinema is an exciting and young startup based out of Singapore that helps movie lovers, not just book tickets to their favourite new releases, but also allows them to create special screenings of older movies and classic hits in a cinema of their choice.",
          "dur" : "Aug, 2018- Present",
          "google" : "https://drive.google.com/file/d/1YQB7hLtRpUld-D7oahJ_0z_FRuzQlTvC/view",
          "web" : "https://www.gogocinema.com/"
        },
        {
          "name": "Empire Cinemas",
          "img": "https://i.imgur.com/xvipNww.jpg",
          "desc": "Led the design, prototype, development and launch of apps, websites, digital kiosks and branded collaterals for Empire Cinemas across Lebanon, Iraq and Saudi Arabia.",
          "dur" : "Jan, 2019 - Present" ,
          "google" : "https://play.google.com/store/apps/details?id=com.binary.empirecinema",
          "apple" : "https://apps.apple.com/in/app/empire-cinemas/id1459864736",
          "web" : "https://www.empire.com.lb/"
        },
        {
          "name": "Capshun",
          "img": "https://i.imgur.com/QsQKXWr.jpg",
          "desc": "AI- Based application which generates a variety of captions and hashtags for your pictures in seconds!",
          "dur" : "Jan, 2019 - July, 2019",
          "google" : "https://play.google.com/store/apps/details?id=com.capshun.co",
          "apple" : "https://apps.apple.com/in/app/capshun-caption-for-instagram/id1417258896",
          "web" : "https://www.capshun.co/"
        },
        {
          "name": "Star Cinemas",
          "img": "https://i.imgur.com/Y7QlkrZ.jpg",
          "desc": "Led the design, prototype, development and launch of apps, websites and digital kiosks for Star Cinemas across the GCC and Africa.",
          "dur" : "Feb, 2019 - Present",
          "google" : "https://drive.google.com/file/d/1rc_00e9krk6USVCG48sVU_bTTZBBFfRl/view",
          "web" : "https://www.starcinemas.com/"
        },
        {
          "name": "MyTiketi",
          "img": "https://i.imgur.com/jxHM5KM.jpg",
          "desc": "The all new Movie ticket booking app helps you book your favourite movie ticket on the go. The websites and digital kiosks for Star Cinemas across the GCC and Africa.",
          "dur" : "Aug, 2018- Present",
          "google" : "https://play.google.com/store/apps/details?id=com.mytiketi.mytiketi",
          "apple" : "https://apps.apple.com/in/app/mytiketi/id1475621585",
          "web" : "https://www.mytiketi.com/"
        },
        {
          "name": "Eat Yummy",
          "img": "https://scontent.fbom16-1.fna.fbcdn.net/v/t1.0-9/17190874_174807619690968_3943300109608973664_n.jpg?_nc_cat=100&_nc_oc=AQnuX8ubq3LvZbYrkjEShlHCJexeMclN7Akvb5pYIWAumuUEOqUWcdg-b7q-TefZzbg&_nc_ht=scontent.fbom16-1.fna&oh=22e2bebe7c691f8f30757dbca40244f0&oe=5E649284",
          "desc": "Delivers food at your door step in Khammam city. Have a great food experience at your door step. The first mobile app for food delivery in Khammam which provides great service with mouth watering taste and superior quality.",
          "dur" : "Sep, 2016 - Dec, 2016",
          "google" : "https://play.google.com/store/apps/details?id=com.fornextit.eatyummyy"
        }
      ],
    single_article : {},
    isVisible : true,
    all_authors : [],
    next_article_id : -1,
    is_article_created : false,

    
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_ALL_ARTICLE: 
        return {
            ...state,
            all_articles : action.payload,
        }
        
        case GET_SINGLE_ARTICLE: 
        return {
            ...state,
            single_article : action.payload[0]
        }

        case GET_ARTICLE_COUNT_AND_AUTHOR_LIST:
        return {
            ...state,
            all_authors : action.payload.Authors,
            next_article_id : action.payload.Count,
            is_article_created : false
        }

        case ADD_SINGLE_ARTICLE:
        return {
            ...state,
            is_article_created : action.payload.Status
        }


        
        default:
            return state
    }
}