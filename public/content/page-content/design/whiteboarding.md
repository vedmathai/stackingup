# Whiteboarding Flows

## Why whiteboard flows?
Before diving head first into coding up the application, it helps to have a blueprint for your application. Having a Morth Star helps thinking through the application from the front to the back and weed out any potential early pitfalls. 

When working alone it can often be very tempting to start coding up the application. The thrill of seeing a new idea come to life in the form of a demo or even a working model beats boring paper work any day. But there are many reasons why it makes sense to plan out the project before starting.

Firstly, large projects can have many parts, potentially those that have many parts that interact closesly with each other. For example, these can be the front-end interacting with the back-end, which interacts with the database, or it can even be the deep interaction between two user flows, for example, signup and login write to or read similar data but in different ways. Jumping in and coding the application out can lead to a lot of code laid down before potential pitfalls are identified. Once a lot of this code is written, retracting this code can be hardwork that could have been avoided if there were a top-down design that the developer could follow when coding up the application.

Secondly, diving deep into one of these flows early can make the developer lose sight of the larger goal and either end up taking what could turn out to be short-sighted steps. Having a blueprint can help the developer position and reorient themselves after a bout of deep-dive coding.

Thirdly, when working in a team, each team member could be working on potentially different things, say one would work only on the front-end, while another could work on the APIs and the interaction between the front-end and server, while another could be working on the business logic and front-end, while the vision for the application could be led by the project manager. Thinking through the blue print early and putting it down on paper makes it easy to communicate the vision, potential issues and even changes between the team members. It helps guide the design and decision when building their smaller portion of the bigger application.

That being said, it is not always a good idea to plan out the entire work, there are instances when diving deep makes sense. When trying to prove the viability of a new idea, or experimenting, a developer may choose to make a quick and dirty version of the code before doubling back to plan out the larger application if the viability has been proved by the experiment.

## Start Whiteboarding
Whiteboarding can be a daunting task: how much of the details should be focussed on? Should only the broad strokes be concentrated on?
The best place to start is again from the inspiration of the application, why you, as the developer, want to build it in the first place. To help walk through the steps of whiteboard we'll take our application, the inspiration of which we describe [here](/our-product).

To recap, the crux of our idea - which we christened, 'In my Pantry,' is to allow users to search for recipes based on the ingredients available in their pantry.

To start whiteboarding, it as simple as drawing out that main flow. To search for a recipe, user would have a search bar and a screen to view the search results. 

![Simple Search Bar](/content/page-content/design/whiteboarding-imgs/search-bar.png "Simple Search Bar")
*Fig 1: Simple Search Bar*

![Simplest Search Results Page](/content/page-content/design/whiteboarding-imgs/simplest-search-results.png "A Very Simple Search Results Page")
*Fig 2: A Very Simple Search Results Page*

It helps to think of the flows in terms of screens and action elements on the screen. Other developers may like working with more abstract representations such as boxes and flow diagrams. While the more experienced may find such flow diagrams more concise and even allow them to capture more details in a more generic way without having to draw out screens, others may find drawing out screens provide a more realistic view. This could be a matter of taste, but we go with drawing out the screens in as much detail as possible, since, as we said, it is easier for people new to designing to follow.

To draw the screens we start with a screen. That means drawing out the rectangular bounding box of the screen itself. On the whiteboard, we can draw out these as boxes next to each other.

In the first screen, we draw the input and a search button. When we click the search button we expect to be shown search results. Therefore, the second screen just flows: a screen with the search results. Questions we can now ask ourselves are, why do we have two screens, are they not just the same screen with the results now shown below. That is a good question, and it can be a future discussion as to whether it is just two states of the same screen, or whether they are two different screens altogether, but for now we have a way to accept an input and display output, which in this case is the search keywords and the search results and this effectively is the first, albeit simplistic, flow.

When displaying search results, we are essentiantly displaying a list. In this case, the list is of recipes. For the user's benefit there has to be something that identifies these list items. It could be an ID but the ID makes sense only if the IDs are known before hand and the user knows what ID they are searching for. Therefore the user is looking to browse through the search results to see which one appeals to them. The search results could just list a list of numbers 1, 2 ... n and the user would have to click on a number to look further. This could serve the purpose, but would end up in a lot of overhead as the user would have to click on each search result, be shown more information and then click on the next number to see the next item.

