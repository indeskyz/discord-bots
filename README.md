# About

### What's this for?

This bot is used as an incentive for when a user boosts the discord server

When a user boosts the server, they will be rewarded with a custom command in the form of _/<username_of_booster>_
This command can be something simple like a message or it can be something more complex like a message card that displays their social media links, artwork, portfolios, etc.

---

## Current Supported Commands

### See section below the following table for full descriptions of each response

| Command          | Description                                                                           |
| ---------------- | ------------------------------------------------------------------------------------- |
| **/about**       | displays information about the bot and it's use                                       |
| **/hazel**       | displays a greeting about the author of the bot                                       |
| **/ping**        | used for inital testing                                                               |
| **/server-info** | displays information about the server                                                 |
| **/user-info**   | gives basic information about the user                                                |
| **/vogue**       | example command of a custom command for an user                                       |
| **/verify**      | used to display the rules of the server and auto verify new users who join the server |

---

## Command Response Details

### Format is the following: _command_name_ : command response

- _/about_ : I'm VOGUE's custom Bot for users who Boost the Server.
  Whenever you boost the server, you will awarded with a custom command based on your username.
  You can use this to promote your social media, personal artworks, or promote any other platforms you wish.
  Optionally, you can use me to have your own custom command that displays a personalized message.

- _/ping_ : pong

- _/server-info_ :

  - **Server Name** <server_name>
  - **Total Members** <member_count>

- _/user-info_ :

  - **User Creation Date** <created_date>
  - **Days User Has Been A Part of the Server** <days_elapsed_since_joining>
  - **User Id** <user_id>
  - **User Profile Picture** <avatar_thumbnail>

- _/vogue_ :

![Example of a Social Media Card](/images/card-example.png "Social Media Card")

- _/verify_ :

  - **Will only be ran if the channel name is listed within the SERVER_NAMES constant found in config.js**
  - **You may set the role to give to the user using the SERVER_ROLES constant found within config.js**

![Example of a Social Media Card](/images/verify-example.png "Social Media Card")