tips: gunakan `npx create-react-app` dan `react-redux`
1. Buat sebuah web app dengan menggunakan reactjs dan pastikan memenuhi user story berikut
wireframe: https://www.figma.com/file/j3sULCNdt54eTwQxNVfhpR/weekly-assessment-week-5?node-id=0%3A1
1.a. terdapat 2 page/route (home dan checkout)
1.a.1. halaman home ketika pertama di-load akan mengambil data dari (https://my-json-server.typicode.com/irhamhqm/placeholder-shops/items)
1.a.2. data yang sudah diambil akan ditampilkan sebagai grid
1.a.3. item-item yang ada di grid menampilkan data berikut(semua di dapat dari url di atas):
1. nama product
2. gambar product
3. harga product
4. banyak product yang tersedia
5. 2 button(tambah dan kurang), 1 input
1.a.4. jumlah barang yang di-input pada point 1.a.3.5 akan secara otomatis tersimpan di state management(masuk ke cart/keranjang belanja)
1.a.5. pada bagian bawah halaman terdapat bottom bar yang menampilkan total belanja dan tombol checkout
1.b.1. pada halaman checkout ada list barang-barang yang sudah masuk di cart
1.b.2. data yang ditampilkan oleh item yang ada di list(checkout page) adalah sebagai berikut
1. nama product
2. gambar product
3. harga product
1.b.3. pada bagian bawah list terdapat total belanja

tip: jika teks lebih panjang dari container gunakan ellipsis (https://stackoverflow.com/questions/34294054/how-to-implement-single-line-ellipsis-with-css)

extra:
1. saat fetching data tampilkan loader, saat fetching data terjadi error tampilkan pesan error
2. jumlah barang yang dimasukkan ke cart tidak boleh lebih dari banyak product yang tersedia
3. jika cart kosong tidak bisa masuk ke halaman checkout
4. responsive

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
