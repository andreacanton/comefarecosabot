#Come Fare Cosa 
"L'applicazione più figa del mondo"

--

Try bot locally

Create your own bot using Telegram's BotFather and grab your TOKEN.
Clone or download and unpack this repo.
Go to the app's folder using cd ~/heroku-node-telegram-bot
Run npm install (in some cases you will need to run this with sudo, you know, just the permissions).
Rename .env_example file into .env and set TOKEN to the value, you've got from the BotFather.
Run npm run set_env (or npm run set_env_win for Windows OS) to set the environment variables from the .env file.
Run npm start (or npm run start_win for Windows OS) and send smth to your bot.
After it says "hello" to you, open your first bottle of beer 🍺
Feel your awesomeness? 😎

Deploy your bot to the heroku

Create the Heroku account and install the Heroku Toolbelt.
Login to your Heroku account using heroku login.
Go to the app's folder using cd ~/heroku-node-telegram-bot
Run heroku create to prepare the Heroku environment.
Run heroku config:set TOKEN=SET HERE THE TOKEN YOU'VE GOT FROM THE BOTFATHER and heroku config:set HEROKU_URL=$(heroku info -s | grep web_url | cut -d= -f2) to configure environment variables on the server.
Run git add -A && git commit -m "Ready to run on heroku" && git push heroku master to deploy your bot to the Heroku server.
Send smth to the bot to check out if it works ok.
Now you r twice awesome, open the second bottle of beer

Going further

Now when you r a bit drunk, you may wish to add other functionality to your bot and here you can face some problems. The reason is that in development mode your bot works using polling and on the heroku server it uses the webhook, because heroku will shut down the web-server after a period of inactivity that will result in your polling loop to shut down too. Once webhook was enabled, telegram will return an error {"ok":false,"error_code":409,"description":"Error: Conflict: another webhook is active"} when you will try to use polling again, and it's actually ok.

To go back to development mode, you will need to run npm run switch_to_dev. This script will disable current webhook and start your local server. Don't be afraid - when you will finish with the changes you may simply push your bot to heroku using git push heroku master. Then you should restart your app using heroku restart. It will set the webhook again.