To alleviate this, can the user be shown some information about the search result itself in the listing page to help the user browse fastser? In this case we add information such as the reciped title. But that may not be enough. We can actually add more, we can choose to show recipe subtitles and even some more tabular information about the recipe such as, the average time to complete it or the perceived difficulty level is.

We draw some examples of this on the screen.

![Simple Search Results Page](/content/page-content/design/whiteboarding-imgs/search-results.png "Simple Search Results Page")
*Fig 3: Simple Search Results Page*

Readers may notice that we add the logo to this screen and a search bar too. This is an example of continuity and familiarity. The familiarity is driven by the fact that some of us may be used to these screens in our day to day activities - a reason why so many applications are designed to look similar when performing a similar action. Adding the logo helps place the user in the application and the search bar helps the user know what they searched for or even start a new search from the current screen. This kind of detailing may or may not be required and can be driven by our experiences but this goes to show how when designing on a white board there are not hard and fast rules for how deep to go and that depth and detail can be chosen based on the designer's experince and comfort and that that of their team too.

## How to Whiteboard better
There is no standard way of whiteboarding. While it is predominantly an opportunity to brainstorm about the flows, it is also an opportunity to make sure all the flows have been thought through.

Towards that end, following these steps can makes sure we have covered all edges. Given the user flow:
- What data should the user enter? 
- How will the user's input be registered? Is the input in the form of text fields, checkboxes or some other format?
- *What* information will be presented and *how* will it be presented?
- What will be the interactions between the screens be like? On what conditions will a screen change be induced?


These questions can help us get to a version of the design where most of the functionality is though through. The next set of questions can help us streamline the designs further.
- Is the page showing too much information, will it confuse the user? Or alternatively, is it showing too little, can we enable the user to be more productive by clubbing more features together on the same page.
- Where does the data come from, is it something available to the front-end, or does the back-end have to be queried for it? Does the application make it as intuitive for the user when the application querying and waiting for the data from the back-end.
- Are all the pages accessible both as forward flows and backward flows. When thinking through application it may be intuitive to think about how the flow will work when each step is successful or positive. But what if the user wants to backtrack and move backwards. And what if there are any error situations, such as the data not being formatted correctly or the data has been semantically rejected by the backend?

## Detailing the Flows
### Ingredients Tags
The original idea was that the search would be performed on a list of ingredients. Right now the search is performed on only a single string. We go back to the search page and try to improve upon it. 

![Search Page with Ingredients Tags](content/page-content/design/whiteboarding-imgs/add-tags.png "Search Page with Ingredients Tags")
*Fig 4: Search Page with Ingredients Tags*

We add a method for users to provide a list of ingredients. The idea with this input element is that the user can type out an element into the search bar and press enter or the 'add' button, and the element will be listed below. Once the user clicks on search the search would be performed on all of these tags.

### Filters
We move on to the search results page. We add more functionality here. More specifically, the ability to perform filter and sort. We spoke about filter and sort at length when we discussed [user flows](/user-flows). We depict the filter as list of filter objects in the left side menu. Each filter object has a filter name and list of selectable items, which depict the filter values.

![Search Filters](/content/page-content/design/whiteboarding-imgs/filters.png "Search Filters")
*Fig 5: Search Filters*

### Sort
Sort is depicted as a button on the top-right.
![Sort](/content/page-content/design/whiteboarding-imgs/sort.png "Sort")
*Fig 6: Sort*

Clicking on the sort button opens a menu with the list of sort attributes.
![Sort Menu](/content/page-content/design/whiteboarding-imgs/sort-menu.png "Sort Menu")
*Fig 7: Sort Menu*

Here we depict the sort as a list of attributes but we can also append the order to the attribute such as 'Difficulty: Least to Most,' or 'Difficulty: Most to Least.'

### Pagination
Another element added to the page is that of *pagination*. Pagination means splitting the search results in mutliple pages such that only a few results are shown per page at a time. The pagination element has the following parts:
* The current page
* The total number of pages
* A button that when clicked will move navigate the user to the next page
* A button that when clicked will move navigate the user to the previous page
* An ability to move to a particular page.

![Pagination](/content/page-content/design/whiteboarding-imgs/pagination.png "Pagination")
*Fig 8: Pagination*

