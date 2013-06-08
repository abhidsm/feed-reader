require(["js/collections/feeds"],function(Feeds){
	    describe("Feeds", function() {
                         beforeEach(function(){
                                        this.collection = new Feeds(FeedsFixture, {item: 'Feed1', parse: true});
                                    });
		         it("should have the correct url", function() {
                                expect(this.collection.url()).toEqual('/feeds?item=Feed1');
	                    });

		         it("should parse the response to create the models", function() {
                                expect(this.collection.length).toEqual(FeedsFixture.feed.item.length);
	                    });

		         it("should set the currentpage and items per page", function() {
                                expect(this.collection.currentPage).toEqual(1);
                                expect(this.collection.itemsPerPage).toEqual(3);
	                    });

		         it("should current page feeds", function() {
                                expect(this.collection.currentPageFeeds().length).toEqual(2);
	                    });

		         it("should increment the currentPage count and trigger the nextPage event on nextPage", function() {
                                var eventStub = sinon.stub(this.collection, 'trigger');
                                var currentPage = this.collection.currentPage;
                                this.collection.nextPage();
                                expect(this.collection.currentPage).toEqual(currentPage+1);
                                expect(eventStub).toHaveBeenCalledWith('nextPage');
                                eventStub.restore();
	                    });

		         it("should decrement the currentPage count and trigger the previousPage event on previousPage", function() {
                                var eventStub = sinon.stub(this.collection, 'trigger');
                                var currentPage = this.collection.currentPage;
                                this.collection.previousPage();
                                expect(this.collection.currentPage).toEqual(currentPage-1);
                                expect(eventStub).toHaveBeenCalledWith('previousPage');
                                eventStub.restore();
	                    });

		         it("should return the total pages count", function() {
                                this.collection.currentPage = 1;
                                this.collection.itemsPerPage = 1;
                                expect(this.collection.totalPage()).toEqual(2);
	                    });

		         it("should return true if the currentPage is first", function() {
                                this.collection.currentPage = 1;
                                expect(this.collection.isFirstPage()).toBeTruthy();
                                this.collection.currentPage = 2;
                                expect(this.collection.isFirstPage()).toBeFalsy();
	                    });

		         it("should return true if the currentPage is last", function() {
                                this.collection.itemsPerPage = 1;
                                this.collection.currentPage = 2;
                                expect(this.collection.isLastPage()).toBeTruthy();
                                this.collection.currentPage = 1;
                                expect(this.collection.isLastPage()).toBeFalsy();
	                    });
                     });
        });
