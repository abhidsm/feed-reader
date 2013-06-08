define([
           'text!templates/feedTemplate.html'
           
       ], function(tmpl){
           var FeedView = Backbone.View.extend(
               {
                   className: "feed",
                   
                   template: _.template(tmpl),
                   
                   events: {
                   },
                   
                   initialize: function() {
                   },
                   
                   render: function() {
                       $(this.el).html(this.template(this.model.toJSON()));
                       return this;
                   }
                   
               });
           
           return FeedView;
           
       });
