# iGoMoon Developer Coding Task

## Overview

Your task will be to complete a small project with the **Hubspot CMS** using your HTML, CSS and JS skills. We going to assume that you have no knowledge with the Hubspot CMS at this point, so we’ve created this “starting point” repository for you.

For this task you will be given a scenario based on what a customer has requested. You'll then be required to style and add interactive features with Javascript/jQuery to meet those requests.

NOT including setup (Instructions for set up below), you should allow yourself **2-3 hours for the main task**.

Please see the "**[Submission Instructions](#submission-instructions)**" at the base of this document.

To get started, check out the video below:  

<br>

[![iGoMoon Developer Coding Task](https://play.vidyard.com/YXp2Du9vjwSJ4Yx9eSD7ZS.jpg)](http://videos.igomoon.com/watch/YXp2Du9vjwSJ4Yx9eSD7ZS?)

<br>

### Working with the Hubspot CMS
At iGoMoon, our job is not to maintain a customer's website, our role is instead to create Hubspot assets (Templates and Modules etc), so that our customers can create the content themselves. Before continuing on this task, you should make sure you understand Hubspot's Building Blocks.

<br><br>

## Assumed Knowledge

In order to take on this task, we are going to assume you have some relevant technical knowledge:

- **HTML, CSS and JS:** Comfortable in all 3
- **Able to navigate the command line interface (CLI):** You don’t need to be a wizard but you should be able to move around between directories and run commands.

This task centers around the Hubspot CMS, so whilst we are assuming you have no knowledge of it so far, you should be able to find the answers. Hubspot has a big community and good documentation which you can use to find all the answers you need.

<br><br>

## Preparation/ Setting up this task

To setup the starting point and use HubSpot's **Local development tools**, follow the steps below:

1. Create a free CMS sandbox account https://app.hubspot.com/signup/standalone-cms-developer
2. Install Node.js, which enables HubSpot's local development tools. Versions 8.9.1 or higher are supported. [https://nodejs.org/en/](https://nodejs.org/en/) (Choose LTS Option)
3. Open you termin and run `npm install -g @hubspot/cms-cli` to install hubspot tools.
4. Download this repository as a .zip file.
5. Extract the zip file into a newly created `igomoon-coding-task` folder on your computer. You should now have the `developer-coding-task` folder within that new folder.
6. Using the command line, cd into the `igomoon-coding-task` folder and run `hs init`. This will connect the tools to your HubSpot account follow the instruction to your [Personal Access Key Page](https://app.hubspot.com/l/personal-access-key)
7. Once connected you can then run the command, this is going to perform and inital upload and now watch for changes within your `developer-coding-task` as you complete the task
```
hs watch developer-coding-task developer-coding-task --initial-upload
```
8. Begin the task below. Run `hs --help` and familiarise yourself with the HubSpot tools available to you.

### Boilerplate Notes

Somethings to keep in mind as you use this boilerplater repository.

- There is a HTML + HUBL `page.html` template which serves as the main page
- Twiiter Bootstrap and jQuery Slim is included

<br><br>

## Task Overview

**From the Customer:**

> "Our optin module needs to be more "smooth". We want to just show the email field to start with and then when they begin to fill in the field, the other field and the button should then "appear" below. Right now, it looks "boring" so we are hoping for nice but still simple UI.

Allow yourself **2-3 hours for the task**. You are free to make it however you want to meet the customers needs. **NOTE:** Allow yourself more time for any knowledge gaps.

- The `main.css` and `main.js` files should be used instead of the js and css files withing the module.
- You are allowed (& encouraged) to install packages for both javascript and CSS. You will however be asked to justify your choices.

*“It should be made as simple as possible, but no simpler”*

<br><br>

## Assessing your work

We decided that in order to give you feedback on where you're at, where you can improve and what kind of fit we believe you are, that we would asses your work using a points system, when we review your work, we'll give you a score for each aspect.

Below you'll also find a bonus points section that you can **choose** to take on (be sure to give yourself extra time to do so).

For the task above you will be scored out of **200 points** taking into account how "*C R I S P*" your work is and how well you solved the customer's problem. The bonus points below will give you up to **300 points** and are scored on how successfully it was done **and** your ability to show knowledge of it.

**Total Points Available:** 500

| Points | Status|
|-|-|
| 0-180 	| We may not be a fit, but you are well on your way to being a great developer |
| 181-340 	| We have some suggestions on how to improve but you have a promising future |
| 341-480 	| We love you work, We'll be in touch |
| 481-500 	| No need to wait. When can you start? |

<br>

### Bonus Points

Please see more details for each task below the table. There is NO set order to these tasks, just do what you can, as best you can. **TIP:** For max points, don't just copy + paste. 

| Task 									| Points |
|-										|-|
| Add a body class 						| 2 |
| Add help text to module fields 		| 3 |
| Add an Icon for your Module			| 10 |
| New module field 						| 10 |
| Add a page header						| 10 |
| Use a Macro							| 15 |
| Use Git Version Control				| 15 |
| Use SCSS in your workflow				| 15 |
| Create a new module					| 40 |
| Use a Partial							| 40 |
| Abstract the page to a use a layout	| 40 |
| Implement HUBL drag and Drop areas	| 50 |
| Use a Hubspot form instead			| 50 |
| **Possible Bonus Points** 			| **300** |

<br>

#### Add a body class
- This requires essential HTML knowledge. Add your full name as a css safe class eg. `your-name`

#### Add help text	
- EVERY Module field that is added should include some help text. Add in some helpful text to your fields.

#### Add an Icon for your Module
- Add a custom SVG icon asset and configure your optin module to use it, adding things like icons to make iGoMoon modules less generic are the extra mile for customers.

#### New module field 	
- The customer has come back to you and said *"Sometimes we need the name field and other times we dont, can we make it so it's optional?"*. Fulfil their need and implement an on/off toggle switch to allow the name field to be used in the form.

#### Add a page header
- Use Bootstrap and add a navbar to your page template. Take the iGoMoon logo from our site and insert it. No need for the links to go anywhere.

#### Use a Macro
- Macros are "repeatable output functions" for the HubSpot CMS, make one and use it to show some privacy policy text under the submit button. This way it could be used for other modules also.

#### Use Git Version Control
- We track everything we do. If you use Git, show us your skills from the start and fork our repository before you begin your task. We'll be interested in wehre you choose to make your commits.

#### Use Sass/ SCSS in your workflow
- We love and use SCSS all the time, implement it into your workflow but don’t compromise your workflow to use it.

#### Create a new module	
- Ready to step up? Create your own working module with fields and CSS + JS and add it to your page.

#### Use a Partial
- Partials allow you to insert another piece of code into your HUBL. Headers, Footer and shared elements like sidebars are great examples of this. If you added the page header above, then take your header and turn it into a HUBL partial. **Note the difference bettween a normal and a global partial.**

#### Abstract the page to a use a layout
- Layouts are a powerful part of the HUBL language, allowing you to limit repetiive code. Take your page template and abstract it to layout with blocks. 

#### Implement HUBL drag and Drop areas	
- HubSpot allows you to define Drag and Drop areas within your page template. If you're really up for a challenge, then implement it for your module/s.

#### Use a Hubspot form instead
- Hubspot is a powerful CRM and one of its features is its Forms. Adapt your module and its fields to use a Hubspot native form instead, MAKING SURE you are still meeting the customers needs.

<br><br>

## Submission instructions

1.  Create a simple text file briefly describing what your work included and give us details to help understand your approach.
	- Include any relevant links (eg. Your Github repository link, Links to packages used)
2. Compress your final `developer-coding-task` folder and the text file above and submit to your contact at iGoMoon via email.

<br><br>

## Feedback
How did WE do? If you have suggestions on how we can improve this porcess for you and fro us then we'd like to hear more.
