# User Flows
Another way to frame the value question is to perform the following exercise. Assume you are at a stall in a trade show back in 2010 and a person comes up to you and asks what are you selling? And lets assume your app was the first food-ordering app.

You: This is a food-ordering app.

Person: What does that mean.

You: It is an app that you install on your smart phone. When you open it, you can search for restaurants near you by name, or scroll through the list shown to you. It can even let you search for your favourite dishes by name and show you the restaurants are serving them. Then you can build up your cart, enter your address and other details and pay for the food using a credit card. The food will then be delivered to your home.

Now imagine what a similar elevator pitch is going to be for your application. A user takes the app, does A action, provides B data, and expects C result from the app which gives the user D value.

Answering this will give you one user flow. This is one of the paths the user can take to get a certain result. You will have to enumerate all the flows for your application, inorder to later analyse and translate them into either user interface that can be interacted with, and understanding of how the data should flow between the front end and possibly a server.

## Whiteboarding your user flows
Unless your app is at the cutting edge of UI/UX design and is attempting to invent a new way that humans and application interact. Most applications out there have very common flows. The data or the domain you are in may be different but the activities performed will be very similar. This then throws up a very quick and easy way of wrapping your head around user flows for your application. Simply look at existing applications that you like and try to pick and choose entire flows from there that make sense for your application.

If placed in front of a white board and asked to sketch out the percieved flow of your app, some of you may already do be thinking about your favourite apps subconsciously. You may think of the entry point of your app as the login page before a landing page. Some applications like ecommerce websites may not need the user to login before they can browse the catalog but they need some credentials before placing an order.

The landing page is normally the confusing page to design because being the landing page it has all the possible paths into the app eminating from it. You may be able to start a search or login or check your account status. Now it would become confusing to draw a tree like structure with the landing page as the root. Soon you will realize that each of these tree branches can actually cross-link across branches and it suddenly feel like a large network of pages and links between them. In technical terms this is called a graph.

An easier way of tackling such a graph is to actually break your app's flow graph into different end to end flows. It also helps to think of flows as one of two classifications: a happy path and an unhappy path. This classification is too simple, it usually means there is a happy path where at every decision point the user gave a correct or acceptable answer and moved on to the next step. In non-happy path, the user either gave information that could not be accepted, or did not validate a form properly or the information the user is seeking is simply not available. The number of non-happy paths are numerous and it makes sense to walk through each one as a designer at some point in order to make the experience of using your app flawless, clear and that usually means more efficiency and satisfaction on part of the user. Usually from a non-happy path the app will have to take the user downa recovery path which aims to help the user rectify their mistake if possible and be put back on the happy path from where they left off. 

In the beginnning it makes sense to just work in this order:

 - Draw each happy path from the entry of the app to the end.
 - Connect the primary decision points that can cause a user to jump to a new path.
 - Draw each non-happy path from the start node on the happy path to the recovery node and back to the happy path.
 - Connect the secondary flow lines such as clicking on back or home.

## User Flow Templates
Below we have made a list of possible user flows. Most applications can be built with some combination of these. Feel free to use it as menu when fleshing out the needs of your application. We will be using this in the next page to flesh out the application we would be building.

### Login
The login userflow authenticates and authorizes the user to use the application or access certain other parts of the application. Authentication means the checking the user says they are who they say they are. Authorization checks to see if they have the required permissions to access what is beyond the login. Like mentioned previously, different applications have different requirements as to when auth has to take place. Banking applications would required auth to take place before the user can do any transaction on their account, while ecommerce sites would only require them when checking out.

As we'll mention later in [the chapter about auth](/auth), there are different ways a user can perform auth. These can be any of the following:
- Username and password
- One time password (OTP) sent to an email or mobile phone
- OAuth authorized by Google or some other trusted website

