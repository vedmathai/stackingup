# Whiteboarding Flows

## Why whiteboard flows?
Before diving head first into coding up the application, it helps to have a blueprint for your application. Having a North Star helps thinking through the application from the front to the back and weed out any potential early pitfalls. 

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
*Fig. 1: Simple Search Bar*

![Simplest Search Results Page](/content/page-content/design/whiteboarding-imgs/simplest-search-results.png "A Very Simple Search Results Page")
*Fig. 2: A Very Simple Search Results Page*

It helps to think of the flows in terms of screens and action elements on the screen. Other developers may like working with more abstract representations such as boxes and flow diagrams. While the more experienced may find such flow diagrams more concise and even allow them to capture more details in a more generic way without having to draw out screens, others may find drawing out screens provide a more realistic view. This could be a matter of taste, but we go with drawing out the screens in as much detail as possible, since, as we said, it is easier for people new to designing to follow.

To draw the screens we start with a screen. That means drawing out the rectangular bounding box of the screen itself. On the whiteboard, we can draw out these as boxes next to each other.

In the first screen, we draw the input and a search button. When we click the search button we expect to be shown search results. Therefore, the second screen just flows: a screen with the search results. Questions we can now ask ourselves are, why do we have two screens, are they not just the same screen with the results now shown below. That is a good question, and it can be a future discussion as to whether it is just two states of the same screen, or whether they are two different screens altogether, but for now we have a way to accept an input and display output, which in this case is the search keywords and the search results and this effectively is the first, albeit simplistic, flow.

When displaying search results, we are essentiantly displaying a list. In this case, the list is of recipes. For the user's benefit there has to be something that identifies these list items. It could be an ID but the ID makes sense only if the IDs are known before hand and the user knows what ID they are searching for. Therefore the user is looking to browse through the search results to see which one appeals to them. The search results could just list a list of numbers 1, 2 ... n and the user would have to click on a number to look further. This could serve the purpose, but would end up in a lot of overhead as the user would have to click on each search result, be shown more information and then click on the next number to see the next item.

To alleviate this, can the user be shown some information about the search result itself in the listing page to help the user browse fastser? In this case we add information such as the reciped title. But that may not be enough. We can actually add more, we can choose to show recipe subtitles and even some more tabular information about the recipe such as, the average time to complete it or the perceived difficulty level is.

We draw some examples of this on the screen.

![Simple Search Results Page](/content/page-content/design/whiteboarding-imgs/search-results.png "Simple Search Results Page")
*Fig. 3: Simple Search Results Page*

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
*Fig. 4: Search Page with Ingredients Tags*

We add a method for users to provide a list of ingredients. The idea with this input element is that the user can type out an element into the search bar and press enter or the 'add' button, and the element will be listed below. Once the user clicks on search the search would be performed on all of these tags.

### Filters
We move on to the search results page. We add more functionality here. More specifically, the ability to perform filter and sort. We spoke about filter and sort at length when we discussed [user flows](/user-flows). We depict the filter as list of filter objects in the left side menu. Each filter object has a filter name and list of selectable items, which depict the filter values.

![Search Filters](/content/page-content/design/whiteboarding-imgs/filters.png "Search Filters")
*Fig. 5: Search Filters*

### Sort
Sort is depicted as a button on the top-right.

![Sort](/content/page-content/design/whiteboarding-imgs/sort.png "Sort")
*Fig. 6: Sort*

Clicking on the sort button opens a menu with the list of sort attributes.

![Sort Menu](/content/page-content/design/whiteboarding-imgs/sort-menu.png "Sort Menu")
*Fig. 7: Sort Menu*

Here we depict the sort as a list of attributes but we can also append the order to the attribute such as 'Difficulty: Least to Most,' or 'Difficulty: Most to Least.'

### Pagination
Another element added to the page is that of *pagination*. Pagination means splitting the search results in mutliple pages such that only a few results are shown per page at a time. The pagination element has the following parts:
* The current page
* The total number of pages
* A button that when clicked will move navigate the user to the next page
* A button that when clicked will move navigate the user to the previous page
* An ability to move to a particular page.

![Pagination](/content/page-content/design/whiteboarding-imgs/pagination.png "Pagination")
*Fig. 8: Pagination*

