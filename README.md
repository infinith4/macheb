# macheb

$ sudo apt-get install clipit


````
npm init
npm install express --save
$ npm install express-generator -g
$ express --view=pug macheb
$ cd macheb
$ npm install
$ DEBUG=macheb:* npm start

$ sudo apt-get update
$ sudo apt-get install mysql-server
$ mysql --version
mysql  Ver 14.14 Distrib 5.7.21, for Linux (x86_64) using  EditLine wrapper

$ npm install mysql

$ mysql -u root -p

mysql> set password for root@localhost=password('[password]');

````

https://obel.hatenablog.jp/entry/20170823/1503479469

https://qiita.com/ksugawara61/items/d8d69b7d57a3afcef980

https://qiita.com/RyochanUedasan/items/9a49309019475536d22a

https://qiita.com/yu-sa/items/d8edad8d9a91d0ddeb12


# sequelize-cli

npm install sequelize-cli -g

$ sequelize init

http://docs.sequelizejs.com/manual/tutorial/migrations.html

sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string
sequelize db:migrate
sequelize seed:generate --name demo-user
sequelize db:seed:all