**Two-factor authorization** is another popular method for added security. This can be implemented by using any combination of login methods above, say requiring username-password and an OTP. The security comes from multiplication of probabilities. Say the probability of a thief getting your username-password is 1% and the probability of having access to your phone is another 1%. These are very high values and usually they will be much less, but for the sake of easy understanding we'll consider these. Now for the thief to get both the username-password and the OTP makes the probability 1% x 1%, which is 0.01%. 

### Signup
Before the user can login, they would have to create an account. This step can be as easy as linking their Google sign-in, or can can involve creating a username and password specifically for your app. At the time of sign up, you may choose to ask a large number of questions in order to learn the profile of your customer better. However, this can end up being too much investment of time and effort for the customer and may lead them to drop off. Other applications, specifically those that have to suggest content to a customer would ask some preliminary questions to understand more about their likes and dislikes pertaining to the content that the application has to offer. These can be placed with an optional skip button so that the user may move forward and not have to necessarily provide all of this information.

### Forgot Credentials
If a user forgets their credentials they would need a way to get back their credentials or set the password again. Some popular mechanisms for reseting credentials involve sending an email to the registered email-id or sending a message to a registered phone number with a link to reset the password. This creates chain of trust because presumambly only you would be able to log into your registered email ID or have access to your phone.

Some applications that require more security, such as those of retail-banks, may add further checks that act as deterences or blockers to possible malacious actors. They would ask you to provide more details that preumambly only you would know, such as your birthday, or credit card number, or answers to security-questions that you had provided when setting up your account.

These are so wide-spread that most of the readers may already seen one or more of these mechanism that it may seem we are explaining the obvious, but we do so just for the sake of completeness.

### Landing Page
The landing page is one of the most overlooked pages. It can be a major source of sucess or failure especially if your app is a consumer facing app. This is because this is the first page people would see before they are on some journey through your application. If the landing page is not intuitive, users will not know what next action to take to start the particular flow that they are interested. For example, in an ecommerce app the search bar is usually available at an easily noticeable place, because many users will arrive at an ecommerce page looking for particular items. They can just use the search bar to search for them. If the search bar is not in an intuitive position and users are not able to find it. They will not find the items they are searching for or interested in and may leave feeling the app was not very valuable to them, or that it took too much congnitive power than they were ready to give at that point.

Some applications have many possible user flows that a user may want to be on. An example is a banking application. The user may want to know their balance or may want to send some funds or may want to order a new cheque book. In such cases it a good landing page would have this in easy locatable places, say in a menu or a drop down, preferebly organized in a tree structure and prioritized by the frequency of the actions their users take overall. In other words the most frequently used actions will be place first in the heirarchy of actions.

Sometimes this goes to the extreme. Take email inboxes or social media sites like Facebook. The design is not similar to a banking site where they land you on a page that is only a menu that has button such as 'see inbox,' 'send a message,' etc. They directly drop you into the inbox or the wall. This is not because they do not have other user flows, but because they know one user flow, such as looking at inbox or the wall in Facebook is so common that most people will want to do that action. If they require to do another action they can choose to use the menu that is available on the side to go there. This removes one hop for users. Which can increase speed. And in low-bandwidth situations effect of this extra time saved can really be amplified.

### Wizards
For applications that have a single main user flow, or if the user flow is well known, say such as search and discover in ecommerce apps, users may not need explicit training as to how to use the app. However, other apps may have landing pages with options for users to start multiple flows and the buttons to start these flows are nicely tucked away in different menus. In such cases the app may choose to show a temporary overlay with arrows and hints that help the user learn where each button is and how they be able to start particular user journeys. Developers can choose to use heuristics that decide when they would show these wizards. For example, it may be assumed that new users may need such help, but returning users may not, thus using this feature only for whom it really matters.

Other applications may involve a one time setup process. For example, when setting up a user account, there are two options here for the developers:
 - Create the account after collecting only a username and password or,
 - Collect all the information about the customer such as their name, age and address during the account setup process.

