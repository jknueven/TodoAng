'use strict';

angular.module('TodoList').factory('API', function($http){

    function getList(){
      var todos = JSON.parse(localStorage.getItem('todos'))
       return todos;


    };

    function saveList(list){
        var list = JSON.stringify(list);
        localStorage.setItem('todos',list);

        return;
    };
	

  	return {
    	getList: getList,
        saveList: saveList,
  	};
});
