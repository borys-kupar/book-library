var AppRouter = Backbone.Router.extend({

    routes:{
        "":"list",
        "books/:id":"bookDetails"
    },

    list:function () {
        this.bookList = new BookCollection();
        this.bookListView = new BookListView({model:this.bookList});
        var self = this;
        this.bookList.fetch({success: function() {
            $('#content').html(self.bookListView.render().el);
        }});
        
    },

    bookDetails:function (id) {
        this.book = new Book({id: id});
        this.bookView = new BookView({model:this.book});
        var self = this;
        this.book.fetch({success: function() {
            $('#content').html(self.bookView.render().el);
        }});
    }
});

var app = new AppRouter();
Backbone.history.start();