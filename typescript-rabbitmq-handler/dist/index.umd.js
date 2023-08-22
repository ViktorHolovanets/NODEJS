!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("amqplib")):"function"==typeof define&&define.amd?define(["amqplib"],n):(e||self).typescriptRabbitmqHandler=n(e.amqplib)}(this,function(e){function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=/*#__PURE__*/n(e);function o(e,n){try{var t=e()}catch(e){return n(e)}return t&&t.then?t.then(void 0,n):t}/*#__PURE__*/
return function(){function e(e,n){this.connection=void 0,this.channel=void 0,this.connection=e,this.channel=n}e.create=function(n){try{return Promise.resolve(t.default.connect(n)).then(function(n){return Promise.resolve(n.createChannel()).then(function(t){return process.once("SIGINT",function(){try{return Promise.resolve(t.close()).then(function(){return Promise.resolve(n.close()).then(function(){})})}catch(e){return Promise.reject(e)}}),console.log("Connected to RabbitMQ"),new e(n,t)})})}catch(e){return Promise.reject(e)}};var n=e.prototype;return n.connect=function(e){try{var n=this,r=o(function(){return Promise.resolve(t.default.connect(e)).then(function(e){return n.connection=e,Promise.resolve(n.connection.createChannel()).then(function(e){n.channel=e,process.once("SIGINT",function(){try{return Promise.resolve(n.channel.close()).then(function(){return Promise.resolve(n.connection.close()).then(function(){})})}catch(e){return Promise.reject(e)}}),console.log("Connected to RabbitMQ")})})},function(e){console.warn(e)});return Promise.resolve(r&&r.then?r.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},n.startListening=function(e,n){try{var t=this;if(!t.channel)return console.warn("RabbitMQ channel is not initialized."),Promise.resolve();var r=o(function(){return Promise.resolve(t.channel.assertQueue(e,{durable:!1})).then(function(){return Promise.resolve(t.channel.consume(e,function(e){try{var t=function(){if(e){var t=e.content.toString();console.log(t);var o=JSON.parse(t);return Promise.resolve(n(o)).then(function(){})}}();return Promise.resolve(t&&t.then?t.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},{noAck:!0})).then(function(){console.log(" [*] Listening for messages in queue "+e)})})},function(e){console.warn(e)});return Promise.resolve(r&&r.then?r.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},n.sendMessageToQueue=function(e,n){try{var t=this;if(!t.channel)return console.warn("RabbitMQ channel is not initialized."),Promise.resolve();var r=o(function(){return Promise.resolve(t.channel.assertQueue(e,{durable:!1})).then(function(){var o=JSON.stringify(n);t.channel.sendToQueue(e,Buffer.from(o)),console.log(" [x] Sent to queue "+e+": "+o)})},function(e){console.warn(e)});return Promise.resolve(r&&r.then?r.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},e}()});