### Recipe Page
![Recipe Page](/content/page-content/design/whiteboarding-imgs/recipe.png "A Recipe Page")
*Fig. 9: Recipe Page*

The recipe is the final outcome of the search. Clicking on a recipe in the list of search results leads us to this page. The design of the page will be generic with the data of each recipe used to populate the exact parts of the page. The page has a heading, the ingredients, the recipe steps among other parts of the recipe. We haven't shown it in our diagram, but the recipe page can also include images of the final dish.

![Add to favourites star](/content/page-content/design/whiteboarding-imgs/favourite-star.png "Add to favourites star")
*Fig. 10: Add to favourites star*

We add another element to the page - an ability for users to add recipes to their list of favourites, so that they don't have to search for them again in the future.

![Back button](/content/page-content/design/whiteboarding-imgs/back-button.png "Back button")
*Fig. 11: Back Button*

This is an example of thinking through the reverse flows. If the user is browsing through recipes, they may want to click on a few recipes to look at the details before moving to the next recipe. In this flow the user will want to go back to the search results page once already on a recipe, so that they can pick and navigate to another recipe in the list. The user can rely on the browser's back button, but implementing a back button in the application can give the feeling of completeness and isolation, that is all the actions that can be performed are performed in a consistent way and can be performed by using only buttons available inside the application's visual space.

### Hamburger Menu
![Introducing Hamburger Menu](/content/page-content/design/whiteboarding-imgs/hamburger.png "Hamburger Menu Button")
*Fig. 12: Hamburger Menu*

The other flows we described in the [our product page](/our-product), were that where users can create a list of ingredients that reflect the ingredients in their real-world inventory and they can search for recipes using that list. This inventory being a more permanent list than the transient one they can create above with the search tags. We need a way to navigate to this feature and any other possible features we may add. Here we introduce the 'menu.' One implementation of which is the hamburger menu. Menus can be displayed as a list of navigation links each next to the other in horizontal or a vertical fashion. They can also be dynamically displayed or hidden on a click of a button to save on some real estate. A form of such a menu is the hamburger menu, so named because the icon used to depict this menu looks like an abstract hamburger, even though it supposed to be an abstract depiction of the menu itself.

![Hamburger drop down](/content/page-content/design/whiteboarding-imgs/drop-down-menu.png "Hamburger Drop Down")
*Fig. 13: Hamburger Drop Down*

On clicking the hamburger menu button, the drop down shows the list of pages that the user can possibly navigate too. The location of the menu, and even the navigation links listed, can change from page to page and provides a convenient way for the user to move around in the application.
### Authorization

Some pages of some applications cannot be reached without the user first logging in. These would especially be in cases where the page is displaying data that is specific to that user. In the case of 'In my Pantry,' the user can perform a search using keywords without signing in, but to store their inventory data in a database and to retrieve that data only for them in a way that other users do not have access to that data requires a user to signin or login.

We design our login in to be a username and password challenge that the user has to fill in. There are other methods such as using a one-time-password sent to a mobile phone or email account, that can be used to login.

To reach the login challenge page we add a signin option in the hamburger menu if the user is not already signed in. If the user navigates to a page that requires a login, such as the page that lists the user's favourite recipes, inventories or menus, and the user has not signed in yet, the user can be redirected to the login page.

![Signin](/content/page-content/design/whiteboarding-imgs/signin.png "Signin")
*Fig. 14: Sign-in*

To be able to signin the user should have an account of that is registered with corresponding  username and password. If the user is not registered, then many self-serving applications provide the option for the user to signup themselves, that is, provide a username, password and additionally some information that allows the application to personally identify them such as a name or other such information. Other applications dealing in more sensitive data may require another user who is already known the application to register a new user with the application.

Here the sign-in page has a link for the user to sign-up instead.

![Signin New User](/content/page-content/design/whiteboarding-imgs/signin-new-user.png "Signin New User")
*Fig. 15: Link to Sign-in new user*

The sign-up page has the options for the user to provide a username, a password or other personally identifiable information.

Here the sign-in page has a link for the user to sign-up instead.

![Sign-up for a New User](/content/page-content/design/whiteboarding-imgs/signup.png "Signup New User")
*Fig. 16: Sign-up for a new user*

