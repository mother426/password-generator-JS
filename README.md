# JS Password Generator 

The goal behind this project was to program a web-browser based password generator using Javascript. The project acceptance criteria instructed to allow the user to set password parameters (password length, inclusion of capital or lowercase letters, numbers and symbols) through javascript prompts. I opted instead to code a GUI that sets password generators parameters. 

![Password Generator GUI](/assets/passwordgeneratorsite.png)

The function that generates the password takes inputs from the GUI as arguments. For example in the figure above, the paramaters are set to:
51 characters |
uppercase - false |
lowercase - true |
numbers - false |
symbols - false 

The function then generates a password containing randomly selected characters in the arrays that are selected 'TRUE'.
Characters are randomly joined until it reaches the length specified in the number of characters slider. 

Arrays of possible characters to be included in the generated password are created using character codes. ASCII table reference provided by http://www.asciitable.com/

![ASCII Table Reference](/assets/asciitableref.png)

## Instructions 

Demo of this app is available at the live site hosted by github pages.
[Link to Deployed App.](https://mother426.github.io/password-generator-JS/)
