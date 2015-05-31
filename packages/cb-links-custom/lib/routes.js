Meteor.startup(function() {
	Router.route('/about', {
	   name: 'about',
	    template: 'about'
	});
});

