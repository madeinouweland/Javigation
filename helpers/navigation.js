var Navigation = function (startupView) {
    var self = this;

    this.navigate = function navigate(view) {
        if (view !== this.currentView) {
            self.loadView(view, true);
        }
    }

    this.loadView = function (view, pushHistory) {
        var contentframe = $("#content");
        contentframe.removeClass("slide");

        contentframe.load("Views/" + view + ".html", function () {
            self.currentView = view;
            if (!window.history.state) {
                $(window).on('popstate', self.back);
            }
            if (pushHistory) {
                window.history.pushState(view, null, "#" + view);
            }
            $.getScript("Views/" + view + ".js", function () {
                contentframe.addClass("slide");
            });
        });

    }

    this.back = function () {
        if (history.state) {
            var view = self.getView();
            self.loadView(view, false);
        }
    };

    this.getView = function () {
        var fragments = location.href.split('#');
        if (fragments && fragments.length === 2) {
            return fragments[1];
        } else {
            return startupView;
        }
    };

    this.loadView(this.getView(), true);
}