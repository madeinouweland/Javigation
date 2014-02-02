var CustomerViewModel = function() {
  var self = this;
  this.PageName = ko.observable("Customers");
  this.Customers = ["Dell","Microsoft","Apple"];
};