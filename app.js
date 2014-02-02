app = {};

app.initialize = function () {
    app.user = new User();
    app.indexViewModel = new IndexViewModel();
    app.customerViewModel = new CustomerViewModel();
    app.invoicesViewModel = new InvoiceViewModel();

    app.user.FullName("Max Zorin");
    app.user.UserName("mxz");
}