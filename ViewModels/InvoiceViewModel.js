var InvoiceViewModel = function () {
    var self = this;
    this.PageName = ko.observable("Invoices");
    this.Invoices = ["$15000", "$56", "$6544", "$56", "$6544"];
    this.UserName = ko.computed(function () {
        return app.user.UserName();
    });
};