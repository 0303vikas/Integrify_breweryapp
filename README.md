
# Breweries App

Fetch, display, and search for brewery companies from the given API endpoint, using React and TypeScript

## Authors

- [@VikasSingh](https://github.com/0303vikas)

## API Reference

#### Get all items

```http
  GET https://api.openbrewerydb.org/v1/breweries
  ```
  | Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `per_page`| `string` | **Not Required**. No of data string to fetch |
| `page`| `string` | **Not Required**. page no of item to fetch |

#### Get item name 

```http
  GET https://api.openbrewerydb.org/v1/breweries
  ```
  | Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `per_page`| `string` | **Not Required**. No of data string to fetch |
| `page`| `string` | **Not Required**. page no of item to fetch |
| `by_name`| `string` | **Not Required**. Name of item to fetch |

#### Get item by id

```http
  GET /${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

## Demo

https://glowing-swan-c6e788.netlify.app/

## Features

- Search with Brewerie Name
- Toggle data with Page Change
- Individual Brewerie view

## Tree

```
.
├── App.tsx
├── adapters
│   └── requests.ts
├── components
│   ├── DisplayData.tsx
│   ├── NavigationBar.tsx
│   └── withLoading.tsx
├── index.css
├── index.tsx
├── pages
│   ├── Home.tsx
│   ├── NotFound.tsx
│   └── SingleBrewerie.tsx
├── react-app-env.d.ts
├── reportWebVitals.ts
├── setupTests.ts
├── styles
│   └── style.scss
├── themes
│   ├── mainTheme.ts
│   └── navigationBarTheme.ts
└── types
    ├── AdapterRequests.ts
    └── DisplayDataProps.ts


## Installation

Install fs15_8-breweries-app with npm 

```bash
  npm install
  npm start
  npm run build   
```
    