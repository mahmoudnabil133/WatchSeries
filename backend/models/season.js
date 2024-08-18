const mongoose = require('mongoose');
// // create a seson schema like this {
//   "_id": "5db952cca1d3320014e91171",
//   "air_date": "2022-08-20",
//   "episodes": [
//     {
//       "air_date": "2022-08-21",
//       "episode_number": 1,
//       "episode_type": "standard",
//       "id": 1971015,
//       "name": "The Heirs of the Dragon",
//       "overview": "Viserys hosts a tournament to celebrate the birth of his second child. Rhaenyra welcomes her uncle Daemon back to the Red Keep.",
//       "production_code": "",
//       "runtime": 66,
//       "season_number": 1,
//       "show_id": 94997,
//       "still_path": "/3oumSnkavc4pcMFvPbgWDUTclNb.jpg",
//       "vote_average": 7.9,
//       "vote_count": 152,
//       "crew": [
//         {
//           "job": "Writer",
//           "department": "Writing",
//           "credit_id": "5db9544fa1d3320014e912de",
//           "adult": false,
//           "gender": 2,
//           "id": 1167458,
//           "known_for_department": "Writing",
//           "name": "Ryan Condal",
//           "original_name": "Ryan Condal",
//           "popularity": 8.889,
//           "profile_path": "/1TGRIEArYHB7TD40HHYiRkwTHLX.jpg"
//         },
//         {
//           "job": "Director",
//           "department": "Directing",
//           "credit_id": "5db95440a1d3320017e93d09",
//           "adult": false,
//           "gender": 2,
//           "id": 114404,
//           "known_for_department": "Directing",
//           "name": "Miguel Sapochnik",
//           "original_name": "Miguel Sapochnik",
//           "popularity": 3.602,
//           "profile_path": "/jlZGTjiifvvFDoEtlwrKz7QxuJS.jpg"
//         },
//         {
//           "job": "Director of Photography",
//           "department": "Camera",
//           "credit_id": "6301d29bbb2602007ceed6d7",
//           "adult": false,
//           "gender": 2,
//           "id": 1345974,
//           "known_for_department": "Camera",
//           "name": "Fabian Wagner",
//           "original_name": "Fabian Wagner",
//           "popularity": 11.794,
//           "profile_path": "/uovLA9I5UYgiDdRt9pNbcDQh89U.jpg"
//         },
//         {
//           "job": "Editor",
//           "department": "Editing",
//           "credit_id": "6301d2b9f056d5007c81edae",
//           "adult": false,
//           "gender": 0,
//           "id": 1432103,
//           "known_for_department": "Editing",
//           "name": "Tim Porter",
//           "original_name": "Tim Porter",
//           "popularity": 2.359,
//           "profile_path": null
//         }
//       ],
//       "guest_stars": [
//         {
//           "character": "Ser Harrold Westerling",
//           "credit_id": "6301d0dfc2f44b007a292f9d",
//           "order": 500,
//           "adult": false,
//           "gender": 2,
//           "id": 95047,
//           "known_for_department": "Acting",
//           "name": "Graham McTavish",
//           "original_name": "Graham McTavish",
//           "popularity": 11.253,
//           "profile_path": "/9IjPwv7Vb4QygA1cPSX179oqjsT.jpg"
//         },
//         {
//           "character": "Queen Aemma Arryn",
//           "credit_id": "6301d34597eab4007d004c7c",
//           "order": 501,
//           "adult": false,
//           "gender": 1,
//           "id": 1237956,
//           "known_for_department": "Acting",
//           "name": "Sian Brooke",
//           "original_name": "Sian Brooke",
//           "popularity": 17.584,
//           "profile_path": "/99mPsHpcFoUqhXNHsPVL5qD8nN2.jpg"
//         },
//         {
//           "character": "Grand Maester Mellos",
//           "credit_id": "6301d3605f4b73008267e97d",
//           "order": 502,
//           "adult": false,
//           "gender": 2,
//           "id": 133032,
//           "known_for_department": "Acting",
//           "name": "David Horovitch",
//           "original_name": "David Horovitch",
//           "popularity": 8.481,
//           "profile_path": "/8vzAkLFheIehNqnxFSj4o0oQ0wC.jpg"
//         },
//         {
//           "character": "Lord Lyman Beesbury",
//           "credit_id": "6301d37ddfe31d007b82768c",
//           "order": 503,
//           "adult": false,
//           "gender": 2,
//           "id": 104795,
//           "known_for_department": "Acting",
//           "name": "Bill Paterson",
//           "original_name": "Bill Paterson",
//           "popularity": 14.359,
//           "profile_path": "/mk5vpYLmER7asqOhEwVKXD3P3YE.jpg"
//         },
//         {
//           "character": "Lord Lyonel Strong",
//           "credit_id": "6301d38f5f4b73007af107e6",
//           "order": 504,
//           "adult": false,
//           "gender": 2,
//           "id": 2085743,
//           "known_for_department": "Acting",
//           "name": "Gavin Spokes",
//           "original_name": "Gavin Spokes",
//           "popularity": 2.149,
//           "profile_path": "/ghzBWbusVNHllI8L87Qw0VB7at.jpg"
//         },
//         {
//           "character": "King Jaehaerys Targaryen",
//           "credit_id": "6301d3e9bb260200845a6d08",
//           "order": 505,
//           "adult": false,
//           "gender": 2,
//           "id": 199055,
//           "known_for_department": "Acting",
//           "name": "Michael Carter",
//           "original_name": "Michael Carter",
//           "popularity": 5.298,
//           "profile_path": "/k7ASHV3vaJcA6NBwXnz4AkcWe9v.jpg"
//         },
//         {
//           "character": "Lord Hobert Hightower",
//           "credit_id": "6301d4117d41aa007e38db7f",
//           "order": 506,
//           "adult": false,
//           "gender": 2,
//           "id": 143892,
//           "known_for_department": "Acting",
//           "name": "Steffan Rhodri",
//           "original_name": "Steffan Rhodri",
//           "popularity": 7.143,
//           "profile_path": "/lxa7b7uKkBMfXpLkzQawtTcl24L.jpg"
//         },
//         {
//           "character": "Ser Erryk Cargyll",
//           "credit_id": "6301d44296e30b007a81aa29",
//           "order": 507,
//           "adult": false,
//           "gender": 2,
//           "id": 549520,
//           "known_for_department": "Acting",
//           "name": "Elliott Tittensor",
//           "original_name": "Elliott Tittensor",
//           "popularity": 11.412,
//           "profile_path": "/mpQkECu7DfcdkkwxVU0W1IRmXHN.jpg"
//         },
//         {
//           "character": "Ser Arryk Cargyll",
//           "credit_id": "6301d45596e30b007fdf1015",
//           "order": 508,
//           "adult": false,
//           "gender": 2,
//           "id": 1227875,
//           "known_for_department": "Acting",
//           "name": "Luke Tittensor",
//           "original_name": "Luke Tittensor",
//           "popularity": 6.552,
//           "profile_path": "/72X3ePDDmiicj7kkXtBOl2RE8e9.jpg"
//         },
//         {
//           "character": "Ryam Redwyne",
//           "credit_id": "6301d46f96e30b00911fd8c8",
//           "order": 509,
//           "adult": false,
//           "gender": 2,
//           "id": 27323,
//           "known_for_department": "Acting",
//           "name": "Garry Cooper",
//           "original_name": "Garry Cooper",
//           "popularity": 8.658,
//           "profile_path": "/wCh9z2Gb8ciz4k56h3OvbzKnnhh.jpg"
//         },
//         {
//           "character": "Boremund Baratheon",
//           "credit_id": "6301d4975f4b73007faa6f7b",
//           "order": 510,
//           "adult": false,
//           "gender": 2,
//           "id": 109650,
//           "known_for_department": "Acting",
//           "name": "Julian Lewis Jones",
//           "original_name": "Julian Lewis Jones",
//           "popularity": 6.485,
//           "profile_path": "/iccX4WBo6t6Wwj3a5BLxehHFNde.jpg"
//         },
//         {
//           "character": "Lord Rickon Stark",
//           "credit_id": "6301d4abb39e35007f67c01d",
//           "order": 511,
//           "adult": false,
//           "gender": 2,
//           "id": 185822,
//           "known_for_department": "Acting",
//           "name": "David Hounslow",
//           "original_name": "David Hounslow",
//           "popularity": 3.486,
//           "profile_path": "/1LyWLt6zEEUQxqedg7L6Vg40JbY.jpg"
//         },
//         {
//           "character": "Captain Randyll Barret",
//           "credit_id": "6301d4bd839d93008b613942",
//           "order": 512,
//           "adult": false,
//           "gender": 2,
//           "id": 1507580,
//           "known_for_department": "Acting",
//           "name": "Frankie Wilson",
//           "original_name": "Frankie Wilson",
//           "popularity": 2.225,
//           "profile_path": "/mS9yZoDmyizj9QxZNvD1sFUpIWS.jpg"
//         },
//         {
//           "character": "Mickon",
//           "credit_id": "6301d4f367e0f700821d2aac",
//           "order": 513,
//           "adult": false,
//           "gender": 0,
//           "id": 2460580,
//           "known_for_department": "Acting",
//           "name": "Mikhail Sen",
//           "original_name": "Mikhail Sen",
//           "popularity": 1.151,
//           "profile_path": "/vwKcS56MWjWtI1EqEedXutrAVLj.jpg"
//         },
//         {
//           "character": "Master of Revels",
//           "credit_id": "6301d54d33a37600823619f7",
//           "order": 514,
//           "adult": false,
//           "gender": 2,
//           "id": 1080281,
//           "known_for_department": "Acting",
//           "name": "Rhys Parry Jones",
//           "original_name": "Rhys Parry Jones",
//           "popularity": 2.126,
//           "profile_path": "/xCLI3W52OJQ2PJtA5eq2QFs9o9U.jpg"
//         },
//         {
//           "character": "High Septon",
//           "credit_id": "6301d56a7d41aa0081536fc7",
//           "order": 515,
//           "adult": false,
//           "gender": 2,
//           "id": 24819,
//           "known_for_department": "Acting",
//           "name": "Gary Raymond",
//           "original_name": "Gary Raymond",
//           "popularity": 5.506,
//           "profile_path": "/i9dQF7Qay82YSUnqwJofYsKwKZ1.jpg"
//         },
//         {
//           "character": "Dragonkeeper",
//           "credit_id": "6301d5c097eab4007d004cea",
//           "order": 516,
//           "adult": false,
//           "gender": 2,
//           "id": 47525,
//           "known_for_department": "Acting",
//           "name": "Andrew Bicknell",
//           "original_name": "Andrew Bicknell",
//           "popularity": 9.379,
//           "profile_path": "/vmsE8VHaXGbkxvUYafsOCVc8iyQ.jpg"
//         },
//         {
//           "character": "Dragonkeeper",
//           "credit_id": "6301d5de67e0f700821d2ad3",
//           "order": 517,
//           "adult": false,
//           "gender": 2,
//           "id": 193340,
//           "known_for_department": "Acting",
//           "name": "David Cann",
//           "original_name": "David Cann",
//           "popularity": 4.333,
//           "profile_path": "/flss2pUh1RzwGEPTjLaaDoiGe6a.jpg"
//         },
//         {
//           "character": "Dragonkeeper Acolyte",
//           "credit_id": "6301d649c2f44b007d24cc11",
//           "order": 518,
//           "adult": false,
//           "gender": 0,
//           "id": 3671468,
//           "known_for_department": "Acting",
//           "name": "Mirjam Germann",
//           "original_name": "Mirjam Germann",
//           "popularity": 0.77,
//           "profile_path": "/2YLt2HFjqByZG9hhzBycRMVdacy.jpg"
//         },
//         {
//           "character": "Child Laena Velaryon",
//           "credit_id": "6301d7f067e0f7007a8b70c7",
//           "order": 519,
//           "adult": false,
//           "gender": 0,
//           "id": 3671470,
//           "known_for_department": "Acting",
//           "name": "Nova Foueillis-Mosé",
//           "original_name": "Nova Foueillis-Mosé",
//           "popularity": 2.365,
//           "profile_path": "/iIuCix0sg3j2Xo33zvnfUR4k3Jp.jpg"
//         },
//         {
//           "character": "Murderer",
//           "credit_id": "6301d852c2f44b007d24cc93",
//           "order": 520,
//           "adult": false,
//           "gender": 2,
//           "id": 3671472,
//           "known_for_department": "Acting",
//           "name": "John Arnedo",
//           "original_name": "John Arnedo",
//           "popularity": 0.522,
//           "profile_path": "/nYJjB3kqWxMqmxW0ZRn42KGBVIv.jpg"
//         },
//         {
//           "character": "Child Laenor Velaryon",
//           "credit_id": "63063fb2b7d3520080a476ee",
//           "order": 521,
//           "adult": false,
//           "gender": 2,
//           "id": 3675205,
//           "known_for_department": "Acting",
//           "name": "Matthew Carver",
//           "original_name": "Matthew Carver",
//           "popularity": 3.341,
//           "profile_path": "/Tgpzwo7gDFVPkkCBUzkf8C4UFc.jpg"
//         },
//         {
//           "character": "Lord Corlys 'The Sea Snake' Velaryon",
//           "credit_id": "63316290a5d849007ec00808",
//           "order": 580,
//           "adult": false,
//           "gender": 2,
//           "id": 55412,
//           "known_for_department": "Acting",
//           "name": "Steve Toussaint",
//           "original_name": "Steve Toussaint",
//           "popularity": 21.53,
//           "profile_path": "/s4qDz1g0UzasoQlcUtgqkaAVbdC.jpg"
//         },
//         {
//           "character": "Princess Rhaenys Targaryen",
//           "credit_id": "633162eecede69007b883247",
//           "order": 581,
//           "adult": false,
//           "gender": 1,
//           "id": 201665,
//           "known_for_department": "Acting",
//           "name": "Eve Best",
//           "original_name": "Eve Best",
//           "popularity": 28.87,
//           "profile_path": "/oE0JEJS9un0FLpe3u5FxL1nvxLJ.jpg"
//         },
//         {
//           "character": "Mysaria",
//           "credit_id": "63316338c525c40091c8569e",
//           "order": 582,
//           "adult": false,
//           "gender": 1,
//           "id": 1457238,
//           "known_for_department": "Acting",
//           "name": "Sonoya Mizuno",
//           "original_name": "Sonoya Mizuno",
//           "popularity": 26.617,
//           "profile_path": "/scbRPaGPw3VnR6mrmZQZi6Cuj1m.jpg"
//         },
//         {
//           "character": "Princess Rhaenyra Targaryen",
//           "credit_id": "633163a0a5d849007bd4913b",
//           "order": 583,
//           "adult": false,
//           "gender": 1,
//           "id": 2046128,
//           "known_for_department": "Acting",
//           "name": "Milly Alcock",
//           "original_name": "Milly Alcock",
//           "popularity": 57.712,
//           "profile_path": "/3xrkzYFRegwgvR1HVL8IgjF1tBs.jpg"
//         },
//         {
//           "character": "Alicent Hightower",
//           "credit_id": "633163fbe86017007e9d126d",
//           "order": 584,
//           "adult": false,
//           "gender": 3,
//           "id": 1590758,
//           "known_for_department": "Acting",
//           "name": "Emily Carey",
//           "original_name": "Emily Carey",
//           "popularity": 38.479,
//           "profile_path": "/cH93v8Ig7yaVh3QZCVsrDCXjkr1.jpg"
//         },
//         {
//           "character": "Ser Criston Cole",
//           "credit_id": "633a98a5481382007aa0011d",
//           "order": 589,
//           "adult": false,
//           "gender": 2,
//           "id": 2583704,
//           "known_for_department": "Acting",
//           "name": "Fabien Frankel",
//           "original_name": "Fabien Frankel",
//           "popularity": 11.493,
//           "profile_path": "/wuNnl8PNlC74jkEeX5TZzL4v83r.jpg"
//         },
//         {
//           "character": "Princess Rhaenyra Targaryen (voice)",
//           "credit_id": "6670a285e88f5770d253a1af",
//           "order": 629,
//           "adult": false,
//           "gender": 3,
//           "id": 2121005,
//           "known_for_department": "Acting",
//           "name": "Emma D'Arcy",
//           "original_name": "Emma D'Arcy",
//           "popularity": 72.638,
//           "profile_path": "/9Zlmb7VmtVCxkLq5yqFFRRxCaED.jpg"
//         }
//       ]
//     },

const seasonSchema = new mongoose.Schema({
    air_date: {
        type: String,
        required: true
    },
    episodes: {
        type: Array,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    id:{
        type: Number,
        required: true
    },
    poster_path: {
        type: String,
        required: true
    },
    season_number:{
        type: Number,
        required: true
    },
    vote_average: {
        type: Number,
        required: true
    },
    showId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Season', seasonSchema);
