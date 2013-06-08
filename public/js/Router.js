define([
           'js/views/headerView',
           'js/views/mainContentView'
       ],function(HeaderView, MainContentView){
           var AppRouter = Backbone.Router.extend(
               {
                   routes: {
                       '' :  'feed1',
                       'Feed1': 'feed1',
                       'Feed2': 'feed2',
                       'Feed3': 'feed3',
                       'Feed4': 'feed4'
                   },
                   initialize: function(){
                       var headerView = new HeaderView();
                       this.mainContentView = new MainContentView();
                       $('body').html("");
                       $('body').append(headerView.render().el);
                       $('body').append(this.mainContentView.render('Feed1').el);
                   },

                   feed1: function() {
                       this.mainContentView.render('Feed1');
                   },

                   feed2: function() {
                       this.mainContentView.render('Feed2');
                   },

                   feed3: function() {
                       this.mainContentView.render('Feed3');
                   },

                   feed4: function() {
                       this.mainContentView.render('Feed4');
                   }
               });
           return AppRouter;
       });