In the first it is assumed that the user will fill this details in at a later time by navigating to some form a profile page. However, chances are that the user didn't know that they could do that. In the second flow, some of this information may not be necessarily required, meaning, strictly speaking the account can exist without this information. But by employing a wizard to ask these questions the developer is advertising to the user that such a menu exists and chances are most users will just use the wizard to fill in the details then and there. Especially if they have no specific need to skip, chances are that they would rather just follow what would seem to be the natural flow as per the application.

If the user does fill this, and if pertinent to the type of the application, then the application can then use this information to curate a better landing page for the user. These most employed in sites such as Quora or Netflix, for which content is the core offering.

### App Navigation
To start a particular user flow, usually the user would have to press a button or perform a similar interaction with an element on the landing page. These interactions would navigate the user to another page where they can perform the first step of the user flow. These elements on the landing page could be organized in a navigations bar, or navbar for short. The developer may choose to show the same or similar navbar on all screens. This allows users to hop to another userflow while they are in the middle of another flow without having to go back to the landing page first.

Other more generic navigation options are the back button and the home button. If the application or the browser maintains a history of pages visited by the user, the user can use the back button to go back one step in history. On a mobile phone there may be a back button that belongs to the or a gesture that performs a back button. Browsers and mobile applications will interpret this signal as a navigation back one step in the string of visited pages. The home button can be used to take the user back to the landing page, incase they have gone deep into some chain of pages and now want to reorient themselves back in the application. The modern design nowadays is to make the logo of the application clickable and by clicking it the app will navigate to its home.

### Search
E-commerce websites have millions of products in their catalog. The number of articles on Wikipedia are of a similar magnitude. One way for people to consume these articles or find products are by scrolling through a list, probably in alphabetical order in order to find it. To many of you reading this may seem ludicrous that I am even explaining what search is, but just a couple of decades ago this was how most people bought products or searched for pieces of knowledge from an encyclopedia. They would go through and index.

This is simply not feasible for when the number of articles are in the millions. Thus a search engine that is indexed on the data of your app can help users who know what they are looking for by filtering the items or articles. By using some statistics based on the words in the users query and frequency statistics of words in the articles or the titles of the goods listed, search engines can filter and show customers very pointed articles or products as per their query.

### Sort
Users of ecommerce sites will be familiar with this action. Items have attributes such as cost, relevance, popularity etc. The user can have the list sorted in a given order, i.e., ordered with lowest price to higest, or lowest relevance to highest.

The use of sorting can help people get good deals when trying to buy an item or they may be able to choose airline tickets by the earliest departure time.
Sorting is quintessential ability for any application that has a lot data. This is a data exploration tool, where unlike search which tries to narrow down, sort can to make sense of data for which users don't know exact words or placing similar objects that have similar attributes together.

### Filters

Another action is that of filtering. Filtering is similar to search, but the difference is set of attributes and their possible values are enumerate and the user can build a query based on selecting one or more values per attribute. In such a case all objects that have the given selected values for each attribute will be shown on screen while the rest are just ignored. What constitutes a filter type and set of values is a decision point for designers. Too many filter types and it can be very hard for users to parse all of them, and too less can lessen the value of the filters themselves. For example, one may have a the filter color. When used for furniture or clothing, more values for colors make sense but too many values for colors for example, three different values for just blue, may seem overkill. But this is not true if you are trying to sell wall paint online, then more specificity is good.

Another way to measure how you are filtering can be through measure the amount of filteration that is happening. One can measure the ratio of elements shown after fitering to before filtering. If ratio is too low, say zero or really close to zero for many of the filter options, you are probably too fine-grained in defining the set of filter values.

Filters also allow combination of filter values. If multiple values of the same filter type are selected, for example, both orange and blue are selected from the colour filter menu, this means that items that either are marked as orange or blue are to be shown. But when values are marked across filters then the items shown will have to have both the attributes. For example, if the colour 'orange' is picked and the filter value 'shirt' is picked from a filter called 'garment type', which have as other values, 'pant,' 'jeans', 'T-shirts,' then only items that are both of 'shirt' garment type and which are orange in colour will be picked. In other words only 'orange shirts' will be shown.

