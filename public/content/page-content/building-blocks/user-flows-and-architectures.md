# Userflows and Architectures
Most userflows can be created using the three large architecture elements discussed in the section about [architectures](/architectures). Here we walk through the architecture elements for each of the userflows previously discussed in the section that listed [userflows](/userflows).

### Login
The front-end displays two text fields for accepting a username and a password. The text in the password field will be veiled to stop people from reading the password from the screen if they happen to be behind the user.

The front-end sends these two elements to the back-end which then looks up the hash of the stored password from a database for the given username. A hash is a cryptographic method that is able to convert a plainstring password to another string in such a way that the function will always provide the same string given the same plainstring password, but for which a reverse function is hard to find, meaning it is very hard to covert the hash string back to the plainstring password. This hashing is done to make it harder for hackers to simply steal the data in a database and directly use the passwords ther. If the hash of the password provided by the user matches the hash of the password from the database then the back-end responds with a success response to the front-end. If the passwords don't match or the username was not not found in the database, the back-end will send a failure message as a response to the request.

If the username and password were successful then the front-end will navigate to the landing page. If the username and password challenge failed then the front-end will display an error message and ask the user to try again.

### Signup
This flow is very similar to the login flow from the point of view of the front-end. The front-end will display text fields in order to accept a username and password. The front-end may display other text fields that can accept more inputs from the user such as their name, affiliation, contact information etc.

The front-end will then wrap this information into a request and send it to the application's /signup address. The back-end will first look to see whether the username has already been assigned. If it has then it will respond to the server with a failure and a message to ask the user to attempt signing in with another username. If the username is unique then it will add the username, the hashed password and the other information, if provided, to the database and respond to the front-end with a success response.

If the response from the back-end was that of a success then the front-end will inform the user of the same, but if it were that of a failure then it can disply the user to try with another username.

An interesting use of a the controller in this user journey is that of checking the password strength. Usually, checking the strength of a password involves deterministic rules such as checking the password length, a inclusing of certain characters such as number, lower and upper case characters and non alphanumeric characters. Checking these is fairly simple and lightweight. These can be implemented in the controller of the front-end, without the need to rely on the back-end to check the strength of the password.

### Forgot Credentials
If the user is not able to remember their login credentials they will be able to reset them after clicking a 'forgot credentials' link that is displayed by the front-end.

There are many mechanisms here for the user to safely retrieve their account. One of which is being challenged by well-known questions that they had earlier provided information for. These usually are personal questions that have answers that are not easy for others to guess or derive. The answers for these are stored in a database. In this flow when the user first clicks the 'forgot credentials' button, the front-end requests the back-end for challenge questions. The back-end retrieves the questions for the given user and sends them to the front-end as a response. The front-end displays the questions to the user and provides an input field for the user to enter their answers. The front-end then sends these responses to the back-end. The back-end retrieves the answers for the given questions and sees if they match with the user's answers. If they do then the user is sent an email which contains a unique link to a page where they can change their passwords.

### Wizards
Wizards are flows that may or may not change the order or choice of questions based on previous answers.

If the set of questions asked are static then the flow is simple, the front-end sends the answers to the back-end, the back-end stores them and tell the front-end the next set of questions to display.

If the questions change based on previous answers then the back-end will have to be a little more sophisticated when choosing the next set of answers. 

### App Navigation
Navigation inside a application is a good example of the work a controller performs. Usually the application will move to another page or screen based on a button click that explicitly informs the applcation of the user's intention to move to the other screen or because of some implicit action, such as a redirect after a successful payment.

When the application navigates to another screen, the controller may request the back-end for more data with which to populate the given page.

### Search
The front-end displays a text box into which a user can enter a search term or string. The front-end sends this this string to the back-end which uses an index to find the entities that match the best with the string. 

