  'use strict';

angular.module("TodoList").controller("Todo", function(API) {

	var vm = this;
	vm.counter =0;
	
	vm.remaining = function(){
		vm.counter=0;
		vm.list.forEach(function(item){
			console.log(item.isComplete);
		if (item.isComplete === false){
			vm.counter ++;
		};
	  });
	}

	if (API.getList() === null) {
		vm.list = [];
	}
	else {
	vm.list = API.getList();
	vm.remaining();
	}

	vm.delete = function(item){
		//console.log(item);
		var del = vm.list.indexOf(item);
		//console.log(del);
		vm.list.splice(del,1);
		API.saveList(vm.list);
		vm.remaining();
	}

	vm.deleteComp = function(){
		
		vm.list.forEach(function(item){
			if (item.isComplete === true){
			var del = vm.list.indexOf(item);
			vm.list.splice(del, vm.list.length);
			API.saveList(vm.list);
			vm.remaining();
			};
		});
	}

	vm.completed = function(item) {
		console.log(item);
        if (item.isComplete === false){
        	item.isComplete = true;
        }
        else if (item.isComplete === true){
        	item.isComplete = false;
        };
        vm.remaining();
	}

	vm.active = function(isComplete) {
		console.log(isComplete);
	}

	vm.submitForm = function(){
     // console.log(this.form);
      var newobj = { "content": vm.form.content, "isComplete": false };
      vm.list.push(newobj);
      API.saveList(vm.list);

      this.form = "";
      vm.remaining();
    }
});



