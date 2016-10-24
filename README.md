# CS498RK Passport

## Contents
 * Install & Running
 * Passport Overview
 * Basic User/Password Auth
   * Salt/Hash
 * OAuth
   * Facebook
 * Protecting NodeJs Web Services: Auth & API Endpoints

## Install & Running
  * Modify config/settings.js to include your access tokens
  * ```npm install```
  * ```nodejs server.js```

## Guide

### Passport Overview
Passport is a popular authentication [middleware](http://expressjs.com/en/guide/using-middleware.html) for Node. It provides your app all of the scaffolding required to authenticate requests. It is designed in a way that allows you to easily switch between different authentication strategies (user/password, oauth, saml, etc).

### Basic User/Password Authentication