### Add to cart and Checkout
This may seem like a userflow that is overtly pertinent to those who are making ecommerce sites. That may be true and almost any website nowadays has something to sell, and when they do, they would have most definitely implemented a checkout flow. The flow nowadays is pretty standard:
 - Users add items to a list called the cart while browsing.
 - When they are done browsing, they are are allowed to pick and choose the items from the cart again.
 - When done they confirm and update information such as the deliver address and phone numbers.
 - They choose a payment method and pay.
 - If the payment was successful they are shown a success page and their list of orders are updated.
 - If the payment was not successful they are shown a page that informs them of the same and prompts them to retry.

This is not without reason very standardized. Following the steps here, you would realize that almost with no deviation it follows the exact same steps that you would follow at a grocery store.

Flows that have been polished to the bone like this is a good example of templateable flows that one should look for, when building applications. For some folk this is a good thing. Since there is a well worn path, there is not much to think about and debate and at most the decisions would be about what information to collect at checkout. Case in point are vendors such as Shopify, who allow users to build ecommerce sites on their platform with literally no coding. In fact they provide the same checkout flow to all of their websites. But with ecommerce sites now dime a dozen and each battling for every per cent of marketshare, they have trained their sights on this flow and asked how to make it even faster, what step can be skipped to make the flow even faster. But when flows like this are so streamlined that it is almost impossible to remove a step, that's when the costs of innovation go up. Think about how you could skip some steps in the above flow, if you do have one we are sure you can let one of the designers at ecommerce sites know and they would have a job for you waiting.

### Customer service
Most consumer facing applications will implement some form of this. In old days - 20 years ago - most businesses would implement call centers with customer service executives who were happy to help you over the phone. As much as it feels comfortable for users to know that they when they have a problem with their service, all they have to do is pick up the phone and complain, companies have realized that many of these queries do not actually require a human executive to talk to the customer.

Some of the low cost methods that designers use are to add a FAQ - frequenty asked questions - section. The hope is that unless user have a very specific problem that pertains only to them, they will be able to find answers easily in these listed questions.

Other companies would add an ability to chat with a human executive, instead of a call. This is faster and also allows executives to deal with mutliple queries at the same time, and if the question is a usual one they can pick an answer from a similar list of FAQs available on their side.

Probably the most interesting innovation in recent years in this space is the use of chatbots to help with customer queries. At the outset, it should be said that at the current state of the art it is difficult to aim to replace human executives entirely with just chatbots. There are still many complicated queries and situations that are very hard for a non-human or rather just an algorithm to parse and take action on. But, that being said, the way to understand the use of these chatbots are as a more powerful search system on the set of FAQs. Instead of just displaying a list of FAQs and expecting a user to read through the whole list to find a question similar to theirs, they can just ask the question to the chatbot. The user interface of the chatbot is very similar to a chat terminal the user would have used if they were talking to a real human. This reduces the congnitive overload for them. This allows to them feel comfortable asking a question similar to how they would have asked a human operator in their own natural language. The engine at the back then tries to map their query to a question listed in the FAQs and answer the question. 

### Maps
Maps are an interesting break from other user flows. Most other user flows involve one of inputing or reading textual or tabular data. The input artifacts for these involve buttons, text fields or similar text-based inputs such as dropdown menus or radio buttons. The ways to consume this data involve similar text-based artifacts. Maps are unique in that they are one of the most widely consumed userflows are based on a canvas. This is different because the shapes created and the exact relationship between points on the screen is the very data being consumed. In textual and tabular data the interactions are mostly limited to clicking, scrolling and typing. While in maps the set of interactions change to zooming, multi-directional scrolling, rotating apart from the usual typing and clicking. Even displaying the map itself is complicated as locating points with near pixel-perfection is a specialized task. Maps are also one of the user-flows that make heavy use of a hardware component of mobile devices, that being the GPS system, that uses satellites to locate the device properly and exactly on the map. 

