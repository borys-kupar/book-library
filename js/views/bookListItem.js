window.BookListItemView = Backbone.View.extend({

    className:'span4',

    template:_.template($('#tpl-book-list-item').html()),

    render:function (eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }

});