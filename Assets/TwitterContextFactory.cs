using System.Configuration;
using LinqToTwitter;

static class TwitterContextFactory {
	public static TwitterContext CreateTwitterContext() {
		var xAuthAuthorizer = new SingleUserAuthorizer();
		var inMemoryCredentials = new XAuthCredentials();

		inMemoryCredentials.ConsumerKey = ConfigurationManager.AppSettings["ConsumerKey"];
		inMemoryCredentials.ConsumerSecret = ConfigurationManager.AppSettings["ConsumerSecret"];
		inMemoryCredentials.OAuthToken = ConfigurationManager.AppSettings["AccessToken"];
		inMemoryCredentials.AccessToken = ConfigurationManager.AppSettings["AccessTokenSecret"];

		xAuthAuthorizer.Credentials = inMemoryCredentials;
		var twitterContext = new TwitterContext(xAuthAuthorizer);
		return twitterContext;
	}
}
