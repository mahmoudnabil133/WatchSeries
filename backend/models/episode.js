const mongoose = require('mongoose');
// {
//     "air_date": "2005-03-27",
//     "crew": [
//       {
//         "department": "Directing",
//         "job": "Director",
//         "credit_id": "5256cf2319c2956ff60952ca",
//         "adult": false,
//         "gender": 2,
//         "id": 44990,
//         "known_for_department": "Acting",
//         "name": "Peter Horton",
//         "original_name": "Peter Horton",
//         "popularity": 11.873,
//         "profile_path": "/6k6CV4kDL6BBvdCVY04jrJSiC2B.jpg"
//       },
//       {
//         "job": "Writer",
//         "department": "Writing",
//         "credit_id": "5256ced919c2956ff608e2e6",
//         "adult": false,
//         "gender": 1,
//         "id": 25539,
//         "known_for_department": "Writing",
//         "name": "Shonda Rhimes",
//         "original_name": "Shonda Rhimes",
//         "popularity": 10.496,
//         "profile_path": "/pIQbVxfjNwZ0DaAjo3q107nng1b.jpg"
//       }
//     ],
//     "episode_number": 1,
//     "guest_stars": [
//       {
//         "character": "Intern",
//         "credit_id": "5256cf2319c2956ff609522e",
//         "order": 521,
//         "adult": false,
//         "gender": 2,
//         "id": 165425,
//         "known_for_department": "Acting",
//         "name": "Sendhil Ramamurthy",
//         "original_name": "Sendhil Ramamurthy",
//         "popularity": 8.285,
//         "profile_path": "/uqiSpGFosTJeyxskfiIMQEuAlXJ.jpg"
//       },
//       {
//         "character": "Katie Bryce",
//         "credit_id": "5256cf2319c2956ff609526c",
//         "order": 535,
//         "adult": false,
//         "gender": 1,
//         "id": 93379,
//         "known_for_department": "Acting",
//         "name": "Skyler Shaye",
//         "original_name": "Skyler Shaye",
//         "popularity": 9.184,
//         "profile_path": "/mAQIT8r4YmDk8UnNVT7PZrCTS9F.jpg"
//       },
//       {
//         "character": "Gloria Savitch",
//         "credit_id": "56c248549251414a8f0006e4",
//         "order": 594,
//         "adult": false,
//         "gender": 1,
//         "id": 180602,
//         "known_for_department": "Acting",
//         "name": "Laura Carson",
//         "original_name": "Laura Carson",
//         "popularity": 1.419,
//         "profile_path": "/8P8LWZMoqwsbSbTWKSwW7x67ssK.jpg"
//       },
//       {
//         "character": "Tony Savitch",
//         "credit_id": "56c248d09251414a890006b8",
//         "order": 595,
//         "adult": false,
//         "gender": 2,
//         "id": 1520614,
//         "known_for_department": "Acting",
//         "name": "David Vegh",
//         "original_name": "David Vegh",
//         "popularity": 1.792,
//         "profile_path": null
//       },
//       {
//         "character": "Mr. Bryce",
//         "credit_id": "6068b417a14bef0079271245",
//         "order": 827,
//         "adult": false,
//         "gender": 0,
//         "id": 1178314,
//         "known_for_department": "Acting",
//         "name": "Randall Arney",
//         "original_name": "Randall Arney",
//         "popularity": 2.833,
//         "profile_path": null
//       },
//       {
//         "character": "Mrs. Bryce",
//         "credit_id": "6068b441f056d500784f4c5c",
//         "order": 828,
//         "adult": false,
//         "gender": 0,
//         "id": 2558596,
//         "known_for_department": "Acting",
//         "name": "Robbie Troy",
//         "original_name": "Robbie Troy",
//         "popularity": 1.194,
//         "profile_path": null
//       },
//       {
//         "character": "Nurse",
//         "credit_id": "6068b463ebb99d00598db22d",
//         "order": 829,
//         "adult": false,
//         "gender": 1,
//         "id": 1232417,
//         "known_for_department": "Acting",
//         "name": "Lynne Marie Stewart",
//         "original_name": "Lynne Marie Stewart",
//         "popularity": 3.716,
//         "profile_path": "/yVUrboiJ4Mqz7M4bqvUjwV8alf7.jpg"
//       },
//       {
//         "character": "Intern",
//         "credit_id": "6068b479124c8d0029fd5991",
//         "order": 830,
//         "adult": false,
//         "gender": 0,
//         "id": 1213166,
//         "known_for_department": "Acting",
//         "name": "Sean Palmer",
//         "original_name": "Sean Palmer",
//         "popularity": 0.671,
//         "profile_path": "/aYCpDfWxSRb3V1g3l4oNcRXdLUA.jpg"
//       },
//       {
//         "character": "Small Town Doc",
//         "credit_id": "6068b48c9ca759005781f390",
//         "order": 831,
//         "adult": false,
//         "gender": 2,
//         "id": 1785726,
//         "known_for_department": "Acting",
//         "name": "Richard Gilbert-Hill",
//         "original_name": "Richard Gilbert-Hill",
//         "popularity": 0.741,
//         "profile_path": "/kpRZ5EUO2djTbRvvbE6tT7NizjR.jpg"
//       },
//       {
//         "character": "Intern",
//         "credit_id": "6068b498ebb99d00702893f8",
//         "order": 832,
//         "adult": false,
//         "gender": 2,
//         "id": 113976,
//         "known_for_department": "Acting",
//         "name": "Grinnell Morris",
//         "original_name": "Grinnell Morris",
//         "popularity": 1.175,
//         "profile_path": null
//       },
//       {
//         "character": "Radiologist",
//         "credit_id": "6068b4d31e922500599be73b",
//         "order": 833,
//         "adult": false,
//         "gender": 0,
//         "id": 1692387,
//         "known_for_department": "Production",
//         "name": "Brad Pennington",
//         "original_name": "Brad Pennington",
//         "popularity": 0.359,
//         "profile_path": null
//       },
//       {
//         "character": "Nurse Vivian",
//         "credit_id": "6068b4e5f056d50040371481",
//         "order": 834,
//         "adult": false,
//         "gender": 0,
//         "id": 3036242,
//         "known_for_department": "Acting",
//         "name": "Noelle McCutchen",
//         "original_name": "Noelle McCutchen",
//         "popularity": 0.553,
//         "profile_path": null
//       },
//       {
//         "character": "Intern",
//         "credit_id": "6068b4f1124c8d0029fd5a4c",
//         "order": 835,
//         "adult": false,
//         "gender": 2,
//         "id": 1133449,
//         "known_for_department": "Acting",
//         "name": "Josh Bywater",
//         "original_name": "Josh Bywater",
//         "popularity": 1.528,
//         "profile_path": "/lmDyJXwTsqEOyD9MGiaUgWY2vU0.jpg"
//       },
//       {
//         "character": "Anesthesiologist",
//         "credit_id": "56c248fa9251414a970006b8",
//         "order": 953,
//         "adult": false,
//         "gender": 1,
//         "id": 25555,
//         "known_for_department": "Acting",
//         "name": "Kathleen M. Darcy",
//         "original_name": "Kathleen M. Darcy",
//         "popularity": 3.818,
//         "profile_path": "/9fW69ka21iW337OlVBchOd2KA7Z.jpg"
//       },
//       {
//         "character": "Nurse Tyler Christian",
//         "credit_id": "56c0d25c92514105da000467",
//         "order": 998,
//         "adult": false,
//         "gender": 2,
//         "id": 112878,
//         "known_for_department": "Acting",
//         "name": "Maurice J. Irvin",
//         "original_name": "Maurice J. Irvin",
//         "popularity": 4.009,
//         "profile_path": "/uVZj6xM9lKzmAZvP3CxoPrEfywe.jpg"
//       },
//       {
//         "character": "Nurse Bokhee",
//         "credit_id": "600606d71108a8003d92bc41",
//         "order": 1265,
//         "adult": false,
//         "gender": 1,
//         "id": 2646905,
//         "known_for_department": "Acting",
//         "name": "Bokhee An",
//         "original_name": "Bokhee An",
//         "popularity": 2.414,
//         "profile_path": null
//       },
//       {
//         "character": "Ellis Grey",
//         "credit_id": "5256ced719c2956ff608e1bc",
//         "order": 1299,
//         "adult": false,
//         "gender": 1,
//         "id": 20879,
//         "known_for_department": "Acting",
//         "name": "Kate Burton",
//         "original_name": "Kate Burton",
//         "popularity": 11.204,
//         "profile_path": "/rHnt0gTvarr492I1ZIYg8VNBdPn.jpg"
//       },
//       {
//         "character": "Senior Resident",
//         "credit_id": "634b49e1414291007aa16176",
//         "order": 1358,
//         "adult": false,
//         "gender": 2,
//         "id": 3742523,
//         "known_for_department": "Acting",
//         "name": "Billy Wood",
//         "original_name": "Billy Wood",
//         "popularity": 0.567,
//         "profile_path": null
//       },
//       {
//         "character": "Gloria's Brother",
//         "credit_id": "634b4fc5c8a2d4007a2fed9a",
//         "order": 1359,
//         "adult": false,
//         "gender": 0,
//         "id": 3742530,
//         "known_for_department": "Acting",
//         "name": "Joel Schmidt",
//         "original_name": "Joel Schmidt",
//         "popularity": 0.041,
//         "profile_path": null
//       },
//       {
//         "character": "Rectal Exam Patient (uncredited)",
//         "credit_id": "634b4fde20e6a5007d5be1d9",
//         "order": 1360,
//         "adult": false,
//         "gender": 0,
//         "id": 3742531,
//         "known_for_department": "Acting",
//         "name": "Martin Ighani",
//         "original_name": "Martin Ighani",
//         "popularity": 0.452,
//         "profile_path": null
//       },
//       {
//         "character": "Mr. Jones",
//         "credit_id": "6609b4446f43ec017aa8ec90",
//         "order": 1890,
//         "adult": false,
//         "gender": 2,
//         "id": 4626327,
//         "known_for_department": "Acting",
//         "name": "Gregory Erff",
//         "original_name": "Gregory Erff",
//         "popularity": 0.208,
//         "profile_path": null
//       }
//     ],
//     "name": "A Hard Day's Night",
//     "overview": "Meet Meredith Grey. Daughter of famous surgeon Ellis Grey and currently recovering from a one-night stand. She shoos away her evening's companion, saying she'll be late for her first day of work. She is a first year intern at Seattle Grace Hospital and is working alongside some colorful characters. Cristina Yang is a highly competitive Stanford graduate who befriends Meredith. George O'Malley is a quirky warm hearted man who learns a lesson or two on his first day. Izzie Stevens is a former model who doesn't get any special treatment on her first day. And Alex Karev is an arrogant jerk who misdiagnoses a patient on his first shift. Overseeing them is Miranda Bailey, (not-so-) affectionately dubbed 'The Nazi'. Meredith also gets a surprise when she realizes that her friend from the night before is a co-worker, and even worse, her boss.",
//     "id": 64383,
//     "production_code": "101",
//     "runtime": 43,
//     "season_number": 1,
//     "still_path": "/oO1c7BpValKw4PvyREWmwQxh56I.jpg",
//     "vote_average": 7.388,
//     "vote_count": 58
//   }
const episodeSchema = new mongoose.Schema({
    air_date: {
        type: String,
        required: true
    },
    crew: {
        type: Array,
        required: true
    },
    episode_number: {
        type: Number,
        required: true
    },
    guest_stars: {
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
    id: {
        type: Number,
        required: true
    },
    production_code: {
        type: String,
        required: true
    },
    runtime: {
        type: Number,
        required: true
    },
    season_number: {
        type: Number,
        required: true
    },
    still_path: {
        type: String,
        required: true
    },
    vote_average: {
        type: Number,
        required: true
    },
    vote_count: {
        type: Number,
        required: true
    },
    seasonId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Episode', episodeSchema);
