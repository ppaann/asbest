'use restrict';

asbest.controller('modelInspectionController', function($scope, $uibModalInstance){
  $scope.mockupPicCount = 5;
  $scope.items = [
  'Lorem ipsum.',
  'Accusantium, cumque!',
  'Perferendis, hic!',
  'Doloremque, quo.',
  'Iste, nemo.',
  'Officiis, culpa.',
  'Explicabo, cumque.',
  'Ratione, sint.',
  'Perspiciatis, ea.',
  'Asperiores, debitis!',
  'Ipsam, error.',
  'Laborum, temporibus!',
  'Rem, pariatur.',
  'Voluptates, recusandae.',
  'Sequi, eaque.',
  'Nostrum, accusamus.',
  'Illo, facere!',
  'Quaerat, voluptas.',
  'Modi, distinctio?',
  'Fugiat, dolores?',
  'Nemo, inventore.',
  'Autem, animi.',
  'Quae, illum.',
  'Esse, placeat.',
  'Voluptatum, sequi?',
  'Nisi, inventore!',
  'Ipsam, ipsum.',
  'Quae, minus.',
  'Repellat, quod.',
  'Quidem, saepe!'
  ];


  $scope.ok = function () {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
})