This along with the fact that build geographical data that back the maps is notoriously difficult to get right, forces designers to just use maps from say Google or Open-Street Maps. We explore this point in more detail in [build vs. buy](/build-vs-buy). Given the hooks customizability that these vendors provide make it so that there is almost no downside of using their services. This is why you would see Uber or food-ordering applications layering their applications around a map. We mentioned this in the [value](/value) page, but the point bears repeating.

But that being said, the value provided from maps is just immense. Food-ordering, ride-sharing and multiple logisitics applications wouldn't exist the way they do without maps and their data. And most of the value comes from just a few enumerable features that maps are capable of:
 - Locating points on the map canvas.
 - Drawing lines between points on that canvas - for showing the path between two points.

### Create and manipulate account details and settings
An account is a representation of the user on the application. As a representation it may have data that identifies the user such as the user's name, address etc. Knowing this information may be legally required as for banking applications or may be required as an important step in one of the application's user flows: health applications will store body parameters so that one can compare against their own history of parameters or content applications such as Spotify stores your preferences and liked songs so that they can tune more information towards your tastes. 

But account preferences or settings are a sort of meta user flow, because it can be used to capture settings that can effect the display or abilities of the application itself. These are very useful in improving accessibility of applications and also can allow users to streamline the application themselves to their liking. This puts less burden on the designers to get the layout and feature lists just right. They can now take an option of adding more features to the application if possible and letting the users choose which they want to see. Feature rich applications such as Photoshop do this by having toolkits that can be swapped out for and hidden, thus removing the clutter.

When allowing such meta changes to be made to applications by users, care must be taken that the user is able to back track. If a user changes a setting which is unworkable for them, but the same setting also inadvertantly also disabled or hid the feature that allowed them to change this setting, the user is now in a state that they can't get out of. This can happen when the user is trying to change the language of the application, if by chance they select a language they don't actually understand, it can often be hard for them to again find the button or menu which allows them to change the language back.

## Abstract User flows
The previous set of user flows were very specific. But given their specificity, they do not cover all possible flows in all apps. It is impossible to cover in such detail all flows in all apps since there is a long tail of them and each one will be different and domain specific, but what we can do is try to build a more general classification of user flows. This may be harder to follow, but having this classification at the back of your head will help you understand how to navigate your own apps user journeys once you identify which of these buckets they fall under.

### Display Textual and Tabular Information
Probably the simplest of all userflows by far. Case in point, during the early years of the internet, this was the only purpose of the internet: many websites would be built with pure text, there wouldn't even be any design. One website today that is reminiscent of life back then is the [Berkshire Hathaway]() website. The company that run by Warren Buffer and Charlie Munger. Turn the years over and Wikipedia established itself as site where users consume mostly and only textual data. FAQ pages, government sites, blogs, medium, twitter etc. are all descendents of the the early websites where content and displaying text was the only thing available. Often all it takes is some [HTML and some CSS](), to build.

Given this, one design aspect to look out for is how to display dense information in a way that is easily consumable by users. Too dense information and in small font can be hard for user to read. There is also the 80 character rule for the width of paragraphs. Users find it harder to read text that don't fit into columns that are smaller that 80 characters. Of course this is not hard and fast, for example, wikipedia allows text to flow almost from edge to edge on wide screens and novels do the same. Print magazines and newspapers follow this rule for this reason, even though they have the space to go edge to edge, they limit their paragraph widths to create columns that are then placed next to each other. Another example is that of Medium, they limit their columns on widescreens for easy reading.

