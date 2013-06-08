require(["js/views/navigationView", "js/views/navigationItemView"] ,function(NavigationView, NavigationItemView){
	    describe("NavigationView", function() {
		         beforeEach(function(){
			                this.view = new NavigationView();
                                        this.renderStub = sinon.stub(NavigationItemView.prototype, 'render');
		                    });

		         afterEach(function(){
                                       this.renderStub.restore();
		                    });

		         it("should render the navigation item view", function() {
                                this.renderStub.returns(new NavigationItemView({}));
			        this.view.render();
		                expect(this.renderStub).toHaveBeenCalled();
		            });

	             });
        });
