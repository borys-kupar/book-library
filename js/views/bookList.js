window.BookListView = Backbone.View.extend({

    className:'row-fluid',

    initialize:function () {
        this.model.bind("reset", this.render, this);
    },

    render:function (eventName) {
        _.each(this.model.models, function (book) {
            $(this.el).append(new BookListItemView({model:book}).render().el);
        }, this);
        return this;
    }

});