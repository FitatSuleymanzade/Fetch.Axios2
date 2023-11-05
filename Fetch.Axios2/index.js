const yuksekqiymet = document.getElementById('yuksekqiymet')
const yuksekqiymetiki = document.getElementById('yuksekqiymetiki')
const ad = document.getElementById('ad')
const sayyy = document.getElementById('sayyy')
const idone = document.getElementById('idone')


  


// 1.

// fetch('https://northwind.vercel.app/api/products')
//     .then(res => res.json())
//     .then(data => {
//         let yuksekqiymet = 0;
//         let productWithYuksekqiymet = 0;

//         data.forEach(item => { 
//          if (item.unitPrice > yuksekqiymet) {
//             yuksekqiymet = item.unitPrice;
//                 productWithYuksekqiymet = item;
//             }
//         });

//         yuksekqiymetiki.textContent = `$${yuksekqiymet}`; 
//         productName.textContent = productWithYuksekqiymet ? productWithYuksekqiymet.name : 'Məhsul tapılmadı';
//     });









// 2.

// fetch('https://northwind.vercel.app/api/products')
//     .then(res => res.json())
//     .then(data => {
//         const stockk = data.map(product => product.unitsInStock); 
//         const totalStock = stockk.reduce((total, stock) => total + stock, 0);
//         const totalyyStock = totalStock / stockk.length; 

//         total.textContent= `${totalyyStock}`

//     })






// 3.


// fetch('https://northwind.vercel.app/api/products')
//     .then(res => res.json())
//     .then(data => {
//         const names = data.map(product => product.name); 
//         const nameswrite =names.filter(name => name.startsWith('C'));
//         ad.textContent = `${nameswrite}`
//     })







// 4. 

// fetch('https://northwind.vercel.app/api/customers')
//     .then(res => res.json())
//     .then(data => {
//         const london = data.filter(item => item.address.city === 'London'); 
//         london.forEach(item => {
//             console.log(item.contactName);
//         });
      
//     })






// 5.

// fetch('https://northwind.vercel.app/api/customers')
//     .then(res => res.json())
//     .then(data => {
//         const say = data.filter(item => item.address.region === 'NULL'); 
//         sayyy.textContent = `${say.length}`
      
//     }) 







// 6.


// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => {
//         const user = data.filter(item => item.userId === 1)
//         idone.textContent = `${user.length}`
      
//     }) 
