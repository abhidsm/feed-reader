require(["js/views/mainContentView"] ,function(MainContentView){
	    describe("MainContentView", function() {
		         beforeEach(function(){
			                this.view = new MainContentView();
			                this.view.render();
		                    });

		         it("should render navigation view", function() {
		                expect(this.view.$('.navigation').length).toEqual(1);
		            });

		         it("should render feeds view", function() {
		                expect(this.view.$('.feeds').length).toEqual(1);
		            });
	             });
        });
