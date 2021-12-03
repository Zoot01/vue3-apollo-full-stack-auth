# By: Zoot01

## _Vue3 | Apollo | GraphQl | Express | PrimeVue | Typescript | Vite_

[![N|Solid](https://dimitr.im/static/d31b165dbfd8518bff91e72e987566cb/78597/vue-apollo-graphql.png)](https://dimitr.im/static/d31b165dbfd8518bff91e72e987566cb/78597/vue-apollo-graphql.png)

This is super simple full-stack simple JWT auth example. Focusing on principles and not look or UI appearance.

## Screenshots

Protected Dashboard
[![N|Solid](https://i.imgur.com/t1tCeBs.jpg)](https://i.imgur.com/t1tCeBs.jpg)
Register Page
[![N|Solid](https://i.imgur.com/8WfL53F.jpg)](https://i.imgur.com/8WfL53F.jpg)
Login Page
[![N|Solid](https://i.imgur.com/rFWAtbs.jpg)](https://i.imgur.com/rFWAtbs.jpg)

## - FOR LEARNING PURPOSES ONLY -

> Just like everyone else I am still learning...
> Although this works well I am not sure if it is the best way
> of going about handling Auth. If you find a better way of going
> about Auth using a similar stack. PLEASE SHARE.
> I did not find much info and resources using a similar stack online.
> Please inform me if you find a better means of handling this.

## Features

- State management
- Simple JWT auth
- Routing
- Route guards
- 🚀 Apollo graphql magic 🚀

## Tech

I used many open source NPM packages:

- [VueJS](https://v3.vuejs.org/)
- [VueApollo](https://v4.apollo.vuejs.org/)
- [Vuex](https://next.vuex.vuejs.org/)
- [VueRouter](https://next.router.vuejs.org/)
- [PrimeVue](https://primefaces.org/primevue/showcase/#/)
- [Express](https://expressjs.com/)
- [TypeORM](https://typeorm.io/#/)
- [TypeGraphQL](https://typegraphql.com/)
- [Vite](https://vitejs.dev/)
- Many more check Package.Json

## Installation

Requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies and start the server and client.

**API**

```sh
cd api
npm i
```

Create environment variables.

```sh
create .env in root dir
ACCESS_TOKEN_SECRET= YOUR SECRET
REFRESH_TOKEN_SECRET= YOUR SECRET
```

ORM environment setup.
Make sure you have MYSQL installed on your PC along with a database already created.

> Note: `FILL IN ALL VARIABLES` this is required to establish a databse connection.

**Client**

```sh
cd client
npm i
```

Apollo client setup.

```sh
/src/apollo/index.ts edit GRAPHQL_API_URL to your graphql server endpoint
apollo.config.js edit client.service.url to your graphql server endpoint
npm run dev
```

Verify everything is working... vist.

```sh
http://localhost:3000/
```

## Learn and enjoy! 🍪

## Zoot#7045

## Thank you [Cagatay Civici](https://typeorm.io/#/) PrimeVue is awesome.

## License

MIT
