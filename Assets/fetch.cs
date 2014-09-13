/*TwitterContextFactory twitterCtx = new TwitterContextFactory();

var searchResponse =
	await
		(from search in twitterCtx.Search
		 where search.Type == SearchType.Search &&
		 search.Query == "\"LINQ to Twitter\""
		 select search)
		.SingleOrDefaultAsync();

if (searchResponse != null && searchResponse.Statuses != null)
	searchResponse.Statuses.ForEach(tweet =>
	                                Console.WriteLine(
		"User: {0}, Tweet: {1}", 
		tweet.User.ScreenNameResponse,
		tweet.Text));
*/