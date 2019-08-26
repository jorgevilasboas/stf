# stf v0.0.0



- [Auth](#auth)
	- [Authenticate](#authenticate)
	
- [Evaluation](#evaluation)
	- [Create evaluation](#create-evaluation)
	- [Delete evaluation](#delete-evaluation)
	- [Retrieve evaluation](#retrieve-evaluation)
	- [Retrieve evaluations](#retrieve-evaluations)
	- [Update evaluation](#update-evaluation)
	
- [History](#history)
	- [Create history](#create-history)
	- [Delete history](#delete-history)
	- [Retrieve histories](#retrieve-histories)
	- [Retrieve history](#retrieve-history)
	- [Update history](#update-history)
	
- [Item](#item)
	- [Create item](#create-item)
	- [Delete item](#delete-item)
	- [Retrieve item](#retrieve-item)
	- [Retrieve items](#retrieve-items)
	- [Update item](#update-item)
	
- [Option](#option)
	- [Create option](#create-option)
	- [Delete option](#delete-option)
	- [Retrieve option](#retrieve-option)
	- [Retrieve options](#retrieve-options)
	- [Update option](#update-option)
	
- [User](#user)
	- [Create user](#create-user)
	- [Delete user](#delete-user)
	- [Retrieve current user](#retrieve-current-user)
	- [Retrieve user](#retrieve-user)
	- [Retrieve users](#retrieve-users)
	- [Update password](#update-password)
	- [Update user](#update-user)
	


# Auth

## Authenticate



	POST /auth

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|

# Evaluation

## Create evaluation



	POST /evaluations


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|
| id_prof			| 			|  <p>Evaluation's id_prof.</p>							|
| id_mentor			| 			|  <p>Evaluation's id_mentor.</p>							|
| pending			| 			|  <p>Evaluation's pending.</p>							|
| final			| 			|  <p>Evaluation's final.</p>							|

## Delete evaluation



	DELETE /evaluations/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|

## Retrieve evaluation



	GET /evaluations/:id


## Retrieve evaluations



	GET /evaluations


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update evaluation



	PUT /evaluations/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|
| id_prof			| 			|  <p>Evaluation's id_prof.</p>							|
| id_mentor			| 			|  <p>Evaluation's id_mentor.</p>							|
| pending			| 			|  <p>Evaluation's pending.</p>							|
| final			| 			|  <p>Evaluation's final.</p>							|

# History

## Create history



	POST /histories


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|
| id_eva			| 			|  <p>History's id_eva.</p>							|
| id_item			| 			|  <p>History's id_item.</p>							|
| id_option			| 			|  <p>History's id_option.</p>							|

## Delete history



	DELETE /histories/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|

## Retrieve histories



	GET /histories


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Retrieve history



	GET /histories/:id


## Update history



	PUT /histories/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|
| id_eva			| 			|  <p>History's id_eva.</p>							|
| id_item			| 			|  <p>History's id_item.</p>							|
| id_option			| 			|  <p>History's id_option.</p>							|

# Item

## Create item



	POST /items


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|
| name			| 			|  <p>Item's name.</p>							|
| weight			| 			|  <p>Item's weight.</p>							|

## Delete item



	DELETE /items/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|

## Retrieve item



	GET /items/:id


## Retrieve items



	GET /items


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update item



	PUT /items/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|
| name			| 			|  <p>Item's name.</p>							|
| weight			| 			|  <p>Item's weight.</p>							|

# Option

## Create option



	POST /options


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|
| value			| 			|  <p>Option's value.</p>							|
| name			| 			|  <p>Option's name.</p>							|

## Delete option



	DELETE /options/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|

## Retrieve option



	GET /options/:id


## Retrieve options



	GET /options


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update option



	PUT /options/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|
| value			| 			|  <p>Option's value.</p>							|
| name			| 			|  <p>Option's name.</p>							|

# User

## Create user



	POST /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|
| email			| String			|  <p>User's email.</p>							|
| password			| String			|  <p>User's password.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|
| role			| String			| **optional** <p>User's role.</p>							|

## Delete user



	DELETE /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve current user



	GET /users/me


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve user



	GET /users/:id


## Retrieve users



	GET /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update password



	PUT /users/:id/password

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| password			| String			|  <p>User's new password.</p>							|

## Update user



	PUT /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|


