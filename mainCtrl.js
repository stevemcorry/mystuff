angular.module('myApp').controller('mainCtrl', function($scope) {

$scope.allApartments = [{
  name: 'Stephen',
  complex: 'Centennial',
  perRoom: '2'+ " in the room"
}

];

$scope.addApt = function(name,complexName,perRoom){
  $scope.allApartments.push({
    name: name,
    complex: complexName,
    perRoom: perRoom + " in the room"
  });
  //resets all input values
  $scope.name = '';
  $scope.complexName = '';
  $scope.perRoom = '';
};








});
