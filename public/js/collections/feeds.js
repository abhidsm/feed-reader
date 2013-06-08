define(['js/models/feed'],function(Feed){
           var Feeds = Backbone.Collection.extend(
               {
                   model: Feed,
                   url: function(){
                     return "/feeds?item="+this.item;
                   },

                   initialize: function(models,options) {
                       this.item = options.item;
                       this.currentPage = 1;
                       this.itemsPerPage = 3;
                   },

                   parse: function(response) {
                       return response.feed.item;
                   },
                   
                   currentPageFeeds: function(){
                       return this.models.slice((this.currentPage-1)*this.itemsPerPage, this.currentPage*this.itemsPerPage);
                   },

                   nextPage: function(){
                       this.currentPage = this.currentPage + 1;
                       this.trigger('nextPage');
                   },

                   previousPage: function(){
                       this.currentPage = this.currentPage - 1;
                       this.trigger('previousPage');
                   },

                   totalPage: function(){
                       return parseInt(this.models.length/this.itemsPerPage);
                   },

                   isFirstPage: function(){
                       return (this.currentPage == 1);
                   },

                   isLastPage: function(){
                       return (this.currentPage == this.totalPage());
                   }
                   
               });
           return Feeds;
       });