### Recipe Page
![Recipe Page](/content/page-content/design/whiteboarding-imgs/favourite-star.png "A Recipe Page")
*Fig 9: Recipe Page*

The recipe is the final outcome of the search. Clicking on a recipe in the list of search results leads us to this page. The design of the page will be generic with the data of each recipe used to populate the exact parts of the page. The page has a heading, the ingredients, the recipe steps among other parts of the recipe. We haven't shown it in our diagram, but the recipe page can also include images of the final dish.

![Add to favourites star](/content/page-content/design/whiteboarding-imgs/favourite-star.png "Add to favourites star")
*Fig 10: Add to favourites star*
We add another element to the page - an ability for users to add recipes to their list of favourites, so that they don't have to search for them again in the future.

![Back button](/content/page-content/design/whiteboarding-imgs/back-button.png "Back button")
*Fig 11: Back Button*
This is an example of thinking through the reverse flows. If the user is browsing through recipes, they may want to click on a few recipes to look at the details before moving to the next recipe. In this flow the user will want to go back to the search results page once already on a recipe, so that they can pick and navigate to another recipe in the list. The user can rely on the browser's back button, but implementing a back button in the application can give the feeling of completeness and isolation, that is all the actions that can be performed are performed in a consistent way and can be performed by using only buttons available inside the application's visual space.

### Hamburger Menu
![Introducing Hamburger Menu](/content/page-content/design/whiteboarding-imgs/hamburger.png "Hamburger Menu Button")
*Fig 12: Hamburger Menu*
The other flows we described in the [our product page](/our-product), were that where users can create a list of ingredients that reflect the ingredients in their real-world inventory and they can search for recipes using that list. This inventory being a more permanent list than the transient one they can create above with the search tags. We need a way to navigate to this feature and any other possible features we may add. Here we introduce the 'menu.' One implementation of which is the hamburger menu. Menus can be displayed as a list of navigation links each next to the other in horizontal or a vertical fashion. They can also be dynamically displayed or hidden on a click of a button to save on some real estate. A form of such a menu is the hamburger menu, so named because the icon used to depict this menu looks like an abstract hamburger, even though it supposed to be an abstract depiction of the menu itself.

![Hamburger drop down](/content/page-content/design/whiteboarding-imgs/drop-down-menu.png "Hamburger Drop Down")
*Fig 13: Hamburger Drop Down*

On clicking the hamburger menu button, the drop down shows the list of pages that the user can possibly navigate too. The location of the menu, and even the navigation links listed, can change from page to page and provides a convenient way for the user to move around in the application.
### Authorization


![Signin](/content/page-content/design/whiteboarding-imgs/signin.png "Signin")
*Fig 14: Sign-in*

![Signin New User](/content/page-content/design/whiteboarding-imgs/signin-new-user.png "Signin New User")
*Fig 15: Link to Sign-in new user*

![Signin Forgot Password](/content/page-content/design/whiteboarding-imgs/forgot-password.png "Signin Forgot Password")
*Fig 16: Forgot Password page*

![Forgot Password](/content/page-content/design/whiteboarding-imgs/signin-forgot-password.png "Forgot Password")
*Fig 17: Link to Forgot Password on Sign-in page*

![Forgot Password Back Button](/content/page-content/design/whiteboarding-imgs/forgot-password-back.png "Forgot Password Back Button")
*Fig 18: Link go back on Forgot Password page*

### Favourite Recipes
![Favourite Recipes](/content/page-content/design/whiteboarding-imgs/favourite.png "Favourite Recipes")
*Fig 19: List of Favourite Recipes*

### Inventories
![Inventory List](/content/page-content/design/whiteboarding-imgs/inventory-list.png "Inventory List")
*Fig 20: List of Inventories*

![Add Inventory Button](/content/page-content/design/whiteboarding-imgs/inventory-list-add.png "Add Inventory Button")
*Fig 21: Add Inventory*

### Menus
![Menus](/content/page-content/design/whiteboarding-imgs/menus.png "Menus")
*Fig 22: Menus*

![Menu](/content/page-content/design/whiteboarding-imgs/menu.png "Menu")
*Fig 23: Menu*

## Flow Diagram
![Flow Diagram](/content/page-content/design/whiteboarding-imgs/flow-diagram.png "Flow Diagram")
*Fig 24: Flow Diagram*

## Negative Flows