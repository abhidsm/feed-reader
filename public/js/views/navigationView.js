define([
           "js/views/navigationItemView"
       ], function(NavigationItemView){
           var NavigationView = Backbone.View.extend(
               {
                   className: "row-fluid navigation",
                   
                   events: {
                   },
                   
                   initialize: function() {
                       this.navigationItems = ['Feed1', 'Feed2', 'Feed3', 'Feed4'];
                   },
                   
                   render: function(navigationItem) {
                       var self = this;
                       this.$el.html("");
                       _.each(this.navigationItems, function(item){
                                  var navigationItemView = new NavigationItemView({navigationItem: item, active: (navigationItem == item)});
                                  self.$el.append(navigationItemView.render().el);
                              });
                       return this;
                   }
                   
               });
           
           return NavigationView;
           
       });