The sign-up page also has the option for the user to go back and sign-in instead, in case they actually realize they already have a username registered here. This case is very common when a user tries sign-up but the application is able to inform them that the username already exists, and the user feels that there is a high chance that it was them who had registered on this application with that username.

If a user is not able to remember their login credentials, they may be given the option to reset it 

![Forgot Password](/content/page-content/design/whiteboarding-imgs/signin-forgot-password.png "Forgot Password")
*Fig. 17: Link to Forgot Password on Sign-in page*

![Signin Forgot Password](/content/page-content/design/whiteboarding-imgs/forgot-password.png "Signin Forgot Password")
*Fig. 18: Forgot Password page*

The back-link from the forgot-password page to the sign-in page is another example creating back links between pages to maintain consistency and inter-connectedness between pages for the user's easy movement.

![Forgot Password Back Button](/content/page-content/design/whiteboarding-imgs/forgot-password-back.png "Forgot Password Back Button")
*Fig. 19: Link go back on Forgot Password page*

### Favourite Recipes
**Fig. 10** depicts a star that toggles whether the given recipe is added to the list of 'favourite' recipes for the user. We create a screen that allows the user to see the list of recipes that they have previously marked as 'favourite.' We can navigate to this list by clicking on the navigation button in the hamburger menu.

![Favourite Recipes](/content/page-content/design/whiteboarding-imgs/favourite.png "Favourite Recipes")
*Fig. 20: List of Favourite Recipes*

### Menus
A menu is a collection of recipes for dishes that the user wants to create at a given time. Why have menus? This arises from the question, 'when the user searches for a dish given a set of ingredients in an inventory, what if the user wants to search for another recipe for the same meal?' The search for the second recipe should discount the ingredients that would pontentially be used when creating the first dish. The menu allows users to add recipes together such that they are guaranteed that they have the inventory has all the ingredients and amounts for all the recipes currently added to the menu.

**Fig. 21** is a list of menus that the user can maintain.

![Menus](/content/page-content/design/whiteboarding-imgs/menus.png "Menus")
*Fig. 21: Menus*

Clicking on a particular menu in the menu list shows the particulars of a menu. This includes the name of the menu, the list of recipes added to the menu and a cummulative list of ingredients created by summing over the ingredients required for individual recipes in the menu. The user can also choose to delete a recipe from the menu.

Clicking on a particular recipe in the menu will lead the user to the recipe page such as the one in **Fig. 9**.

![Menu](/content/page-content/design/whiteboarding-imgs/menu.png "Menu")
*Fig. 22: Menu*

![Menu Update Inventory Button](/content/page-content/design/whiteboarding-imgs/menu-update-inventory.png "Menu Update Inventory Button")
*Fig. 23: Menu Update Inventory Button*

To allow a user to add a recipe to the menu, we add a 'add to menu' button on the recipe. Clicking this button will open a modal that asks the users choose a menu to add this recipe to.
![Add to Menu](/content/page-content/design/whiteboarding-imgs/add-to-menu.png "Add to Menu")
*Fig. 25: Add to Menu*

### Inventories
An inventory stores a list of ingredients available with the user. Instead of constricting the user to just one inventory, we choose to allow the user to create many 'inventories' or lists of ingredients. The user may want to track an inventory at multiple locations invidually, say their grandmother lives next door and they would want to track her inventory too, for her. When designing we may not need a compelling reason to allow the user to do more, but we'll need a compelling reason to restrict the user. But this comes with a tradeoff if the flow doesn't seem natural enough then it can confuse the users.

The inventory list is exactly what the name says, it is a list of inventories that are depicted as a table. The elements in the row may show information about the individual inventories, it can also have action buttons to call the user to perform further action on the element.

![Inventory List](/content/page-content/design/whiteboarding-imgs/inventory-list.png "Inventory List")
*Fig. 26: List of Inventories*

![Inventory List Sort](/content/page-content/design/whiteboarding-imgs/sort-inventory-list.png "Inventory List Sort")
*Fig. 27: Sorting the List of Inventories*

The 'add an inventory' button above the table creates a new inventory object and adds a pointer to it in the table. 

![Add Inventory Button](/content/page-content/design/whiteboarding-imgs/inventory-list-add.png "Add Inventory Button")
*Fig. 28: Add Inventory*

