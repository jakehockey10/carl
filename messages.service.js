(function() {
'use strict';

	angular
		.module('sampleApp')
		.factory('MessagesService', MessagesService);

	MessagesService.$inject = ['$firebaseArray'];
	function MessagesService($firebaseArray) {
		var service = {
			getMessages: getMessages,
			addMessage: addMessage
		};

		var ref = new Firebase("https://crackling-fire-1986.firebaseio.com");
		
		return service;

		////////////////
		function getMessages(vm) {
			return {
				all: $firebaseArray(ref.child('messages'))
			}
		}
		
		function addMessage(text, messages) {
			messages.$add({ text: text });
		}
		
	}
})();
