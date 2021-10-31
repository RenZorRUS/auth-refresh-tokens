# Auth-Refresh-Tokens
A training project on how to work with authentication and refreshing tokens

This application was written using Django, React.js, Bootstrap.

User credentials: 
```javascript 
{ username: admin, password: RenZor01 }
{ username: Capella, password: cps010203}
```

Application functionality:

* If you aren't an authorized user, then after going to the home page, you will be automatically redirected to the login page

![Gif of redirection](https://github.com/RenZorRUS/Auth-Refresh-Tokens/blob/main/gifs/Redirect.gif)

* If you enter incorrect credentials into the form, the application will issue a notification

![Gif of log-in-error](https://github.com/RenZorRUS/Auth-Refresh-Tokens/blob/main/gifs/Log-in-error.gif)

* In case of a successful login, the browser will receive 2 types of tokens (access and refresh tokens) and save them to the local storage, 
as well as forward you to the home page where you can see your JWT tokens

![Gif of successful-log-in](https://github.com/RenZorRUS/Auth-Refresh-Tokens/blob/main/gifs/Log-in.gif)

* Every time new data is requested from the server, the user will automatically receive a new pair of JWT tokens, thereby maintaining their relevance

![Gif of updating-pair-of-tokens](https://github.com/RenZorRUS/Auth-Refresh-Tokens/blob/main/gifs/Update-tokens.gif)

* Thanks to the tokens stored in the local storage, you can immediately go to the home page with the saved state of the authorized user, 
and even if your access token expires, after providing the refresh token, the browser will receive a new pair of tokens 

![Gif of memorizing-the-state](https://github.com/RenZorRUS/Auth-Refresh-Tokens/blob/main/gifs/Memorizing-the-state.gif)

* When you log out of your account, your tokens are cleared from the local storage, and you can get them only if you log in again

![Gif of log-out](https://github.com/RenZorRUS/Auth-Refresh-Tokens/blob/main/gifs/Log-out.gif)
