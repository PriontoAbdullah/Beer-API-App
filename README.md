
# Beer-API-APP

From a open-source REST API of different kinds of beer using HTML, CSS and Javascript to read the API and display it in an organized way. In addition, add in some sort of sorting, searching mechanic to the front-end.


## API Links

 - [Open Source API](https://www.programmableweb.com/api/punk-rest-api-v20)
 - [API Documentation](https://punkapi.com/documentation/v2)
 
  
## API Reference

#### Get all items

```http
  GET /api.punkapi.com/v2/${api_key}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `beers` | `string` | **Required**. Gets beers from the api |

#### Get item

```http
  GET /api.punkapi.com/v2/beers/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `abv_gt`      | `number` | Returns all beers with ABV greater than the supplied number |
| `abv_lt`      | `number` | Returns all beers with ABV less than the supplied number |
| `ibu_gt`      | `number` | Returns all beers with IBU greater than the supplied number |
| `ibu_lt`      | `number` | Returns all beers with IBU less than the supplied number|
| `ebc_gt`      | `number` | Returns all beers with EBC greater than the supplied number|
| `ebc_lt`      | `number` | Returns all beers with EBC less than the supplied number|


