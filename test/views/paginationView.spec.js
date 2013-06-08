require(["js/views/paginationView", "js/collections/feeds"] ,function(PaginationView, Feeds){
	    describe("PaginationView", function() {
		         beforeEach(function(){
                                        this.collection = new Feeds(FeedsFixture, {item: 'Feed1', parse: true});
			                this.view = new PaginationView({collection: this.collection});
		                    });

		         afterEach(function(){
		                    });

		         it("should show next page on click of next page icon", function() {
                                var nextPageStub = sinon.stub(this.collection, 'nextPage');
			        this.view.render();
                                this.view.$('.next-page').click();
		                expect(nextPageStub).toHaveBeenCalled();
                                nextPageStub.restore();
		            });

		         it("should show previous page on click of previous page icon", function() {
                                var previousPageStub = sinon.stub(this.collection, 'previousPage');
			        this.view.render();
                                this.view.$('.previous-page').click();
		                expect(previousPageStub).toHaveBeenCalled();
                                previousPageStub.restore();
		            });

	                 describe("PaginationView", function() {
                                      beforeEach(function(){
                                             this.firstPageStub = sinon.stub(this.collection, 'isFirstPage');
                                             this.lastPageStub = sinon.stub(this.collection, 'isLastPage');
                                                 });

                                      afterEach(function(){
                                             this.firstPageStub.restore();
                                             this.lastPageStub.restore();
                                                 });

		                      it("should hide the previous page icon if the current page is the first page", function() {
                                             this.firstPageStub.returns(true);
			                     this.view.render();
		                             expect(this.view.$('.previous-page').hasClass('hide')).toBeTruthy();
		                             expect(this.view.$('.next-page').hasClass('hide')).toBeFalsy();
		                         });

		                      it("should hide the next page icon if the current page is the last page", function() {
                                             this.firstPageStub.returns(false);
                                             this.lastPageStub.returns(true);
			                     this.view.render();
		                             expect(this.view.$('.previous-page').hasClass('hide')).toBeFalsy();
		                             expect(this.view.$('.next-page').hasClass('hide')).toBeTruthy();
		                         });

		                      it("should show both the next page icon and previous page icon if the current page is not first page and last page", function() {
                                             this.firstPageStub.returns(false);
                                             this.lastPageStub.returns(false);
			                     this.view.render();
		                             expect(this.view.$('.previous-page').hasClass('hide')).toBeFalsy();
		                             expect(this.view.$('.next-page').hasClass('hide')).toBeFalsy();
		                         });
	                          });
	             });
        });
