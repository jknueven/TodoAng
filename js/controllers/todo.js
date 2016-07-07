  'use strict';

angular.module("TodoList").controller("Todo", function(API) {

	var vm = this;
	if (API.getList() === null) {
		vm.list = [];
	}
	else {
	vm.list = API.getList();
	}

	vm.delete = function(item){
		console.log(item);
		var del = vm.list.indexOf(item);
		console.log(del);
		vm.list.splice(del,1);
		API.saveList(vm.list);
	}

	vm.submitForm = function(){
      console.log(this.form);
      var newobj = { "content": vm.form.content, "isComplete": false, "isActive":true };
      vm.list.push(newobj);
      API.saveList(vm.list);

      this.form = "";

    }
});



