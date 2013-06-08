define([
           'text!templates/navigationItemTemplate.html'
           
       ], function(tmpl){
           var NavigationItemView = Backbone.View.extend(
               {
                   className: "span3 tab",
                   
                   template: _.template(tmpl),
                   
                   events: {
                       'click': 'navigate'
                   },
                   
                   initialize: function(options) {
                       this.navigationItem = options.navigationItem;
                       this.active = options.active;
                   },
                   
                   render: function() {
                       $(this.el).html(this.template({navigationText: this.navigationItem}));
                       if(this.active){
                           this.$('span').addClass('active');
                       }else{
                           this.$('span').removeClass('active');
                       }
                       return this;
                   },
                   
                   navigate: function(){
                       FeedReader.appRouter.navigate("#"+this.navigationItem, {trigger: true});
                   },

                   updateNavigation: function(router, route, param){
                       console.log(route);
                   }
                   
               });
           
           return NavigationItemView;
           
       });
