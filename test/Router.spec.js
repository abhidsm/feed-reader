require([
            'js/Router',
            'js/views/mainContentView'
	],function(AppRouter, MainContentView) {
	    describe("App Router", function() {
		         beforeEach(function(){
			                FeedReader.appRouter.navigate("test",{trigger: true});
                                        this.renderStub = sinon.stub(MainContentView.prototype, 'render');
		                    });

		         afterEach(function(){
                                       this.renderStub.restore();
		                    });
                         it("should append header and main content view", function() {
                                this.renderStub.returns(new MainContentView());
                                var newAppRouter = new AppRouter();
                                expect($('header').length).toEqual(1);
                                expect(this.renderStub).toHaveBeenCalled();
                            });
                         
	             });
        });
