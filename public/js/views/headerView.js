define([
           'text!templates/headerTemplate.html'
           
       ], function(tmpl){
           var HeaderView = Backbone.View.extend(
               {
                   tagName: "header",
                   
                   template: _.template(tmpl),
                   
                   events: {
                   },
                   
                   initialize: function() {
                   },
                   
                   render: function() {
                       $(this.el).html(this.template());
                       return this;
                   }
                   
               });
           
           return HeaderView;
           
       });
