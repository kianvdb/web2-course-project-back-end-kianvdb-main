# Course project web 2

for web 2 we had to make a website with an API. I chose to make
a website about DIY projects where you can create an account and save DIY projects
to your likes.


## backend sources

-web 2 modules
-Chatgpt

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites


- Node.js
- npm or yarn

### Installation

Step-by-step instructions on how to install and set up the project.

```bash
# Change into the project directory
cd your-project

# Install dependencies
npm install

# Start the development server
node app.js
```

## API Documentation
```bash
# Get project by id
Get localhost:3000/api/projects/6585bf8db8a030557d9389f3

# Get all projects
Get localhost:3000/api/projects/list

# Create a new project
Post localhost:3000/api/projects/create

# Delete a project
Delete localhost:3000/api/projects/6585bf8db8a030557d9389f3

# Add to favorites
Post localhost:3000/api/projects/add-to-favorites/6585bf8db8a030557d9389f3

# Remove from favorites
Post localhost:3000/api/projects/remove-from-favorites/6585bf8db8a030557d9389f3

# Sign up
Post localhost:3000/api/users/signup

# Sign in
Post localhost:3000/api/users/login

# Sign out
Post localhost:3000/api/users/logout

# My profile
Get localhost:3000/api/users/me
```
## login
name: Admin
password: Admin