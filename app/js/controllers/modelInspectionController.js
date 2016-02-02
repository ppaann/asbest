'use restrict';

asbest.controller('modelInspectionController', function($scope, $uibModalInstance){
  $scope.mockupPicCount = 5;
  $scope.inputItems = null;
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
  $scope.exam = null;
  $scope.exams=['ASB', 'Pb', 'RM', 'PAH'];

  $scope.onChooseExam = function(){
    $scope.inputItems = $scope.exams;
    console.log($scope.inputItems);
  }

  $scope.ok = function () {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
})