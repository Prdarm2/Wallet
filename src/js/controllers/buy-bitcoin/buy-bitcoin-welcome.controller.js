'use strict';

(function () {

angular
  .module('bitcoincom.controllers')
  .controller('buyBitcoinWelcomeController', buyBitcoinWelcomeController);

  function buyBitcoinWelcomeController(kycFlowService) {
    var vm = this;

    vm.getStarted = getStarted;
    vm.goBack = goBack;

    function getStarted() {
      
    }

    function goBack() {
      kycFlowService.goBack();
    }
  }


})();
