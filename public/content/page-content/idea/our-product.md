# Our Product
On this page, we will together come up with an idea and the user flows for an application that we will later and build out and deploy. 

## The Inspiration
I an cook a bit, and by a bit that means I know the recipe to about 2-3 dishes by heart but depend on google and the any number of sites that list recipes when I am in the mood to try anything new. When looking for recipes, either they end up being too difficult or I don't have any number of the ingredients that are required. This requires me to loop through recipes and map out what ingredients and is actually on my shelf or in my fridge.

Often, with my computer science hat on, I wonder how much easier it would be if I had a reverse lookup for recipes. I suppose an application to which if I tell what ingredients I have, it would search only for recipes for which I actually have the ingredients.

## Competition
At this point it is always best to Google the idea and see if anyone has implemented it. Search with alternate wording if required. Its not wholly commesurations if someone has, you still deserve a pat on your back for almost originally and independently coming up with the idea. If it has not been implemented then congratulations are in order, now you just need to build it out and you are sitting on a large paycheck. We kid, of course. 

Now for the reverse-recipe lookup idea, I do do a search and find
 - SuperCook
 - AllRecipes Dinner Spinner
 - BigOven

At first cut they are all pretty good, an apart from searching for recipes by name, they allow for filtering of the recipes based on ingredients to include and not include.

Let's try them. We do and we find out their search is too strict to be adapted to the idea. For example, they strictly only include recipes that have all of the ingredients in the 'ingredients to include.' That is is a little different from what the inspirational use case was. If on hav a list of items in the fridge and wants recipes that can be made with all of them or a subset of them. So it looks like there is some scope for innovation here: doesn't seem like much. But companies have been made or gone bust on much less.

## Sketching it out
Starting from the inspiration section we need a way for users to see a list of recipes given a set of ingredients. Looking at the list of user flows in the previous page, we can say that this userflow maps to search and filter. This becomes the anchor point around which to our entire flow design. In any search, there would be a page that has a search bar and a search listing page that shows the results of the search. This gives us at least two pages. 

In the idea mentioned above we need a way to tell the application what ingredients we have at home. The simplest way to do this is to write it down into a textfield as a data entry flow.

Once we search for our recipes and see a search listing page, we then have to actually see a recipe so as to complete the entire cycle of searching for and viewing a recipe. 

Therefore, the barebones flow that satisfies the idea in the inspiration, consists of 3 types of pages:
 - the search bar
 - the search results listing and
 - the recipes page.

## Fleshing it out
Now that we have a sketch of the main flow, it is time to add the frills and flesh to it. Lets begin with the skeleton flow above and work backward or forward if necessary.

### Search page
The search page currently has just a search bar and place to add ingredients availables. We said that the mechanism of adding ingredients would only be a text field. But this can get difficult for search because the search would have to understand how to use the words in the free text for filtering out the recipes. For example, if you say include 'chilies, tomato sauce,' should the search understand this as two different items, 'chilies,' and 'tomato sauce,' or should it assume one item 'chili tomato sauce.' One can argue that the comma is a good indicator of that the user actually meant it as two different items. But this depends too much on the user getting the commas right. Are there UI designs one can use to collect a list of items and make it more clear to the user what are being considered different items?

Yes, there is a method called 'chips.' These use ui borders, change in background color or space to demarcate different elements. These appear dynamically based on what the user is typing. This makes it clear to the user what is being considered a different item in their list of items available or not.

We don't have to necessarily use chips, we can even make the ui input more dynamic, everytime the user presses enter the cursor can complete the current line and move the next line if necessary.

If we by chance we have a list of ingredients, we can even use that list to validate the user's input. To elucidate quickly, if we have list of possible ingredients, as the user types in a word, the word will be use to look into the list and if a word exists, we now know that the chances of that word being bogus are pretty low. This this and the previous flow lead us to another good general principle of design - validate on input. Pushing the validation stage to be as early and close to the user as possible allows us to work with the user interactively to weed out possible small mistakes or allow the user the rectify their input in case the application does not give positive replies.

One of the learnings from the competition section above is that the competition applications are very strict about how they deal with the ingredients that are mentioned in the 'ingredients available' list. They will not display any recipes that do not have even one of the ingredients. But we don't have to entirely give only the new offering of showing recipes that are made from any of the ingredients that are listed. We feel we can do one step better. We can leave this choice to the users. We can add another element to the search called 'must-include ingredients.' This follows similar to the style of the apps in our competition. If users add ingredients to this list, then only recipes that have those ingredients will be listed.

### Search Results Page
The search has taken place but has returned a large list of possible recipes. How should the user navigate this list? Scrolling through the entire list can be hard, and they would probably only go through about 10-15 recipes at max or try to manually decide which recipe appeals to them just from the name.

We can do better than this. We can add a sort and filter to the page. Sort attempts to add meaning to the list by deciding for the user what items they may be interested in first, as we saw in the [user flows page](/user-flows). We need to imagine what attributes the user would like the recipes to be sorted on. Some of which come to mind are:
 - Search Relevance: To perform the search, some algorithms naturally award score to each search item in the list. By showing the highest scoring match first, there are higher chances that the user will find what they were looking for in the top set of results.
 - Difficulty: What skill-level should the cook be at to be able to successfully complete this recipe.
 - Time to complete: The average amount of time it will take to comlete the recipe.
 - Number of ingredients: The number of ingredients used in the recipe.

