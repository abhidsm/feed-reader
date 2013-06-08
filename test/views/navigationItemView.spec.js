require(["js/views/navigationItemView"] ,function(NavigationItemView){
	    describe("NavigationItemView", function() {
		         beforeEach(function(){
                                        this.navigateStub = sinon.stub(FeedReader.appRouter, 'navigate');
			                this.view = new NavigationItemView({navigationItem: 'Feed1', active: true});
			                this.view.render();
		                    });

		         afterEach(function(){
                                       this.navigateStub.restore();
		                    });

		         it("should navigate to the corresponding route on click", function() {
                                this.view.$el.click();
		                expect(this.navigateStub.getCall(0).args[0]).toEqual('#Feed1');
		            });

		         it("should update the navigation on route change", function() {
		                expect(this.view.$('span').hasClass('active')).toBeTruthy();
			        this.view = new NavigationItemView({navigationItem: 'Feed2', active: false});
			        this.view.render();
		                expect(this.view.$('span').hasClass('active')).toBeFalsy();
		            });
	             });
        });
