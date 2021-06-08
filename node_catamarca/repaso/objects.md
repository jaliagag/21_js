# objects

<https://javascript.info/object>

objects are used to store keyed collections of various data and more complex entities.

An object can be created with figure brackets `{…}` with an optional list of _properties_. A property is a “key: value” pair, where `key` is a string (also called a “property name”), and `value` can be anything.

An empty object (“empty cabinet”) can be created using one of two syntaxes:

```js
let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax

let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};
```

Property values are accessible using the dot notation:

```js
// get property values of the object:
alert( user.name ); // John
alert( user.age ); // 30
```

add value

```js
user.car = "gol";
```

delete value

```js
delete user.age;
```

We can use square brackets in an object literal, when creating an object. That’s called computed properties.

For instance:

```js
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"
```

The meaning of a computed property is simple: [fruit] means that the property name should be taken from fruit.

So, if a visitor enters "apple", bag will become {apple: 5}.

mas beautiful

```js
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {};

// take property name from the fruit variable
bag[fruit] = 5;
```

kubeadm token create --print-join-command

```js
```