Similar to the question of dense textual data, is the question of what do you do as a designer for dense tabular data. It may not be obvious because of the lack of borders but the search listing page of Google is actually display of textual data. Here the columns are probably of the form of 'Main header,' 'Sub heading,' 'URL.' etc. There are too many styles and methods to display textual and tabular data. But two interesting aspects that make web pages stand out with their interactability is ability to display an abreviated version of the data in the table, and allow the user to click to know further. This, like Google, create a context and focus design, which first displays the data in the context of all the other data to the user. And then the user can then click on a piece of information or row to know more or probably be shown more information. Most data-driven apps will be designed as such. Email inboxes are another example of this, where all the emails are shown first for context, with only the sender and subject or the abridged first line of the email displayed. The user can then click on an email to read more of the text. This generic form is what most productivity and console applications are based on.

### Manipulate Form Information
If the display of textual and tabular data is one of the most bread and butter use cases of the web, the other is its equal and opposite number, the form. The interactability of the internet made it what it is and different from other sources of media that are broadcast only, such as radio and television. The form allowed users to create and push data back into the internet.

The markup language HTML is to webpages what steel girders are to buildings, it is the scafolding on what the rest of page sits on. HTML offers small atomic units such as a button or a text field, and the smallest describable form is an input field, a label and a button that triggers whatever information that has been entered into the input field over the internet.

Now there are cleverer ways to do this, you don't even need the button, as text is typed into the field that information can continuously be sent over the network.

Entering text data may the most easily understood version of form inputs but over the years many primitives have been created and are now well understood form elements - this list is not exhaustive and only indicative:
 - Text fields: One can enter text into these fields in the webpage.
 - Buttons: On clicking the button some action will be executed by the page.
 - Radio buttons: When there is a set of options and only one of them can be selected.
 - Checkboxes: When there is a set of options and none, some or all can be selected.
 - Dropdown box: Similar to radio buttons, when there is a set of options and only one them can be selected, but dropdown boxes make use of the interactivity of the page to hide all the options unless clicked on, at which point a list is displayed.
 - Date inputs: These are specialized inputs that can take only a date as acceptable values. To improve the validation at the time of input itself users will be shown a calendar which they can interact with to select a date.

### Start a Job
Some specialized tasks such as document format conversion, analysis of documents or videos on server may take some time to process. User flows that have such processes usually involve the steps of:
 - Collecting the required data to be processed on the front end.
 - Sending a request to the server at the back to start the process, imagine a server as another computer running on the internet. We'll talk about more about what a server is later.
 - Letting that process run on the server.
 - Periodically pinging the backend to see whether the job has been completed.

To the user, the feeling is that they have submitted a job for processing, wait for the processing to get over and when the processing is over they will be informed. As an analogy it is similar to toasting bread on a popup toaster. When the lever is pulled down, the job has been submitted, the toaster performs the process which in this case is toasting, and at then of the process the bread is popped out, visually and audibly indicating that the process is over.

The major difference between this and say a task such as opening an email is the user's perception of what is real-time. There is no strict definition of what consitutes real-time, but the feeling is that when you provide and input to the system there is no perceptible lag or at least no perceptible step between the input and the expected response. When something has to be real-time or not is completely based on user expectation. They may be willing to wait a few minutes to convert a file from one format to another but they may not be willing to wait the same amount of time to open an email because they expect loading an email to be a faster process.

Most of the processing done in the web are done on shared computing devices. If you are working on a laptop or a desktop, the entire power of the CPU or brains of the computer are dedicated to you and your tasks, however, due to multiple reasons of scale the machines that run the internet are shared among multiple users. This means that when the user submits something there may not be any resources available at that moment to service that request. Some systems will wait for a while and just throw and error to the user requesting them to try again in the hope that whatever was using the resource would be done with the resource and the resource would have been freed up now. An alternate experience that developers provide is that of creating and displaying an explicit sense of a job queue to the users. Even though the job will take some time to complete, seeing a response from the server and their position in the queue counting down over time allays their fears of having been forgotten about by the system.

