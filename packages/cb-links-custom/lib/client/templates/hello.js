Meteor.startup(function () {
Template.hello.helpers({
  nameOfUser: function () {
    if (Meteor.user()) {
      return Users.getDisplayName(Meteor.user());
    } else {
      return "You";
    }
  },
  categoriesArray: function(){
      return _.map(this.categories, function (categoryId) { // note: this.categories maybe be undefined
        return Categories.findOne(categoryId);
      });
    },
  categoryLink: function(){
      return getCategoryUrl(this.slug);
    }

});
});