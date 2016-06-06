# Example: Embedding a Panintelligence Chart
Example code for embedding a [Panintelligence](http://www.panintelligence.com/) Chart.

The code in [`index.html`](https://github.com/dosaki/pi_embed_example/blob/master/index.html) should be simple enough but I have added inline comments to help you understand it.

# Instructions
## Step 1 - Get this repository
Clone this repository to a webserver (tomcat, apache, or iis)
```
git clone https://github.com/dosaki/pi_embed_example
```
or download the [zip file](https://github.com/dosaki/pi_embed_example/archive/master.zip) and extract it to the webserver.

## Step 2 - Edit your [`index.html`](https://github.com/dosaki/pi_embed_example/blob/master/index.html)

Change the value of `url` to your server's destination.
```javascript
var url = "http://localhost:8080/" //Change this to your server
```

Change the login details to the user you want to login as

```javascript
var username = "admin" //Change this to the user you want to login as
var password = "dashboard" //Change this to user's password
```

Change the chart ID in `chartFragment` (ex.: for chart `130`, it would be `#chart-filter/130__1`)

```javascript
var chartFragment = "#chart-filter/290__1" //Change 290__1 to the chart ID you want to see
```

## Step 3 - See your embedded chart
Access the your index page through your webserver and you'll find the embedded chart! :)

# Need more help?
For any questions, contact us at [support@panintelligence.com](mailto:support@panintelligence.com)
