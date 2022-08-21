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
Customer service user flows that involve just display FAQs are simple and can be just a list of question and answer pairs that are stored in database and served by the back-end.

However, customer service user flows that use chatbots are much more complicated. While similar to how search is performed, chatbots have some more paradigms that make them little more sophisticated than just a pure search. Apart from classifying the query and mapping them to the most relevant answer, chatbots also can look to see the completeness of a query, for example if you were asking for help with your order and forgot to mention the 'order id,' the chatbot can recognize what is missed and prompt the user to now supply it.

Another such paradigm is that maintaining state. Sophisticated chatbots can be a little more human like in that they can use information provided in a previous interaction and augment that information with any new information that they may receive. When using chatbots people are encouraged to use their natural language to query, as opposed to a pure keyword search. Parsing the different ways humans can say the same thing in their natural language is a non-trivial and involves natural language processing models. These models can be stored in a database and retrieved at the time of parsing the query.

### Maps
To perform some reductionism, maps are just a method of displaying data. This data is that of shapes that represent roads, buildings and other physical features found in the real world (or even [a fictional world](lotrproject.com/map/)). When traditionally viewing a location on paper a user would have choices of looking at the location from different levels of ganularity. For example, they can view the location on a map of the whole world, at the country level, province level or even a city level. For each of these granularities the amount of detail shown per square meter of the real world increases. Since the amount of space is limited and the grosser granularities only a few prominent features are shown.

This follows digital maps too. A user can zoom in on to smaller represented areas and as they do that more details can appear on the map for that area.

One option is to download the entire detailed map at one go and as the zooming-in happens more details can be shown, where each detail has a corresponding zoom value at which they are shown. The second option is for the front-end to request the richer information for the current area and zoom-value from the back-end. For very large maps, especially maps at a city level or larger it makes sense to implement the latter method. 

For every zoom level a portion of the map called a tile is stored in a database. Tile can be queried for using the latitude, longitude and zoom level. The same system works when the latitude and longitude changes for a given zoom level. In other words, when panning.

### Create and manipulate account details and settings
For most account details, the flow data is similar to that adding a new user, where details are sent to the back-end and stored into a database. An interesting application of this are settings details that effect the look and feel of the application itself. This can be as simple as personalizing the colours used for the application to even changing the workflows for the users.
In a very simple application the front-end is built using static CSS and HTML and where the data or the model defines what the actual values displayed by the HTML element would be. The model usually doesn't control the HTML and CSS directly. But in this case the structural sections of CSS and HTML is predicated by the values in the model. An example of this choice whether to display to controls on the screen that usually only the admin or those with higher permissions are allowed to see. In frameworks such as react the HTML is controlled by a React component, which itself is part of the controller. This means full power of usual programming languages, things that are not usually available in vanilla CSS and HTML, such as if/else statements, are now available and can be used to manipulate the HTML and CSS. In the example case mentioned above, the code would look something like this pseudocode:
```
if role == 'admin':
    show_list_users_components = True;
```

## Abstract User flows
### Display Textual and Tabular Information
As mentioned [here](user-flows-and-architectures), these are the simplest of all the interactions between front-end and back-end. Since this form of interaction was the first type of interaction between two computers over the larger internet, it is what you get right out of the box with HTML. In fact all other interaction build from this, sending, receiving and displaying text.

### Manipulate Form Information
If displaying text and tabular information is the bread and butter of computer-to-interaction over the internet, manipulating form information makes up the other half, namely human-to-computer interaction. Many interactable elements come out of the box with HTML, such as buttons, radio buttons, checkboxes and input text fields. Like in the many more specific userflows previously mentioned, the front-end will wrap up this information into an object and send it over to the back-end. The contoller may optionally be able to manipulate the data before it is sent. An example where that can be done is representing boolean data from checkboxes as a list of only those that are checked while leaving those that are unchecked out, in order to save space.
### Start a Job
Due to user's expectations of fast responsiveness from the applications, most request-response pairs from the front-end and back-end are expected in a near real time. For jobs that take longer, the user would like to see the progress of the job. When a front-end sends a request through HTTP the back-end performs the work and sends a response, if the *work* takes too long then the back-end will not be able to respond, the front-end will not be able to provide updates and to the user it will feel like no action was taken. 

