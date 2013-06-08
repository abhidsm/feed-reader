require(["js/views/feedView", "js/models/feed"] ,function(FeedView, Feed){
	    describe("FeedView", function() {
		         beforeEach(function(){
                                        this.model = new Feed(FeedsFixture.feed.item[0]);
			                this.view = new FeedView({model: this.model});
		                    });

		         afterEach(function(){
		                    });

		         it("should fetch the feeds", function() {
			        this.view.render();
		                expect(this.view.$('img').attr('src')).toEqual('images/'+this.model.get('image'));
		                expect(this.view.$('.heading').text()).toEqual(this.model.get('heading'));
		                expect(this.view.$('.content').text()).toEqual(this.model.get('content'));
		            });

	             });
        });