### Upload and Download Objects
Instead of consuming data by having them rendered by your browser, data can be queried and downloaded onto the local filesystem. This is most popular for documents such as PDFs and for software packages that can be run on the local system. Other files such as videos and photos can also be downloaded. 

The complementary action to this would be to upload data from the local system to the server. Users will be allowed to choose files from their local system which then will be converted to some binary data and sent to the server. The server will then store this file somewhere.

There are now applications such a Dropbox or Google Drive, that allow users to upload their data and store it on the companies' computers. This is similar to having your harddrive elsewhere and yet connected to your computer through the internet. 

### Play Media
Videos and music are sent over the internet as encoded data. These videos are decoded into a form that can be displayed. You may have heard of file formats such as MP4 or MOV. Large videos are large files and can be in multiple MBs. Today large internet bandwidth - the amount of data being set over the wire per second - in many parts of the world is commonplace and large enough that one can expect even large movies to download in some minutes. But this was not always the case, and is still not the case in many geographies and if one is using mobile internet. At one point 30% of the data being sent over the internet was that of videos on Netflix. Now with streaming becoming the norm, it became impertive that companies become smarter about how to streamline this data being sent. 

Application like YouTube apply a sort of just-in-time download, where only windows of the video are downloaded at given time. Assume you are at the 15th minute of a movie, YouTube may make sure that everything only from the 15th minute to the 20th minute are downloaded and ready to be viewed. Choosing the size of the window is based on heuristics, that are based on multiple factors such as the available bandwidth and bitrate. Bitrate is the amount of video information available per frame of the video. If there is more information, the quality of the video is sharper and clearer and lesser the bitrate then the quality is more blurry. If one chooses too small a window then if the download rate is slower than the playback rate, the user will have to wait till the next window is downloaded. If this happens too often it can break the viewer's experience. If the window is too large then if the user only want to watch a part of the video or watches a part of the video before moving to another one, this can end up in a lot of wasted bandwidth for both the user and the provider. Therefore, there is a tradeoff that developers try to optimize.

The players themselves are pretty standardized now in functionality. The usual functionality are:
  - Play, pause, forward, backward buttons to control the playback of the media.
  - Settings to control the bitrate or quality of the video.
  - A seek bar to show the progress of the media with a cursor moving along a bar representing the entire length of the media playing time, which users can move inorder to seek to a particular time in the media
  - Ability to turn on or off subtitles if any.

### Emails and Instant Messages
Instant messaging works differently from emails in that the protocol allows for notifications to arrive to your phone as soon as a message has been sent that is addressed to you. To get an email on your computer so that you can read it, your device has to keep periodically checking with a remote mailbox as to whether there are any new emails for you. Most of use use instant mesaging and have now become standard features in all of our workplaces and lives with messaging applications such as Whatsapp.

Emails and instant messaging applications can be thought of data upload and data download, and that is true, it can. But the standout element of these user flows are the notification. When a message arrives a user has to be notified so that they can open the inbox or look at the chat. How and when that notification should be fired is an important point for designers to consider. Another point to consider is whether those decisions can be left to the user to configure.

### Document Manipulation
Application that allow you to write documents on a layout that represents, for example, an A4 size paper are specialized cases of text input fields. But in many ways they are much richer than just a text input field. These are 'what you see is what you get' - WYSIWYG - editors. These type of editors allow you to intuitive type into the document layout and use the mouse to drag and drop images etc. And as in the name, whatever you see while you are editing is and will be the final layout of the document. For many of us, it will be difficult to remember a time before, but earlier people used to use text fields with special marks or - marking up - on the document to mark out the special properties of parts of the text or the document. Later another program will convert that to final layout. Decendents of such document creation tools - for example, Latex - are still used by the scientific community to write papers. There the benefit is once you provide the marked up text, the documents are created in a standard format for all authors submitting to a conference or journal.