To start a long job the front-end sends a request to the back-end asking the back-end to start the job. When usual requests arrive, the software that is able to handle the request, called a server, will usually handle the request on a thread. A thread is a logical division of a set of instructions for a particular program. In order to best utilize the CPU's time, programs are divided in to invidual instructions and the CPU toggles between instructions of different programs executing them alternatively. There are many ways for how the CPU chooses whether to execute the next instruction on the current thread or to move on to executing an instruction from the next thread. When the long-job-creation request arrives at the back-end, it has to do both respond to the creation-request and perform the job.

The way the thread would solve this is by registering the job-creation request in a queue that is implemented somewhere common, say a database, and then return immediately to the user a response that the job has started. Simultaneously, there would a set of worker nodes that keep looking to see whether there are any new jobs, if there are then they would take that job off the queue perform the required job and save the outcome in another common location.

When using asynchronous communications a server can contact a front-end only as response to a request. There are some two-way communications between front-end and back-end where a back-end can push a notification to a front-end, but they are complicated to implement and has a lot of overhead. Instead, in order to track the progress of the job - whether it is still under processing or if it is done, the front-end periodically sends a progress-check request to the back-end with the *job ID*. The back-end is able to look into the results database and see if a result has been generated for the job. If yes, then it responds to the front-end with a message that informs the front-end saying that the job is done. After this the user can issue further requests to consume the results of the job. This repeated and periodic checking with the back-end is called polling. There is a trade-off when deciding the frequency at which the front-end should poll the back-end. Too often and the back-end can quickly get overwhelmed, especially once we consider the number of other users which are going to be polling the same back-end in parallel. But polling too infrequently can have an impact on how the user percieves the speed of the system.

The start job request would be of the following:
```
POST /jobs
body = {
    "video_id": "abcd123",
    "format": "MP4"
}
```

The response to that would be
```
{
    "job_id": "xyz789"
}
```
To poll the status the request would like
```
GET /jobs/:job_id/status
```

To which the reponse could be:
```
{
    "job_id": "xyz789"
    "status": "in progress"
}
```
### Upload and Download Files
Most other textual data that the front-end deals with would be those within the confines or sandbox of the front-end itself. It is either data that is received from the internet or explicitely provided as input by the user. To access the user's local filesystem, the application can only go through the browser it is running on. That means, if the user needs to upload or transfer a file, they would click a button on the front-end to indicate that. The controller would then request the browser to open a file explorer, which the user will use to navigate their filesystem and choose a file they would like to upload or send. Though there is no technical reason why the javascript would not be able to just list the files and be able to manipulate them itself, it is a matter of security. If the browser provides such power to any website code that is run, then there is no stopping hackers from creating websites that will secretly read all of the user's files and uploading them. For this reason, arbitrary reading of the filesystem by websites is not allowed.

Once the file is pointed to though, the browser allows the application's controller to read the file as a binary. This binary can then be sent to the back end enclosed in a request body.

On the back-end file binaries can be:
- Written on the local hard drive
- Written into a database as a Blob or alternative format
- Processed as a file-like object by the program

When saving the file on the local hard drive, the developer has to make sure that whatever use they have for the file is temporary since storing the file on a particular physical system in a way that not all systems running this program have access to this data breaks the concept of statelessness of the back-end. That said, it is okay to use the local system as temporary storage to help with file processing before the processed file is then saved in a more permanent place elsewhere.

However, even when using local storage for files, care should be taken that the temporary files are disposed of periodically or immediately or else there runs a risk of there being a memory leak. A memory leak is when memory is used by a system without all links to that object being stored lost. Since the links are lost, these objects can not be move or deleted later, without manual intervention. Usually, UNIX systems guarantee that the /tmp folder will periodically be purged. But care has to be made to handle the purge schedule. It may happen that the purge will not happen until after the whole memory is filled, especially when dealing with large objects such as videos.

Some of the processing that a usual application would have to perform on these files are:
- Unzip the file into a folder and perform filesystem manipulations on the folder such as traversing it and reading the files.
- Converting the file format or processing it using software that is external to your backend service. This usually means saving the file onto the disk and invoking the external process using command line invocation command, this usually happens when the software is written in a different language from the application's language.
- Read the data from the file and process it, this usually can be as simple as a file read to reading data from a pdf or another format meant for publishing and converting the data into plain text.

