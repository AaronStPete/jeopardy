const BASE_URL = "http://jservice.io/"
let categoryArr = []
const CAT_URL = "http://jservice.io/api/clues?category="

angular
  .module("mainApp", [])
  .controller("mainController", ["$scope", "$http",($scope, $http) => {
    //////These 5 calls are to randomly pull 5 categories
    $http({
      method: "GET",
      url: BASE_URL + "api/random/",
    }).then(response => {
      let categoryID = response.data[0].category_id
      categoryArr.push(categoryID)
    })

    $http({
      method: "GET",
      url: BASE_URL + "api/random/",
    }).then(response => {
      let categoryID = response.data[0].category_id
      categoryArr.push(categoryID)
    })
    $http({
      method: "GET",
      url: BASE_URL + "api/random/",
    }).then(response => {
      let categoryID = response.data[0].category_id
      categoryArr.push(categoryID)
    })
    $http({
      method: "GET",
      url: BASE_URL + "api/random/",
    }).then(response => {
      let categoryID = response.data[0].category_id
      categoryArr.push(categoryID)
    })
    $http({
      method: "GET",
      url: BASE_URL + "api/random/",
    }).then(response => {
      let categoryID = response.data[0].category_id
      categoryArr.push(categoryID)
      console.log("Your Category IDs are: ", categoryArr);
    })
    ///////This next portion is to pull 6 random questions from each category
    $http({
      method: "GET",
      url: CAT_URL + (categoryArr[0]),
    }).then(response => {
      console.log(categoryArr[0])
      console.log(response)
    })
  }])