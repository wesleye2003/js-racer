# Javascript Racer 2 Back End 
 
##Learning Competencies 

##Summary 

 We'll now add a back-end to our JavaScript racer game using a simple Sinatra app.  The game still runs in a single browser instance, i.e., two players don't play each other across different browsers, but rather on a single browser.

The flow goes like this:

1. Two people get on a computer and visit the application
2. The application prompts each player to enter their name
3. The players fill out the form and this creates a new game
4. The new game starts, and each player smashes their respective key until one of them wins
5. After one of them wins, the winning player and amount of time it took to win is sent to the server and the game is recorded as being "done"
6. The players can choose to start another game using their same initials, or restart using different initials
7. After a game is finished the players are given a unique URL at which they can view the results of that particular game

## Objectives

### Models

You should have two core models: `Player` and `Game`.  A player can be in many games and a game can have multiple players.  For now it's "just two," which can be hard-coded into the game creation form.

Player names should be unique.  If someone chooses the game initials/name/etc. as someone else they'll be playing the same "player."  This means there should be a uniqueness constraint at both the database level by using a `UNIQUE INDEX` and a [uniqueness constraint](http://guides.rubyonrails.org/active_record_validations.html#uniqueness) on the `Player` model.

You can make a UNIQUE INDEX by adding `:unique => true` to your `add_index` call.  See the [add_index documentation](http://apidock.com/rails/v3.2.8/ActiveRecord/ConnectionAdapters/SchemaStatements/add_index).

It's important to enforce this at both the ActiveRecord and database level.  Your database is the only thing that can truly, 100% guarantee uniqueness, but an error at the database level is both very expensive and hard for 
user-land to interactive with.

You should use a [custom ActiveRecord validation](http://guides.rubyonrails.org/active_record_validations.html#custom-methods) to ensure that every game has exactly two players.  This constraint is hard to model on the database level, so we leave it to ActiveRecord.

### Routes

Remember, you need routes which correspond to:

1. Starting / creating a new game
2. Playing a new game
3. Viewing the results of an old game

### Views and Flow

Implement the flow from the description above and submit your Sinatra app!  If it's a GitHub repository, submit it as a gist with a link to your repository. 

##Releases
###Release 0 

##Optimize Your Learning 

##Resources