Downloading a file is similar to the upload with most processes described above in reverse.

### Play Media
If the media is stored local to the system, the front-end will use a decoder from the codec to decode the video format. However, when the media is being streamed. The front-end will keep querying new batches in the stream from the back-end. The back-end will store this data in a database, split the video down into smaller packets and serve them as requested.

The request would look something like
```
{
    "video_id": "video123",
    "start": "00:10:00",
    "length": "00:01:00"
}
```
The above request is for one minute's worth playback of the video starting at the tenth minute of playback. If the window lengths are fixed and understood between the front-end and back-end, it can be remove from the request.

If it takes about five seconds to get new data the front-end's controller can choose to request the data for the tenth minute mark a the 9:55 minute mark. But this would arrive just in time and not leave any room for safety, so the controller can choose to make sure that it always has 15 seconds of video playback ready at any given point by requesting the data at least 15 seconds before the playback reaches that point.

This request format fits in very well to perform the seek operation too.

### Emails and Instant Messages
Emails have been around since the dawn of the internet, and just like hypertext-based websites browsing, make up one of the most fundamental use cases of the Internet. The basic flow of how emails are implemented are: 
- compose a message
- point the message at an address and send.
- On the side of the receiver, at that address, an email server is constantly listening and when a message arrives, it stores it in a database.
- The reciever's device then keeps polling their database to see if any new message as arrived and if yes it populate the inbox.

This skeletal flow is similar for both emails and for instant messaging.

Email protocols were developed openly and as a system of request-for-comments, which are designs that are openly discussed and adopted by peer-review and internet standards body. These make these protocols a standard that is implemented almost similarly from vendor to vendor.

Email has three such protocols, IMAP, POP3, and SMTP. These were created in an age when abbreviations were all the rage. To explain how emails work, each when a user create an email ID, they create the ID for at a particular domain. In the user@domain the portion after the '@' symbol is the domain. Using a DNS the IP address of the domain can be retrieve. At that IP address an email server should be running that is listening a particular port for an incoming email message. When sending a message a sender will compose a message and will use the SMTP (Simple Mail Transfer Protocol) to do all of the DNS mapping and sending to the email server. In order to retrieve the message the reciever's front-end will use IMAP (Internet Message Access Protocol) or POP (Post Office Protocol) to sync the messages from the server to their device. The major difference between the two protocols being IMAP does not purge the mails from the server upon retrieval while POP does.

Modern instant messaging works a little differently, in that there is a central server to which messages are sent. The server then is stores the messages while the intended reciever will be delivered the message after it polls the server for messages, this may sound very similar to emails, and indeed they are very similar, it is just a difference of flavours for most part.

### Document Manipulation
A WYSIWIG (What-you-see-is-what-you-get) text editor is a canonical example of a front-end where the contrabutions and interactions from and between the model, view and the controller are prominent enough that they can be used to explain how the parts of the MVC work and interact. 

Broadly the parts of a WYSIWIG editor are the text display, and the tools to format the text.

The text that is to shown is stored in the model. Since these texts allow for character level formating such as colour or stylization, behind the scenes the text is actually marked up text. As the user types into the editor area the model behind is updated. To change the format of a certain part of the text, the user can drag their cursor over the text and press a button. To process this button click the controller has to retrieve the range over which the user had highlighted and insert markup tags before and after that text so that the view can now display the change. If the user toggles back that change, say make some italized text unitalized again, then the controller would have to remove that tag from the text in the model, and view will immediately display the updated formatting.

We mentioned Google Docs in the [userflows](/user-flows) document, but we mention it again. Recent years have seen editors that work on documents that are stored on the internet of which Google Docs is an example. Google Docs performs instantaneous or near-instantaneous saves. Periodically, the editor front-end will send a request to the back-end with the current document content. The back-end would store this information on a database along with meta information about when the document was uploaded.

These browser based editors like Google Docs also may also provides an inbuilt version control system. A version control system keeps track of every version of the document. These systems can either store entire copies of the document in the database, or, to save space, can store only the string of edits that have been performed on them such that the edits may be replayed from the beginning to reach a particular point in the documents history.