But before it can add the inventory object we show display a large box above the content, called a modal, that captures some basic identifying information about the object. This flow forces the user to provide, say, a name for the inventory, if they don't then inventory is not created.

![New Inventory Modal](/content/page-content/design/whiteboarding-imgs/new-inventory-modal.png "New Inventory Modal")
*Fig. 29: New Inventory Modal*

An inventory is a list of available ingredients. Each row represents an available ingredient along with the quantity available. 

![Inventory](/content/page-content/design/whiteboarding-imgs/inventory.png "Inventory")
*Fig. 30: Inventory*

A user can add new ingredients to the inventory by clicking on the 'add ingredients' button, depicted by the 'plus' symbol above the table. The modal allows users to choose an ingredient from a pre-defined set of ingredients and also provide the amount available in their physical pantry.

![Add Ingredient to Inventory Modal](/content/page-content/design/whiteboarding-imgs/inventory-add-ingredients.png "Add Ingredient to Inventory Modal")
*Fig. 31: Add Ingredient to Inventory Modal*

The user can launch a search from the inventory page, as per the original idea. However, a constraint added on the search was that it should look for recipes such that there are enough ingredients for all the items in the menu together. To do this, the menu would need to be linked to the search that is about to be launched. To link the menu, again a modal is shown that allows the user to choose the menu they want to link to.

![Choose Menu Modal](/content/page-content/design/whiteboarding-imgs/choose-menu-modal.png "Choose Menu Modal")
*Fig. 32: Choose Menu Modal*

An alternative idea would be to link the inventory permanently to a menu, and not have a modal everytime we launch a search. In other words the menu linked becomes an attribute of the inventory. This could have the same effect, but this is a good example of how reflecting the real-world relationships when depicting these virtual relationships can help the user understand the system faster and more intuitively. In the real-world a menu is not an attribute of an inventory, one could have potentially different menus that are created from the same inventory, for example, given bread and eggs, a user could decide to have two alternative menus, one that has an omelette sandwich, and the other that has scrambled eggs on toast. Linking a menu as an attribute of an inventory removes the transient - short-lived - nature of the relationship and between a menu and an inventory and makes having a world where multiple menus are linked to an inventory as attributes is hard to understand for user.

To help make the search more relevant, the menu can have a set of attributes which can be by the search. Examples of these attributes could be the meal type or meal parts. Meal types is the attribute that determines whether the search results should include breakfast or lunch dishes. Meal parts means whether the search should include dishes for the parts of meal such as appetizers, main course or desserts.

![Menu Attributes](/content/page-content/design/whiteboarding-imgs/menu-attributes.png "Menu Attributes")
*Fig. 33: Menu Attributes*
## Shopping Lists
![Shopping Lists](/content/page-content/design/whiteboarding-imgs/shopping-lists.png "Shopping Lists")
*Fig. 34: Shopping Lists*

Though search helps users build menus given ingredients they already have with them. But say they build a menu which has a few or more ingredients that do not have in their pantry. Another useful feature of 'In my pantry,' would be help users create a list of items for which they would have to acquire in order to be able to make all the recipes in the menu, at least according to the recipes for each item.

As for menus and inventories, this application will allow users to create multiple shopping lists. The table in fig. 32 displays the list of shopping lists. Users can use the 'create new shopping list' to create a fresh shopping list.

![Shopping List](/content/page-content/design/whiteboarding-imgs/shopping-list.png "Shopping List")
*Fig. 35: Shopping List*

As mentioned above a shopping list is list of ingredients and their respective required quantities needed for the user to successfully be able to prepare all the dishes in the menu. Accordingly, the table in fig. 33 is a list of ingredients and their quantities. A function to generate a shopping list will take a menu, or list of recipes, and an inventory, or a list of available ingredients, and it will generate a list of required ingredients as per the ingredients listed for each recipe and it will perform a subtraction over the required quantity and available quantity for each element. We choose to make the menu and inventory are attributes of the shopping list as the shopping list makes sense only given the menu and the inventory, unlike the transient way in which we used the menu for search by asking the user to choose a menu when performing a search from the inventory page in fig. 29.

## Flow Diagram
When talking about individual page designs above, we have already covered the many ways they interact with each other, but drawing out the actual web of interactions between the different pages, when whiteboarding, can help provide a 100 feet in the air view of the application pages and their interactions.

