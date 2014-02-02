var IndexViewModel = function () {
    var self = this;
    this.AppName = ko.observable("Office Space");
    this.UserFullName = ko.computed(function () {
        return app.user.FullName();
    });
};