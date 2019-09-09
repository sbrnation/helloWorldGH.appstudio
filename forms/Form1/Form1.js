/*
Git is a software that allows you to keep track of changes made to a 
program/project over time. Git works by recording the changes you make 
to a project - like a snapshot of your program at a given time. It stores
these. Then you can reference them, decide to make them a part of the 
'master' program/project, revert back to a previous one, etc. 

Git projects are usually managed on Github.com, a website that hosts 
Git projects. There you can access your projects by using the basic workflow
we'll be using and about which you read.

Example of the GH Idea: 
get the repo:  friendly-collab-party
> add to costume.md (markdown) - commit, push. 


GENERAL GH WORKFLOW

1. Create a new repository locally with an appStudio AS) project in it. 
> push the repository to GitHub.com (GH)
2. Create a new branch of the project (you can make changes to it without changing master)
3. Work in AS on the project. 
4. Commit changes in GH Desktop. 
5. Push/publish branch to GH.com
6. Create a Pull Request for feedback from team
7. Merge branch into master.
Note: GH Desktop fetches/syncs master on GH.com with your GH Desktop master every 5 min. 

Great video at https://guides.github.com/introduction/flow/

*/

/*
Set up your Organization - 
1. at github.com, log in, click + on top right and pick New Organization
2. name organization something unique. 
3. add organization member - yourself and your partner
> new member must approve
4. add a new team named Fixit6
5. add team member: 
> click on your Profile (top right) > Organizations > click your 
new organzation. 
> click on your team name link
> on far left, click the + (it will show you as the only member). 
> in the Add member popup type in email of the person you want to add.
An email will be sent that they will have to accept. 
6. There is additional useful functionality in the Org>Team area of GH.com - 
check out the Discussion Board. 
*/

/*
Create an AS project
1. Create new folder 'Week4GH' on your desktop. 
2. Resave this project in the Week4GH folder - name the project 'helloWorldGH'.
3. Write a little 'hello world' in an alert in the project. 
*/

/*
Open GH Desktop. 
1. Create a repository: click Current Repository > Create New Repository. 
Note: you MUST name it exactly the same name as the AS project: 
     helloWorldGH.appstudio
2. Click 'Commit to master' button on left. 
Commit is basically asking the system to create a snapshot of the 
project (our appStudio project) as it looks right now - it's like a version.
Label the commit (in case you want to use it later). 
3. Publish/push this new project to GH.com by clicking on the 'Publish repository'  
button on the right (unclick 'private'). 
This becomes the 'master branch'. It is the master to which changes will 
be made as the project develops. 
> click on the 'View on GitHub' on the right to see it in GitHub. 
Note: you have to refresh this whenever you make changes. 
*/


/*
Making Changes to the program
1. Create a new branch in GH Desktop.
A branch is a copy of the master you have in Desktop
on which you can work without changing the master. 
2. In appStudio, add a Form2 that puts out an alert that says welcome to your program. 
alert("Welcome!")
3. When program works perfectly, commit your changes in GH Desktop and push up to origin. 
4. Go to GitHub.com and refresh. You'll see your new branch there. 

*** NEVER change the code on GitHub.com. It WILL NOT transfer to your appStudio code 
(ie. it won't sync). 

*/

/*
Getting Feedback
1. When your branch is ready to be merged into the 'master', you do a pull request - 
this is a request (back to GH.com) to add a commit/collection of commits to a repository
(ie merge into the master). 
Teammates can review them, then can merge. 
2. In GH Desktop, click "Create Pull Request" button on the right.  
This creates a Pull Request on GitHub.com that says to your teammates - check 
this branch out, let me know if it looks OK, then merge it into the master in this 
repository. 
4. To Merge the branch into the master: 
In GH Desktop, move into the master branch (the branch into which you want to merge). 
In the Merge window, select the branch you want to merge and click 'merge'.
*/

/*
Moving an existing repository into an organizational account
1. From a personal account, go to the repository you want to move. 
2. Under Settings, scroll to the bottom and click on Transfer. 
3. Follow the directions. The repository will still show in your personal account
with the organization name appended to the front of it. 
*/

/*
To get a copy of someone elses' public repository
1. You can clone a repository.
Note: a fork is just a request for GitHub to clone a repository and register it under 
your username. So you have your own copy of the original that you now use as your master.  
a clone is a local copy of your remote (online) repo. 
2. Go to the page on github.com of the repository you want to clone. 
3. Click on Clone or Download (you can clone using a url or download to GH Desktop). 

Example:
Go to https://github.com/jakesgordon/javascript-tetris and clone this into GH Desktop. 
The in Filesystem of your laptop, go to the folder you saved it in and click 
'index.html' to run it. 
Play - make a change, see the change. 
*/









 







