(function () {
	'use strict';

	angular
		.module('sampleApp')
		.controller('MessagesController', MessagesController);

	MessagesController.$inject = ['MessagesService'];
	function MessagesController(MessagesService) {
		var vm = this;

		vm.messages = MessagesService.getMessages(vm).all;

		vm.addMessage = function () {
			MessagesService.addMessage(vm.newMessageText, vm.messages);
			vm.newMessageText = '';
		};
	}
})();