To explain how this happens on the front-end and back-end, we will take document search as an example. Let's assume the user wants to find all documents with the term 'tea' in it. The user will enter the word 'tea' into the search text box and click on the search button. The front-end will wrap up the search term into a request and send it the back-end with the term as parameters. The back end will have access to an index that will have a key 'tea' and have a list of all documents that have that word linked to that key. To make the set of documents more relevant the search algorithm may include ranking algorithms that will return the list of documents ordered by their ranks. One simple example of ranking could be to order the documents according to the number of mentions of the word 'tea' in them.

To do the search efficiently that data structure - the index - should have been created at an earlier point in time. It is a non-trivial exercise and can take anything from a few minutes to hours to create depending on the type and granularity of the indexing required. Once it is created it is stored in a database. In fact there are databases that specialize in index creations and the even performing the search when given a string. Examples are Solr, and Elastic Search.

The end result of the search is a list of zero or more documents or entities that the implemented search algorithm deems relevant given the search string. The list and the documents or entities contained within them are sent back to the front-end as the response to the search request.

The front-end will display the results to the users.

An interesting variation to this flow is that of 'search-on-edit.' In this flow instead of waiting for the user to click the search button before perfoming the search, the search is performed each time the search term is edited. This entails sending a request to the back-end for each edit of the serach term.

**Pagination**
Depending on the list of entities the search is performed on and the search term, the number of entities can range from few that can fit on a page to many that can be hard to display and scroll through. To make it easier the front-end will display only a few search results at a time. If the user does not find what they were looking for from within those results, they are provided a button that will request the next set of results. There is an implementation choice to be made here for the developer: should all the results be provided to the front-end by the back-end during the first search or should the results be sent in batches, such that when the user requests a new set of results the front-end forwards that request to the back-end and gets served with the next batch of results. In the former, the front-end stores the all of results in the model, but the view will only display results from a range. While this may be faster when moving between batches since there is no need for network requests, the initial request can take time to perform given the potentially large amounts of data that will have to be retrived in the beginning. The other drawback of this method is that most of this data may come to no utility given that if the ranking mechanism of the search algorithm peforms well enough that most users find their relevent entity in the first batch itself, then on average most users will not be using the rest of the search results.

In the latter method - batches of search results are requested from the back-end on request - most of the cons of the first method are addressed: the intial batch will be small therefore fast, and since users can request most results if needed, most of what is downloaded would naturally have utility. The only drawback is that between batches there would have to be some extra time spent. Also, since the server has to be stateless, the search would have to rerun on the back-end for each batch and only the necessary batch would sent to the front. However, on average users would not necessarily move to the next page and find what they are looking for on the first page itself, the number of searches would still remain small. Including cacheing may also speed up the process. Cacheing is where the back-end stores a copy of the search results temporarily. This avoids the need for another database lookup, but it comes with its own set of problems that we discuss [here]().

### Sort
Assuming the search entities have some attributes that allow for natural ordering between them the controller of the front-end can sort these entities without the need for the back-end. Users usually can choose which attribute of the entities they want the sort to be done on.

Performing sort on the front-end is only possible if the entire set of search results are available in the front-end. This means that if pagination is used then the sort will have to performed at the back-end before the results are split into pages and sent to the front.

If the sort is performed on the back-end, the request sent by the front-end will of the form

```JSON
{
    "search-term": "abcd",
    "sort-attribute": "price",
    "order": "ascending"
}
```

### Filters
In ways filters are very similar to search. They help choose entities that possess certain attributes. The front-end displays the attributes and the possible values on which these searches can be performed on. The choice of performing the filter action on the front-end or the back-end is very similar to the choice for whether sort should be performed on the front-end or back-end.

When using filters, user have the ability to choose multiple values from the same or more filter types. Here the filtering mechanism has a choice: does the filter do an AND operation or an OR operation. To explain this, let's take and example. If we are trying to perform a filter on clothing, and the filter type if that of colour. If the use chooses 'red' and 'black', should only clothes that have 'red' and 'black' in their colour attributes be shown or should clothes that have at least either 'red' or 'black' in their colours attributes. This choice can be made from attribute to attribute according to the application designer or developer.

