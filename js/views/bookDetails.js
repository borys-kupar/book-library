window.BookView = Backbone.View.extend({

    template:_.template($('#tpl-book-details').html()),

    render:function (eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }

});