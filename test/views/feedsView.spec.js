require(["js/views/feedsView", "js/collections/feeds"] ,function(FeedsView, Feeds){
	    describe("FeedsView", function() {
		         beforeEach(function(){
			                this.view = new FeedsView({item: 'Feed1'});
                                        this.fetchStub = sinon.stub(Feeds.prototype, 'fetch');
		                    });

		         afterEach(function(){
                                       this.fetchStub.restore();
		                    });

		         it("should fetch the feeds", function() {
			        this.view.render();
		                expect(this.fetchStub).toHaveBeenCalled();
		            });

		         it("should fetch the feeds", function() {
                                var feeds = new Feeds(FeedsFixture, {parse: true});
                                this.fetchStub.yieldsTo('success', feeds);
			        this.view.render();
                                console.log(feeds.currentPageFeeds().length);
		                expect(this.view.$('.feed').length).toEqual(FeedsFixture.feed.item.length);
		            });

		         it("should render pagination view", function() {
                                var feeds = new Feeds(FeedsFixture, {parse: true});
                                this.fetchStub.yieldsTo('success', feeds);
			        this.view.render();
		                expect(this.view.$('.pagination').length).toEqual(2);
		            });
                         

	             });
        });