Collaberative editing tools, of which Google Docs are one, are interesting because they allow different user to edit the document live. This means when two users are viewing the same document on their own machines, one user can watch the other user's cursor as that user edits the document. The users may also edit the document simultaneously. This is a little more complicated because to determine the cursor's position, it has to have an anchor - the point from which distance is calculated - and an offset - the actual distance. If we take the anchor for the cursor of user 2 to be the start of the paragraph and the offset to be character 50, then if one user starts adding character to or deleting characters from the start of the paragraph, then user 2 will find their cursor moving unnaturally to the next or previous characters, we would want the cursor to remain on the same word, regardless of added or removed characters. To achieve this each character or word should be individually and uniquely identifiable so the the cursor remains with that character regardless of relative location to the beginning of the paragraph of any such anchor.

The second issue is of overwrites and race conditions, what if it so happens that the first user edits a character in the document, and almost immediately but still after the first user, the second user edits the same character. If the update about the first user's edit doesn't reach the second user in time, the second user would have edited a stale document.

As one can imagine to be able to perform this form of collaberation, the front-end periodically sends updates to the back-end which then stores them on a database with an updated timestamp. The second-user's front-end will also periodically request the back-end to see if there are any updates stored in the database for that document. If there are, then the back-end will respond with the updated document. The same goes for the each user's cursor position or any other meta data related to the document.

Excel sheets and other spreadsheet tools, peform various mathematical or statistical functions on rows and columns, these are functions that the front-end's controller would be be able to perform.

### Manipulate Vectors, Images and 3D shapes
Displaying vectors and images are view elements in a model view control. We described the difference between rasterized images and vectors in the section on maps above.
Some applications help manipulate these elements. We spoke about functions such as cropping, blurring and colouring in the [user journey](/user-journeys) page. These are mostly math manupilations and formulas that can be performed by the front-end. For example, you may have structural data for a 3D object. To be able to display this object on a 2D screen the data will have to projected on to that plane. This involves trignometric equations. Most of these are implemented by graphics libraries, that can optionally use a graphics card to speed up the process as most pixel level calculations can be performed in parallel.

### Display and Interact with Data Visualizations
Visualizations are another example of MVC working in tandem with prominent contributions from each. Controllers work on data points and convert them to displays such as shapes or locations in a space. The data itself is in the model. The view finally displays this data. There are many famous visualizations such as bar chats and pie charts and accordingly there are many ready to use libraries that are able to create these from the data. But other libraries provide more control over how the visualizations are create, these sometimes are also interactive so can be clickable or draggable. The controller works with all of these inputs.

### Voice Calls
TBD


## Our Architecture

We discussed how the different user journeys map to the same architectural elements, a front-end, back-end, a communication method and a storage. We shall now discuss how these user journey and architecture elements work together to make a complete application. The application we shall discuss will be the ingredients-to-recipe lookup application we discussed [here](/our_product).

To recap the application predmominently had:
- search
- sort
- filter
- document manipulation
- text and tables data display
- data visualization 

## Search
The front-end will display a search bar where users can add their current stock of ingredients. As we mentioned before we can make these ingredients chips or new rows in a table as the user is adding them to make it clear that these are to be treated as discrete items.

When the user clicks search, the front-end will send these items to the back-end. The structure of the request can be of the form

```
GET /recipes/search

{
    "items": [
        "potato",
        "garlic"
    ]
}
```
The response will be a list of recipe IDs, and some metadata for the user, that will be ordered according to the most relevent recipes firsts. Since there could be many recipes we can employ pagination here. Therefore the response could be:

```
{
    "page": 1,
    "recipes": [
        {
            {
                "recipe_ID": "recipe_123",
                "recipe_name": "Baked Potato",
                "preperation_time: "15 mins",
                "difficulty": "Low"
        }
    ]
}

On the back-end the server should have some search mechanism that is able to retrieve the best matching recipe for the given ingredients.

The recipes themselves need to be stored somewhere, for this choose to have a relational database that stores the recipes.

The second user flow for our application is going to be a store of the user's current set of ingredients. These need to be kept track of on the database. But to first know which user is using the application we'll need to implement a sign-in mechanism too.
