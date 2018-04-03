const BASE_URL = "http://jservice.io/"
let categoryArr = []
const CAT_URL = "http://jservice.io/api/clues?category="
let cat1="";
let cat2="";
let cat3="";
let cat4="";
let cat5="";


angular
  .module("mainApp", [])
  .controller("mainController", ["$scope", "$http",($scope, $http) => {
    //////These 5 calls are to randomly pull 5 categories
    $http({
      method: "GET",
      url: BASE_URL + "api/random/",
    }).then(response => {
      cat1 = response.data[0].category_id
    })

    $http({
      method: "GET",
      url: BASE_URL + "api/random/",
    }).then(response => {
      cat2 = response.data[0].category_id
    })
    $http({
      method: "GET",
      url: BASE_URL + "api/random/",
    }).then(response => {
      cat3 = response.data[0].category_id
    })
    $http({
      method: "GET",
      url: BASE_URL + "api/random/",
    }).then(response => {
      let cat4 = response.data[0].category_id
    })
    $http({
      method: "GET",
      url: BASE_URL + "api/random/",
    }).then(response => {
      cat5 = response.data[0].category_id
    })
    /////This next portion is to pull 6 random questions from each category
    $http({
      method: "GET",
      url: CAT_URL + cat1,
    }).then(response => {
      console.log(CAT_URL + cat1)
      console.log(response)
    })
  }])