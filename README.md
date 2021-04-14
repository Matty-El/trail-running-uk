[<img src="assets/images/urban-paws-logo.png" width="230">](https://matty-el.github.io/urban-paws/)

# Trail Running UK Website

![Trail Running UK](readme-files/urban-paws-website-presented.png)

Trail running has shown a huge increase in popularity over the last 10 years. The Trail Running UK website has been developed to provide an introduction to trail running and guide users to the best trail running locations, running clubs and stores in the UK.

The site was developed using knowledge gained from the Code Institute HTML Essentials, CSS Essentials, User Centric Frontend Development and Interactive Frontend Development modules.

View the live website [here.](https://matty-el.github.io/urban-paws/)

## Contents

1.  [User Experience Design](#user-experience-design)
2.  [Features](#features)
3.  [Technologies Used](#technologies-used)
4.  [Testing](#testing)
5.  [Deployment](#deployment)
6.  [Credits](#credits)

## User Experience Design

### Strategy

The key goals for developing the website are:

-   To provide users with an attractive interactive website that gives an introduction to trail running and it's benefits.
-   To enable users to find the best locations for trail running local to them.
-   To enable users to find running clubs local to them.
-   To show users the location of shops selling the best trail running gear in their vicinity.
-   To allow users to sign up for a newsletter and receive an email confirmation that they are signed up.

### Scope

#### User Stories

#### Users

-   As a user, I want to find out more about trail running and it's benefits so that I can see if it is a sport I would like to participate in.
-   As a user, I want to be able to access the website on all types of device so that i can use the device that is most convenient to me at the time.
-   As a user, I want a website that is clearly laid out and easy to navigate so that I can find the information i am looking for.
-   As a user, I want to be able to find the best trail running locations near to me so that I can identify places to go trail running.
-   As a user, I want to be able to find local running clubs so that I can consider becoming a member.
-   As a user, I want to be able to find local sports shops that sell the gear I need so that I can participate in trail running.
-   As a user, I want to sign up for the Trail Running UK newsletter so that I can find out more about trail running in the UK.
-   As a user, I want to be able to link to the websites social media so that I can follow on social media.

### Structure

The Trail Running UK website has been designed to provide a simple and easy to navigate website. There is one page split into sections - A hero section with main image and navigation menu, a Why Trail Running section that provides some information about the benefits of trail running, and a Get Started section that allows users to find trail running locations, running clubs and shops. A modal has been implemented so that users can sign up to the Trail running UK newsletter and the footer section containing links to Trail Running UK social media. ** CONSIDER THE WEATHER SECTION / FURTHER AFIELD SECTION **

The website has the following key elements:

-   A simple one page design divided into sections that users can easily scroll through to find the information they want.
-   A Google Maps API to allow users to find locations for trail running, running clubs and shops local to them.
-   A form so that users can sign up to the Trail Running UK newsletter.
-   Links to social media sites so that users can follow the company on social media.

### Skeleton

#### Wireframes

The wireframes were developed using [Balsamiq](https://balsamiq.com/).

-   Small device [wireframes](**LINK**).
-   Medium device [wireframes](**LINK**).
-   Large device [wireframes](**LINK**).

After the initial design was finalised the following changes were made:

-   **CHANGE 1**
-   **CHANGE 2**
-   **CHANGE 3**

### Surface

Clean design with organic colour palette to link to the natural and outdoor aspect of trail running......

#### Branding

Decide whether to develop a Trail Running UK logo...

#### Colours

A simple colour palette has been developed - natural organic colours

#### Typography

The Raleway font has been utilised for all menu and heading text across the website.

## Features

### Existing Features

#### Sections

Hero Section:

-   Trail Running UK logo / title section.
-   A navigation menu on the top left of the website hero section that allows the user to navigate the website by clicking the links or open a newsletter form by selecting the Newsletter menu item. The navigation menu collapses to a burger icon on smaller devices.
-   The newsletter form can be populated with mandatory first name, last name, email address and race distance preference along with the options to add a comment or enquiry and to sign up to the Trail Running UK newsletter. The newsletter form is integrated with EmailJS and sends a confirmation email to the user to say they are now signed up

*Note: The newsletter form does not currently submit any data. The final version of the form will submit data to a back-end database and will present a message to the user upon submitting the form.*

#### Why Trail Running Section

-   This section of contains a slideshow with images of trail running locations around the UK and text highlighting some of the key benefits of trail running as a sport.

#### Get Started Section

-   Buttons to select trail running locations in the UK and running clubs and sports shops local to the user.
-   The Best Trails in Your Region button populates trail running locations around the UK with a Google maps API integration displaying markers and clusters. Information about trail running is populated on clicking the button.
-   The Local Running Clubs button geolocates the user via a Google Maps API integration and populates the map with running clubs local to the user. Information about the benefits of joining a running club is populated on clicking the button.
-   The Local Sports Stores button geolocates the user via a Google Maps API integration and populates the map with running clubs local to the user. Information about the gear required to start trail running is populated on clicking the button.

** TO CONSIDER ERROR HANDLING FOR GEOLOCATION AND THE OPTION OF ADDING A POSTCODE SEARCH IF GEOLOCATION FAILS **

#### Footer Section

-   This section has copyright wording and links to Facebook, Twitter, YouTube, Instagram and Pinterest social media sites.

### Features Left to Implement

-   TBC

## Technologies Used

The following technologies have been used to complete the UX design, capture user stories and defects and assign for development and to develop the Urban Paws website.

### Languages

-   [HTML5](https://en.wikipedia.org/wiki/HTML5) - used for the structure and content of the Urban Paws website.
-   [CSS3](https://en.wikipedia.org/wiki/CSS) - used to style the Urban Paws website.
-   [JavaScript](https://www.javascript.com/) - used for....
-   [jQuery](https://jquery.com/) - used for.....

### Frameworks - Tools - Libraries

-   [Bootstrap library](https://getbootstrap.com/) - utilised for the grid layout, buttons, navigation bar and modal elements of the website.
-   [GitHub](https://github.com/) - for hosting the website repository.
-   [GitPod](https://gitpod.io/) - used as the development environment for the website.
-   [Google Fonts](https://fonts.google.com/) - used to source the Montserrat font for headings and Raleway font the main text content.
-   [Font Awesome](https://fontawesome.com/) - used to source icons for the footer section of the website.
-   [Balsamiq](https://balsamiq.com/) - utilised for the development of the website wireframes.
-   [Tiny PNG](https://tinypng.com/) - for the compression of images for all pages of the website.
-   [Canva](https://canva.com/) - used for.....
-   [JShint]
-   
-   [Markup validation service](https://validator.w3.org/) - for the validation of HTML5 code.
-   [CSS validation service](https://jigsaw.w3.org/css-validator/) - for the validation of the CSS3 code.
-   [Google Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools) - used to edit changes prior to implementing the code changes, to diagnose problems and for performance, accessibility, best practice and search engine optimisation testing.

## Testing

The website functionality was captured in the form of user stories and acceptance criteria were defined for each user story. The acceptance criteria formed the basis for the completed tests to ensure that the functionality was delivered aligned to the client's requirements.

The testing strategy, plan and results are documented in a separate [testing document](TESTING.md).

## Deployment

The Trail Running UK project is hosted on GitHub Pages.

**To deploy the project on GitHub**

1. Navigate to the menu at the top of the project repository on GitHub and select **Settings**.
2. Scroll down to the GitHub **Pages** section.
3. Click on the dropdown menu under **Source** and select **master** branch.
4. Ensure that the folder selected is the **(root)** folder.
5. Click the **Save** button.
6. The page will refresh automatically, and the website is now deployed - a green tick will be visible against a green background with the site URL. It may take a few minutes for the site to be published.

A single master branch has been used for this project.

**To run the project locally**

To clone this project from GitHub.

1. Open the project repository on GitHub and click the **Code** dropdown button.
2. Select the **HTTPS** tab and copy the URL.
3. Open your terminal (Mac OS, Linux) or Git-Bash terminal (Windows).
4. Change the current working directory to the location where you want the cloned directory to be created.
5. Type **git clone**, enter a space and then paste the URL copied from GitHub.
6. Press **Enter** and the local clone will be created in the specified directory.

## Credits

### Content

All text content included in the Urban Paws website is my own.

The code for ....... has been adapted from [codepen.io product card example](https://codepen.io/virgilpana/pen/RNYQwB/).

### Media

-   All images, with the exception of those detailed below, were licensed for use from [Adobe Stock](https://stock.adobe.com/).
-   The image for the 'What we do' section on the Home page - [photo by Kelly Sikkema on Unplash](https://unsplash.com/@kellysikkema?utm_source=medium&utm_medium=referral).
-   The images for use on the About Us page profiles are my own images.

### Acknowledgements

- [Precious Ijege](https://www.linkedin.com/in/precious-ijege-908a00168/?originalSubdomain=ng) for mentor guidance and support.
