define([
           'js/views/navigationView',
           'js/views/feedsView'
           
       ], function(NavigationView, FeedsView){
           var MainContentView = Backbone.View.extend(
               {
                   className: "main-content row-fluid",

                   events: {
                   },
                   
                   initialize: function() {
                   },
                   
                   render: function(navigationItem) {
                       this.navigationView = new NavigationView();
                       this.feedsView = new FeedsView({item: navigationItem});
                       this.$el.html("");
                       this.$el.append(this.navigationView.render(navigationItem).el);
                       this.$el.append(this.feedsView.render().el);
                       return this;
                   }
                   
               });
           
           return MainContentView;
           
       });