The only data for text editors are usually the text themselves. But the data driving WSIWYG editors are more expressive with the ability to save information such as which part of the text is bold or italics, what the font or colour of certains parts of the text are. 

Like mentioned for data manipulation, document editors such as google docs perform continuous saves of the document. They also allow collaberative editing where the changes made by a user can be seen by another user on the same document.

Another form of documents are spreadsheets. These are sheets of cells arranged in columns and rows. Users can enter data into cells. These have evolved over the years to be more complicated than just storing data in cells. Math operations can be performed between cells and more complicated instructions bordering on code can be written to manipulate the data in the cells.

### Manipulate Vectors, Images and 3D shapes
Image manipulation, like mentioned for maps above, is performed on a canvas, which is a tool that allows more control over individual pixels. The range of functions that are available for image manipulation range for simple to powerful that need trained skills to use correctly. The simpler functions are:
 - Crop: removing sections of the image.
 - Resize: making the image smaller or larger, by sampling pixels when making an image smaller or by imputing values when making an image larger.
 - Rotate: Move all the pixel around an axis.

Other image manipulation applications have range of tools, too many to repeat here but just to name a few:
 - Layering: These can be seen as different images all stacked on top of each other, allowing for better movement.
 - Shapes: Create predifined shapes by adding coloured pixels to the canvas.
 - Brush: Add coloured pixels to the screen as the curser moves on the canvas.
 - Blur: Use mathematical equations to mix the colour value of neighbouring pixels.
 
As the reader can see these class of tools assume that the image is a bitmap, where every pixel's value is individual stored and can be individually manipulated. This can be very useful for certain types of uses such as manipulating pixels of a photograph, but firstly, for large images the on-disk size of the image can be very large and secondly it does not lend itself well to resizing.

Another class of image manipulation tools are those that deal with vectors. If bitmaps remember the value of each pixel individually, vectors remember only certain parameters about the lines used, which then at the time of rendering can be used to impute values of pixels between them. The upside is that these lend themselves well to resize up or down - the drawings created will be sharp. But it can be difficult to manipulate images or create realistic looking images from them, though really skilled artists can do so. The more common use of these can be to create vector drawling such as small illustrations or fonts in font-systems.

Taking this one step ahead is the application of drawing three-dimensional - 3D - diagrams. 3D diagrams means drawings of objects that have not only height and width by also a depth. Displaying 3D diagrams on a 2D screen involves removing an entire dimension which should technically mean information is being removed. However, clever maths are able to project this 3D shapes onto the 2D screen in a way that the mind's perception is able to reimagine the three-dimensional nature of the object.

### Display and Interact with Data Visualizations
Pure data, especially that of numbers can be very hard to parse for humans. Imagine columns of numbers with multiple digits for precision. Borrowing from the same example of maps already spoken about above to illustrate the point, we assume a dataset of cities of the world and the latitude and longitude for their agreed upon city centers. Placing them in table such as this --add table here--, it is impossible to draw inferences about how far these points are from each other or in which direction. However, rendering them on 2D map allows us to understand these questions at just a glance.

Data visualization aim to this with just about any data. How do you tell the story the pure datapoints are trying to tell, by just representing them differently.

The user flow regarding data visualization can involve just representing data in static fashion, or can also involve interactability with mouse clicks, button and even gestures. Creating good visualizations is a hard design task, and we have dedicated an entire chapter to this.

### Voice Calls
Voice and video calls over the internet are similar to video streaming but this now includes a two-way stream, upload and download. Calls unlike streaming movies or other content have to happen in near real-time. But the internet wan't designed for real-time delivery of data. This means there can be issues of call drops and a little more complicated issue of data packet drops. This means certain parts of the call may not arrive and may require to be requested for again. But this adds to the delay and whatever information is now sent may be stale and not useful. But if the response come back in time, it may still be useful. The question to understand for designers is, how stale is stale, and when is it better to have let the packet drop anyway.  
