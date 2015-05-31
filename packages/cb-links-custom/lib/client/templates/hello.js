Meteor.startup(function () {

	getCategoryUrl = function(slug){
	 return Telescope.utils.getSiteUrl()+'category/'+slug;
	};

	Template.hello.helpers({
	  nameOfUser: function () {
	    if (Meteor.user()) {
	      return Users.getDisplayName(Meteor.user());
	    } else {
	      return "You";
	    }
	  },
	  categories: function() {
	   	return Categories.find({}, {sort: {order: 1, name: 1}});;
       },
	  categoryLink: function(){
	      return getCategoryUrl(this.slug);
	   }

	});
});