In addition to the sort we can implement a filter. The conceit of this application - listing only recipes that have certain ingredients - itself is a filter. But, we can choose to improve the interactivity between the user and the application by adding a menu of filters. Here, like mentioned in the [user flows page](/user-flows) page, selecting two values in the same filter type amounts to it being an AND operation, and selecting two filter values from two different filter types amounts to it being an OR operation. Some of the filter-types that we may apply in this scenario are:
 - Cuisine: Whether the attribute of the dish is that it is of continental, Indian or Italian
 - Time to complete: The same as the attribute in the list of sort attributes. Sort and Filter can have the same attributes, becaues they two related yet different actions on the items. Filter entirely hides the search results while sort just pushes them down.
 - Number of ingredients: Same as the attribute in the sort.
 - Food Specification Type: Whether it is vegetarian, vegan etc.
 - Difficulty: Same as the attribute in the list of sort attributes.

The interactivity here comes from the items updating themselves everytime a user applies a filter. Updating the list of items live allows the user to quickly understand the lay of the land in terms of the search results. For example changing the choosing a value of '5 minutes,' for the filter type, 'time to complete,' will show certain easy recipes, the user can quickly glance to see if anything in the list interests them.

### Recipe page
Once a recipe page is displayed, the usual components that make up a recipe are:
 - Image of the final dish
 - Ingredients
 - Preperation time
 - Method

This should be enough for a basic recipe page.

## Brainstorming some more
The previous section fleshed out the parts that are required to satisfy the original idea or inspiration for that idea. In this section we brainstorm using the question, 'what else can we do?' When whiteboarding this is natural place for product designers to ask after getting the basic flow down. This helps them understand what they are leaving on the table in case they choose not to add any feature, or by understanding what shape the future roadmap could take, they can better flesh out the current requirements.

### List of ingredients tracker
While whiteboarding we think about the fact that in the flow till now the user has to add all the items available to them everytime they want to perform a search for recipes. Since the number of ingredients available may be around 20-30 items, most users will only add a few ingredients available to them, thereby defeating the purpose of this application, that is to show recipes with ingredients that the user knows is available at home.

To improve user flow of the application, we can offer to remember the list of items that the user has. There would be a one time exercise everytime the user updates the pantry, but we can offer to update the ingredients available automatically based on the recipes the user has chosen.

But we soon realize this is not a very accurate way of keeping tab over ingredients availble to the user because:
- we cannot expect the user to only use the recipes availble on the app, they may use other recipes or they make use create dishes from recipes they already know.
- we cannot expect the user to follow the recipe exactly, there may be some adjustments for taste or they may be some wasted ingredients.
- some of the ingredients on the shelf may reach the end of their shelf-life and may have to be discarded.

Therefore, to keep the list dependable there would have to be multiple ways to edit the list by the user. This is an instance of the data manipulation user flow from the previous page.

An added facet of this flow is that this information will have to be persistent, i.e., saved between instances. It should be accesible to the user, if they restart the application or the phone, or even they want to access this information on another device. To be able to access this information from anywhere, anytime the information should be available in a place where it can be accessed. The suitable place for this information is somewhere on the internet. If we build the user flow in the such away that we push this data online every time there is an update, we can then download it elsewhere.

But this data is particular only to the user. No one else should be able to access it. This means it is associated with an account. And that account is what links the user to their data. This brings us to the next flow requirement.

### Signup and login
Since we need our application to have the concept of accounts in order to save user's data, the next requirement is that of the flow that allow users to create, log in and maintain the account. Our application has no extra requirements over and above that of standard login and account management. We will have a
 - login page
 - signup page
 - account management page

Each of these have been covered in detail in the user flows page.

### Alter or add recipes
We have already mentioned that users may not follow a recipe to a T. They may change recipes or values of the quanities of ingredients used. In such cases, we allow the user to update the recipe on the spot. They may also find it convenient to save it for themselves later in case they like the reciped they have tweaked better than the orginal recipe.

Users may also be allowed to add a new recipe from scratch in case it does not exist already.

These are examples of the information manipulation abstract user flow mentioned in the user flow page.

### Suggest recipes
Now that we have chosen to include the ability for a user to login into an account in order to keep track of the ingredients they have left in their fridge or pantry, we also now will access to usage data of the application, namely which users like which recipe. To know whether a user liked a recipe we may include a voting button, which a user can use to vote up or vote down a recipe. If we do not implement such a button, we can alternatively use a heuristic to guess at what recipes users liked. The heuristic is the count of the number of times the user clicked on a recipe. Majority of the recipes will have a count of 0. Many will have a count of 1, probably very few will have a count of more than 1.

Just as Netflix, Facebook or Linkedin suggest content based on your previous viewing or engagement habits, this app can suggest to its users new recipes based on their engagement habits for recipes.

### Create list of ingredients to buy based on previous usage.
The aim application is to suggest recipes based on the ingredients available. But what if the user doesn't have to reach the point where they have to search for recipes based on the ingredients available. What if they meticulous planners and would rather have the right amount of ingredients every week.

Because the user's cooking history is known to us, we can allow history to be a good indicator of the future in this case, and create a specialized grocery list for the user. When they go to the grocery store we can suggest what to buy and how much. So that they don't need to calculate.

### Reports at the end of the Week
A user may be interested in the nutritional value of what they ate and understand the break down. This can be very hard data to understand at just a glance. Each meal can have multiple dishes and each dish will have multiple ingredients for which the individual nutritional values are known. An individual will have to cut and carve up the portions, find the nutritional value for each ingredient and then add it all back up.

But then it becomes hard to make quick comparisons to answer questions such as did they eat more carbohydrates on average during breakfast or lunch during the last week. Or see which ingredients contributed the most to their intake of proteins.

What if they had and interactive display of this information that at clicks of buttons change what information it is depicting and allows the user to play with the data so that they may draw inferences about where exactly they can improve for the next week.
## Monetizing
who will use and pay

## Minimum Viable Product
