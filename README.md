# Team_Titans_BackEnd_Js

To Contribute...

1. Create a personal fork of this repo on your Github.

2. Clone the fork on your local machine (pc) .
   using "git clone url of the repo."
   Once you have cloned your remote on Github is called origin.

3. On your local machine (pc) inside the cloned project, add the origin repository as a remote called upstream.
   i.e git remote add upstream url of the repo.

4. Create a new branch to work on. Branch from the master branch. It is recommended that you make a new branch for every new feature you work on and work from there.
   You can use "git checkout -b name of new brach" shorthand to create a new brach and switch to it .

5. Push your branch to your fork Github, i.e the remote origin.

6. From your fork open a pull request in the correct branch. Target the project's master branch.

7. Be sure to always pull upstream changes into your local repository to keep updates of the main repo.

"git pull upstream branch_name" which is the main branch (master).

These are the set of instructions from Mark.

Try and always:

8. Comment your codes properly.

9. Follow the code style of the project including indentation.

GOOD LUCK...

## Getting started After Cloninig

HNG task-3 : A dockerized microservice for sending sms notification and checking sms balance

## Features

-

## Software Requirements

- Node.js **8+**
- MongoDB **3.6+** (Recommended **4+**)

## Getting started with the Server

### Install npm dependencies after installing (Git or manual download)

```bash
npm install
```

### Setting up environments

1.  You will find a file named `.env.example` on root directory of project.
2.  Create a new file by copying and pasting the file and then renaming it to just `.env`
    ```bash
    cp .env.example .env
    ```

````
## Common setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/hngi/Team_Titans_BackEnd_Js.git
cd Team_Titians_task3
````

```bash
npm install
```

To run locally:

Step 1: Set your .env variables

```
ACCOUNT_SID=twillioaccountsid
AUTH_TOKEN=twilioaccountauthtoken
TWILIO_NUMBER=twilionumber
MONGOURI=databaseurl
```

Step 2: Run the script

```bash
npm run devStart
```

## Use Docker

To run this app as a docker container, you must have docker installed on your computer:

Step 1: Clone the repo

```bash
git clone https://github.com/hngi/Team_Titans_BackEnd_Js.git
```

Step 2: Set your enviroment variables

```
ACCOUNT_SID=twillioaccountsid
AUTH_TOKEN=twilioaccountauthtoken
TWILIO_NUMBER=twilionumber
MONGOURI=mongodb://mongo:27017/smsapp
```

Step 3: Run the Docker container locally:

```bash
docker-compose up
```

## Tests

### Running Test Cases

```bash
npm test
```

You can set custom command for test at `package.json` file inside `scripts` property. You can also change timeout for each assertion with `--timeout` parameter of mocha command.

### Creating new tests

If you need to add more test cases to the project just create a new file in `/test/` and run the command.

## ESLint

### Running Eslint

```bash
npm run lint
```

You can set custom rules for eslint in `.eslintrc.json` file, Added at project root.
