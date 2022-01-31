# 🚀 Welcome to your new awesome project!

commands 
یک پروزه خالی بسازید و کامندهای زیر را وارد کنید
* npm i -g webpack-cli
* npm i webpack webpack-cli --save-dev
* webpack-cli init
////////////////////////////////////////////////////////////////////
کامند های زیر برای نصب لودرها میباشد
هر لودر نسبت به نیازمان فایل های مورد نظر را ادغام میکند
* npm i html-loader --save
* npm i css-loader style-loader --save
* npm i file-loader --save
* npm i ts-loader --save
////////////////////////////////////////////////////////////////////
اگر از
sass
استفاده میکنید کامند زیر را وارد کنید
* npm i sass-loader node-sass --save
////////////////////////////////////////////////////////////////////
توجه کنید تنظیمات باید در فایل کانفیگ وب پک انجام شود
////////////////////////////////////////////////////////////////////
کامند زیر برای نصب
babel
میباشد
npm install @babel/core babel-loader @babel/preset-env babel-plugin-transform-class-properties --save-dev
////////////////////////////////////////////////////////////////////
پلاگین زیر برای کم کردن حجم فایل ها استفاده میشود
این پلاگین در حالت توسعه استفاده میشود
npm install terser-webpack-plugin --save-dev
////////////////////////////////////////////////////////////////////
پلاگین زیر برای کم کردن حجم فایلهاست
که در حالت نهایی استفاده میشود
npm install mini-css-extract-plugin --save-dev
////////////////////////////////////////////////////////////////////
برای جلوگیری از کش شدن مرورگر در حالت بیلد 
از کامند زیر استفاده میکنیم و این پکیج
را نصب میکنیم
npm install clean-webpack-plugin --save-dev
////////////////////////////////////////////////////////////////////
برای 
html
هم از پکیج زیر استفاده کنید
npm install html-webpack-plugin --save
////////////////////////////////////////////////////////////////////
استفاده از یک تمپلیت انجین برای استفاده از 
html in js
npm install handlebars-loader handlebars --save
////////////////////////////////////////////////////////////////////
بوسیله کتابخانه زیر میتوان یک سرور
مجازی در حالت توسعه داشت
npm install webpack-dev-server --save-dev
This project has been created using **webpack-cli**, you can now run

```
npm run serve
npm run watch
npm run build
```

or

```
yarn build
```

to bundle your application
