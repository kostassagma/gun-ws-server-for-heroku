## Gunjs ws server for heroku
To use, simply clone this repo and run: 
```bash
npm i
npm start
```

Then, you can connect to db from react app using:
```js
const [gun] = useState(Gun("http://localhost/gun"))
```
