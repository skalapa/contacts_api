Api.ai - sample webhook implementation.

This is a really simple webhook implementation that gets Api.ai classification JSON (i.e. a JSON output of Api.ai /query endpoint) and returns a fulfillment response.

More info about Api.ai webhooks could be found here: Api.ai Webhook

Deploy to:

Deploy to Heroku

What does the service do?

It's a simple echo service that takes resolvedQuery and action fields from the Api.ai JSON reponse and echoes them back in into speech and displayTest fields in the fulfillment JSON.
