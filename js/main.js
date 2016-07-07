(function () {
  'use strict';

angular
.module("TodoList", [])
.controller("Todo",  function Todos() {
	var vm = this;
	vm.list = [];

	vm.submitForm = function(){
      console.log(this.form);
      var newobj = { "content": vm.form.content, "isComplete": false, "isActive":true };
      vm.list.push(newobj);

      this.form = "";
    }
});
})();



