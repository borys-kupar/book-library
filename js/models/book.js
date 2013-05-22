window.Book = Backbone.Model.extend({
    urlRoot:"../books"
});

window.BookCollection = Backbone.Collection.extend({
    model:Book,
    url:"../books.json"
});