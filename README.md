
# Express REST API

A simple Express REST api buid using Node.js

## How to Use the API

### Endpoints:
1. / : root URL (home url) - supports get method
2.  /user : to post the data - supports post method
3.  /{username}/users : to get your post data - supports get method

## Note
- your post data should have a field **userName**
- if you are posting a data via form make sure one of your input field has a name attribute so that u can fetch your post data later using endpoint 3

## Usage

### Using Axios
index.html
```
<!DOCTYPE  html>
<html  lang="en">
<head>
<meta  charset="UTF-8" />
<meta  name="viewport"  content="width=device-width, initial-scale=1.0" />

<title>Axios</title>

<!-- load the axios cdn -->
<script  src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

<!-- load our script -->
<script  src="./script.js"></script>
</head>
<body>
<h1>Axios</h1>
</body>
</html>
```


Lets define the variables
```
//script.js
const  BASE_URL  =  "https://altaf-node-rest-api.herokuapp.com/";

const  endpont1  =  "user/";

const  username  =  "altafshaikh"; //this can be any dynamic value

const  endpont2  =  `${username}/users/`;
```

Next, lets make a post Request
```
axios.post(BASE_URL  + endpont1, {
	firstName:  "altaf",
	lastName:  "shaikh",
	userName: username,
})

.then(function (response) {
	console.log(response);
})

.catch(function (error) {
	console.log(error);
});
```

Making Get request to see the Posted Data

```
axios
.get(BASE_URL  + endpont2)
.then(function (response) {
	// handle success
	console.log(response.data);
})
.catch(function (error) {
	// handle error
	console.log(error);
});
```
## Live Demo of this Project

[Live Working](https://altaf-node-rest-api.herokuapp.com/)

## Author

* **Altaf Shaikh** - *work by* - [ialtafshaikh](https://github.com/ialtafshaikh)

![altaf shaikh](https://raw.githubusercontent.com/ialtafshaikh/static-files/master/coollogo_com-327551664.png)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
