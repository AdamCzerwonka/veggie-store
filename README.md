# Veggie store

This project is a part of my react learning process. Actualy it's my first react project.

# Runing code

## Frontend

```
# Install all dependencies
npm install

# Run dev server
npm start
```

You can also use docker

```
# Build image
docker build -t sample:dev .

# Run dev server
docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true sample:dev
```

# Working so far

- Main shop page displays item (for now hardcoded in frontend)
- You can add different amounts of products to cart
- Cart it stored in local storage and it's restored when you reenter the site.
- If you add product more than one time it won't create new entry in cart but edit the amount in the existing entry
