# Auth-Refresh-Tokens
A training project on how to work with authentication and refreshing tokens

<h1>Getting Started</h1>
<p>These instructions will help you to get a copy of the project up and running on your local machine for development and testing</p>

<h2>Installing</h2>
<pre>Firstly, you need to open terminal and type</pre>
<code>git clone git@github.com:RenZorRUS/Auth-Refresh-Tokens.git</code><br>

<h4>or you can simply download using the url below</h4>
<code>https://github.com/RenZorRUS/Auth-Refresh-Tokens.git</code><br><br>

<pre>Secondly, you need to install all the modules described in requirement.txt file. 
Just open terminal in project directory and type</pre>
<code>pip install -r requirements.txt</code><br>

<h2>Database</h2>
<pre>Thirdly, to migrate the database type</pre>
<code>python manage.py makemigrations</code><br>
<code>python manage.py migrate</code>

<h2>Admin panel</h2>
<pre>And to use admin panel you need to create superuser using this command</pre>
<code>python manage.py createsuperuser</code>

<h2>Run the program</h2>
<pre>To run the program in local server use the following command </pre>
<code>python manage.py runserver</code><br><br>
<p>And then go to http://127.0.0.1:8000 in your browser</p>

<h2>Project gif</h2>

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
