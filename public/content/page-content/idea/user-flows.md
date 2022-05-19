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

### Sort

### Filter

### Add to cart

### Checkout

### Manipulate Form Information

### Create and manipulate account details

### Start a Job

### Consume an Output

### Display Textual Information

### Play Media

### Upload Content

### Document and Data Manipulation

### Manipulate Vectors and Images

### Display and Interact with Data Visualizations

### Customer service chat

### Maps

### Examples of applications that use these:
banking
console
ecommerce

## Talk about users lifes. Persona

## Minimum Viable Product - coherence over feature rich.