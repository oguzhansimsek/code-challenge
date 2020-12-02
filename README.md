# Code Challenge

```sh
$ npm install
$ npm run start
```

or

```sh
$ yarn
$ yarn start
```

## Routes

| route                         | url                                                 | components    |
| ----------------------------- | --------------------------------------------------- | ------------- |
| /                             | http://localhost:3000/                              | tickets       |
| /tickets                      | http://localhost:3000/tickets                       | tickets       |
| /tickets/[page]               | http://localhost:3000/tickets/2                     | tickets       |
| /tickets/[page]?[queryString] | http://localhost:3000/tickets/2?genreId=KnvZfZ7vAeE | tickets       |
| ticket-detail/[id]            | http://localhost:3000/ticket-detail/G5vVZpf7AtYVy   | ticket-detail |

## Folder Structure

    ./src
    ├── assets                      # Fonts, Images
    ├── components                  # Dummy Components
    ├── config                      # App configurations
    ├── helpers                     # Helper functions
    ├── pages                       # App pages
    ├── redux-store                 # Redux-configuation, recuders,actions, types, containers
    ├── routes                      # App routes
    ├── services                    # Create axios instance and request functions
    ├── theme                       # App global styles, variables
    ├── utils                       # Utils
    └── README.md
