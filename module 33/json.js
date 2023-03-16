// const user = {id: 3, name: 'salman', job: 'manager'};
// const stringfied = JSON.stringify(user);
// console.log(user);
// console.log(stringfied);


const shop = {
    owner: 'Akram',
    address:{
        street: 'Puran Dhaka',
        city: 'Dhaka',
        country: 'Bangladesh'
    },
    products: ['laptop', 'phone', 'books'],
     revenue: 'new'
};
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);