If the filter is performed on the back-end the request from the front-end will look something like
```JSON
{
    "search-term": "shirts",
    "filter-attributes": [
        {
            "filter-attribute-name": "colour",
            "filter-values": [
                "blue",
                "red"
            ]
        },
        {
            "filter-attribute-name": "pattern",
            "filter-values": [
                "plain",
                "striped"
            ]
        }
    ]
}
```

### Add to cart and checkout
The cart is a memory structure that stores identifiers of the objects that the users is interested in buying or executing a transaction on. In most cases it is as simple as storing this information locally as an array on the front-end's controller. But carts can be implemented in more complex ways. To provide more utility to the user, such that the cart is linked to their account and regardless of whichever the device the user is using the application from, the cart is updated, this cart information will have to stored on the back-end. That means there is a place on the database where this information is stored for the particular user.

Checkout is a slightly more complicated flow, that more often than not will involve third-party integration (payment gateway) for payments. Implementing your own payment gateway can be a very complicated process due to laws and standards of APIs that have to meant when dealing with money and for most companies it makes sense to use third-party solutions. When the user is ready to checkout they click a button on the front-end to start the process. From here there are many steps that take place.
1. The final bill is generated by the back-end, after applying any discounts. The delivery details are collected from the user throught the front-end.
2. The items that the user has requested is put on hold for a fixed amount of time such that the same item cannot be bought by another user. Assume a case where there is only one of a particular item left and two users so happen to have these items on their cart and are starting the checkout process. If we dont block the second user from starting the checkout process and only remove the item from the inventory after the payment then the following scenario can happen: user 1 can start the payment process and while the bank is processing the payment, user 2 also starts the payment process. If user 1's payment goes through, the application will have to suddenly stop processing user 2's payment, which can be especially jarring to user 2 since they had spent quite some time filling in their payment details only to be told the item was out of stock. Therefore, it can be much smoother to hold items off the inventory once the checkout process starts until some timeout or till a successful payment, at which point the item will anyway be removed from the inventory.
3. To perform the payment the front end will redirect the user to the third-party payment application where the user can pay for the bill. When this redirect occurs the merchant application that you were buying your items from temporarily looses control over the pages the users sees by handing over control to the payment gateway. Once the payment is processed the payment gateway will handover control back to the merchant application.

This is an interesting case, where two applications, neither of which have complete control, work in tandem and confidence to complete the entire user's journey.

### Customer service

### Maps
To perform some reductionism, maps are just a method of displaying data. This data is that of shapes that represent roads, buildings and other physical features found in the real world (or even [a fictional world](lotrproject.com/map/)). When traditionally viewing a location on paper a user would have choices of looking at the location from different levels of ganularity. For example, they can view the location on a map of the whole world, at the country level, province level or even a city level. For each of these granularities the amount of detail shown per square meter of the real world increases. Since the amount of space is limited and the grosser granularities only a few prominent features are shown.

This follows digital maps too. A user can zoom in on to smaller represented areas and as they do that more details can appear on the map for that area.

One option is to download the entire detailed map at one go and as the zooming-in happens more details can be shown, where each detail has a corresponding zoom value at which they are shown. The second option is for the front-end to request the richer information for the current area and zoom-value from the back-end. For very large maps, especially maps at a city level or larger it makes sense to implement the latter method. 

For every zoom level a portion of the map called a tile is stored in a database. Tile can be queried for using the latitude, longitude and zoom level. The same system works when the latitude and longitude changes for a given zoom level. In other words, when panning.

### Create and manipulate account details and settings

## Abstract User flows

### Display Textual and Tabular Information


### Manipulate Form Information

### Start a Job


### Upload and Download Objects


### Play Media


### Emails and Instant Messages


### Document Manipulation

### Manipulate Vectors, Images and 3D shapes
This data can be vectors or rasterised images. Vectors are math or code that explains to a computer how to draw shapes, while rasterized images store colour data for each pixel individually. Vectors are 


### Display and Interact with Data Visualizations


### Voice Calls

