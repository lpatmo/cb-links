https://github.com/lpatmo/cb-links 

Background: [CodeBuddies.org](http://codebuddies.org) is a community of independent code learners who share knowledge on Slack and schedule “silent” or “non-silent” Google Hangouts to co-work on personal projects, pair program, or help each other master tutorials. Sharing knowledge is fun and helps us master new material faster. The project is free and open-sourced on Github.

##What is this project?
[http://links.codebuddies.org](http://links.codebuddies.org) is an archive of resources. The project is separate from the [hangouts platform](http://hangouts.codebuddies.org) and is free and open-sourced as well.

In its simplest form, the platform lets people submit links to resources, and add recommendations to the submitted links. 

Stretch features: In addition to leaving feedback about the link, people can also mark links that they’ve "started" or "completed," and mark links as beginner-friendly or not-beginner-friendly. 

The project is open-sourced and anyone can submit a link or be added and recognized as a collaborator on this repo for their commits to the features. If you’re interested in becoming a collaborator, you can add your name at the bottom of this README.md.

##What problem does the platform solve?
1. There are lots of resources (both free and paid) online for  learning to code, but it can be overwhelming to figure out which ones to start with.
2. As a beginner, it can be frustrating and difficult to figure out which resources are beginner-friendly. (e.g. Javascript: The Good Parts)
3. Blog articles and other resources can contain outdated information; leaving a comment about it can warn new readers about it. (also, automatically timestamping when a particular resource was added)
4. Sometimes a specific chapter of an online book is hard to get through; people who’ve read that chapter can now leave a flag about it.
5. The ability to mark links as completed or "started" lets people track their progress and build up their own personal curriculum.

##I want to help with the codebase. How do I become a collaborator and get push access?
1. Join the #links-project Slack channel at http://codebuddiesmeet.slack.com, say hello, and watch out for occasional collaborative coding session hangouts. If you’re not a member of the CodeBuddies Slack community, check out http://codebuddiesmeet.herokuapp.com for an invite.
2. Go to https://github.com/lpatmo/cb-links and git clone the repo.
3. Make sure you have meteor installed. For meteor installation instructions, check out [http://telescope.readme.io/v0.20/docs/installing-telescope](http://telescope.readme.io/v0.20/docs/installing-telescope). 
4. `cd` into `cb-links` and run `meteor` to start up the app in your localhost. 
5. Once you have the app running, register a new user. The first user you register will be a default `admin` user.
6. Until we create a fixtures file so that default categories get created automatically, you’ll need to create some new categories yourself in your local instance by clicking on your username and going to `settings` and `categories` on the left-hand side. A categories cloud should show up in the `hero` area when you create the new categories.
7. In order to get push access to the repo, ask to be invited as a collaborator to the repo by saying hello and leaving your github username in the Slack channel.
8. Take a look at the issues in [https://github.com/lpatmo/cb-links/issues](https://github.com/lpatmo/cb-links/issues) and leave a comment if you plan to work on it. If you have a question and would like a immediate response, ask in the Slack channel.

####IMPORTANT: Refer to [http://telescope.readme.io/v0.20/docs/overview](http://telescope.readme.io/v0.20/docs/overview) for documentation about how to edit the `cb-links` package.

The only folder that you should touch when you git clone this repo is `cb-links`. The other core files inside `packages` will get overwritten every time we `git pull upstream` from Telescope master.




##I want to support this project, but I don’t want to work on the codebase. How else can I help? 
You can also help by building http://links.codebuddies.org up with links! You’ll be recognized as a top sharer if you submit 10 or more links and leave reviews on 5 or more links.

##What are the features that still need to be built?
Please check the [issues list](https://github.com/lpatmo/cb-links/issues). All the issues not marked "in progress" are open for taking.


##Collaborators:
- [@lpatmo](http://github.com/lpatmo)
- [@colbycheeze](http://github.com/colbycheeze)
- [@nanenj](http://github.com/nanenj)
- [@anbuselvan](http://github.com/anbuselvan)
- [@anonRegions](http://github.com/anonRegions)
- Join us in the #links-project Slack channel and add your name here!


##Top Sharers:
[ADD YOUR NAME HERE if you’ve submitted 10 or more links and left reviews on 5 or more links]








