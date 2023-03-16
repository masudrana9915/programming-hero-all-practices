const products =[
    {id: 1, name: 'laptop', price: 40000},
    {id: 2, name: 'Phone', price: 50000},
    {id: 3, name: 'pc', price: 60000},
    {id: 4, name: 'house', price: 70000},
];
const items = products.map(products => products.name);
console.log(items)