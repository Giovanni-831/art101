/*
* Author: Giovanni Lomeli <glomelim@ucsc.edu>
* created: Novermber 11, 2022
* License: Public Domain
*/

// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://yourapiendpoint.com/",
    // The data to send (will be converted to a query string)
    data: {
            // here is where any data required by the api
            //   goes (check the api docs)
            id: 123,
            api_key: "blahblahblah",
          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        console.log(data);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})

name:"limber"
url:"https://pokeapi.co/api/v2/ability/7/"
is_hidden:false
slot:1
name:"imposter"
url:"https://pokeapi.co/api/v2/ability/150/"
is_hidden:true
slot:3
base_experience:101
name:"ditto"
url:"https://pokeapi.co/api/v2/pokemon-form/132/"
height:3
rarity:5
name:"ruby"
url:"https://pokeapi.co/api/v2/version/7/"
rarity:5
name:"sapphire"
url:"https://pokeapi.co/api/v2/version/8/"
rarity:5
name:"emerald"
url:"https://pokeapi.co/api/v2/version/9/"
rarity:5
name:"firered"
url:"https://pokeapi.co/api/v2/version/10/"
rarity:5
name:"leafgreen"
url:"https://pokeapi.co/api/v2/version/11/"
rarity:5
name:"diamond"
url:"https://pokeapi.co/api/v2/version/12/"
rarity:5
name:"pearl"
url:"https://pokeapi.co/api/v2/version/13/"
rarity:5
name:"platinum"
url:"https://pokeapi.co/api/v2/version/14/"
rarity:5
name:"heartgold"
url:"https://pokeapi.co/api/v2/version/15/"
rarity:5
name:"soulsilver"
url:"https://pokeapi.co/api/v2/version/16/"
rarity:5
name:"black"
url:"https://pokeapi.co/api/v2/version/17/"
rarity:5
name:"white"
url:"https://pokeapi.co/api/v2/version/18/"
rarity:5
name:"black-2"
url:"https://pokeapi.co/api/v2/version/21/"
rarity:5
name:"white-2"
url:"https://pokeapi.co/api/v2/version/22/"
rarity:5
name:"x"
url:"https://pokeapi.co/api/v2/version/23/"
rarity:5
name:"y"
url:"https://pokeapi.co/api/v2/version/24/"
rarity:5
name:"omega-ruby"
url:"https://pokeapi.co/api/v2/version/25/"
rarity:5
name:"alpha-sapphire"
url:"https://pokeapi.co/api/v2/version/26/"
rarity:5
name:"sun"
url:"https://pokeapi.co/api/v2/version/27/"
rarity:5
name:"moon"
url:"https://pokeapi.co/api/v2/version/28/"
rarity:5
name:"ultra-sun"
url:"https://pokeapi.co/api/v2/version/29/"
rarity:5
name:"ultra-moon"
url:"https://pokeapi.co/api/v2/version/30/"
name:"quick-powder"
url:"https://pokeapi.co/api/v2/item/251/"
id:132
is_default:true
location_area_encounters:"https://pokeapi.co/api/v2/pokemon/132/encounters"
name:"transform"
url:"https://pokeapi.co/api/v2/move/144/"
name:"ditto"
order:214
past_types:
name:"ditto"
url:"https://pokeapi.co/api/v2/pokemon-species/132/"
slot:1
name:"normal"
url:"https://pokeapi.co/api/v2/type/1/"
weight:40