![Flow Diagram](/content/page-content/design/whiteboarding-imgs/flow-diagram.png "Flow Diagram")
*Fig. 36: Flow Diagram*

The starting point of the application would be the search page, shown in fig. 34 at the centre of the web. The user can perform a search using the search bar and move to the search page. Alternatively, using the drop-down menu shown in fig. 13, the user can navigate to the other pages, namely the menus page, inventories page, or the shopping lists page. By clicking on a list item in the respective tables, users can move to the specific menu, inventory or shopping list page.

By performing a search a user will be shown the search results page. By clicking on a search result, the user will be shown a recipe page. Here the user can click the add-to-menu button to add the recipe to the menu.

It should be pointed out that for the sake of not making the diagram even more intricate than it already is, we have left out drawing an arrow from the inventory and menu node to the shopping list node which could have indicated the use of the inventory and menu when creating the shopping list if drawn.

The user can go to the login page using the login option in the hamburger menu (link not shown for brevity). From the login page the user may go to the sign-up page to sign-up if they haven't already, or they may go to the forgot credentials page if they need to reset their credentials. If th user is able to login successfully they will be taken to the search page again, but this time in the logged-in state.

## Error Flows
Most flows we have discussed above are so called 'happy paths,' that is the flow taken when the user is on the right trajectory to complete what they want to complete, for example, search leads to search results which leads to recipes that can get added to the menu. Alternatively, the happy path for submitting a username and password is for the user to be logged in. If the user provided the wrong username and password combination, the user cannot be logged in. At this point, the application should inform the user of this and help the user recover onto the right path.

The screens below capture error flows for when the user is attempting to signup and when the username is not unique as in fig. 37 and when the password is too weak as in fig. 38.

Error flows are usually displayed in red out of convention for caution, so we use that colour too below.

![Username Taken Error](/content/page-content/design/whiteboarding-imgs/username-taken-error.png "Username Taken Error")
*Fig. 37: Username Taken Error*

![Password Too Weak Error](/content/page-content/design/whiteboarding-imgs/password-error.png "Password Too Weak Error")
*Fig. 38: Password Too Weak Error*

## Empty States
The data backing the tables in the figures displaying the search results, list of inventories, list of menus, inventory, menu and shopping list, were all non-empty and therefore were populated with rows - one for each datum. But what if there is no data to start with, these tables would be empty. While having empty tables is not necessarily an issue, it can still leave the user confused as to whether there is no data, or if there was something that went wrong on the page load or if the data still hadn't arrived. It should be noted that most users would not go into this level of detail in their analysis, but they would still subconsciously be unnerved, therefore it makes sense to inform the user about the state of the table where possible.

If the table were still loading, a loading animation can be displayed to the let the users know that. Similarly, if the load has completed and there indeed was no data to display in the table - known as an empty state - informing the users that the table is empty and what they could do to start populating the table can make the entire experience smoother for them as this will help them rule out thinking about other possible issues.

Below, we loop through some of the tables and show drawings of what empty states would look like for them. Empty state messages follow similar templates, inform the user that the particular data set is empty, and what next to do about it.

We inventories' empty state message to illustrate: *There are no inventories. Use the add inventory button to get started.*

![Search Empty State](/content/page-content/design/whiteboarding-imgs/search-empty-state.png "Search Empty State")
*Fig. 39: Search Empty State*

![Inventories Empty State](/content/page-content/design/whiteboarding-imgs/inventories-empty-state.png "Inventories Empty State")
*Fig. 40: Inventories Empty State*

![Inventory Empty State](/content/page-content/design/whiteboarding-imgs/inventory-empty-state.png "Inventory Empty State")
*Fig. 41: Inventory Empty State*

![Menus Empty State](/content/page-content/design/whiteboarding-imgs/menus-empty-state.png "Menus Empty State")
*Fig. 42: Menus Empty State*

![Menu Empty State](/content/page-content/design/whiteboarding-imgs/menu-empty-state.png "Menu Empty State")
*Fig. 43: Menu Empty State*

![Shopping List Empty State](/content/page-content/design/whiteboarding-imgs/shopping-list-empty-state.png "Shopping List Empty State")
*Fig. 44: Shopping List Empty State*
