(function (window) {
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';

  var App = window.App;

  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  
  var formHandler = new FormHandler(FORM_SELECTOR);


  

  formHandler.addSubmitHandler(function (data) {

  });

})(window);