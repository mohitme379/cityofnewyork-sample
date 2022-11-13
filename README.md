# Authentication

- Singup with *[data.cityofnewyork.us](http://data.cityofnewyork.us)*
- Needs App Token to authenticate
- Two ways to authenticate
    - Basic HTTP (App token is set as ***X-App-Token*** in the header of the request)
    - Oauth - [*https://dev.socrata.com/docs/authentication.html*](https://dev.socrata.com/docs/authentication.html)
- Authenticated users can get 1000 requests per rolling hour

# APIs and Data

- Data is present from 2010 - 2021 (yearly basis)
- Different year’s data have different endpoint
    - Examples
        
        2010 - [https://dev.socrata.com/foundry/data.cityofnewyork.us/kswi-37bp](https://dev.socrata.com/foundry/data.cityofnewyork.us/kswi-37bp)
        
        2011 - [https://dev.socrata.com/foundry/data.cityofnewyork.us/k7nh-aufb](https://dev.socrata.com/foundry/data.cityofnewyork.us/k7nh-aufb)
        
- Dataset fields might differ from endpoint to endpoint
- SoQL is used for quering the data
    - [https://dev.socrata.com/docs/queries](https://dev.socrata.com/docs/queries/)
    - Example
        
        [data.cityofchicago.org/resource/f7f2-ggz5.json?$limit=100&$offset=100](https://data.cityofchicago.org/resource/f7f2-ggz5.json?$limit=100&$offset=100)
        
- All requests work via GET parameters
