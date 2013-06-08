define([
           'text!templates/paginationTemplate.html'
           
       ], function(tmpl){
           var PaginationView = Backbone.View.extend(
               {
                   className: "pagination",
                   
                   template: _.template(tmpl),
                   
                   events: {
                       'click .next-page': 'nextPage',
                       'click .previous-page': 'previousPage'
                   },
                   
                   initialize: function() {
                   },
                   
                   render: function() {
                       $(this.el).html(this.template({currentPage: this.collection.currentPage, totalPage: this.collection.totalPage()}));
                       this.updateNavigationButtons();
                       return this;
                   },

                   nextPage: function(){
                       this.collection.nextPage();
                   },

                   previousPage: function(){
                       this.collection.previousPage();
                   },

                   updateNavigationButtons: function(){
                       if(this.collection.isFirstPage()){
                           this.$('.previous-page').addClass('hide');
                           this.$('.next-page').removeClass('hide');
                       }else if(this.collection.isLastPage()){
                           this.$('.previous-page').removeClass('hide');
                           this.$('.next-page').addClass('hide');
                       }
                   }
                   
               });
           
           return PaginationView;
           
       });
