// const mongoose = require("mongoose");
// const featuredProducts = require("./model/featuredProducts");

// const featuredProductsData = [
//   {
//     name: "Sebamed Gentle Wash 200ml",
//     price: 4200,
//     quantity: 1,
//     imageUrl:
//       "https://res.cloudinary.com/pojuagbomeji/image/upload/v1692577316/GreenPlusPharmacy/sebamedwash_allyto.webp",
//   },
//   {
//     name: "Sebamed Body Milk 200ml",
//     price: 8470,
//     quantity: 2,
//     imageUrl:
//       "https://res.cloudinary.com/pojuagbomeji/image/upload/v1692577316/GreenPlusPharmacy/sebamedbodymilk_gui4zo.webp",
//   },
//   {
//     name: "Sebamed Olive Cleansing Bar 150g",
//     price: 5600,
//     quantity: 4,
//     imageUrl:
//       "https://res.cloudinary.com/pojuagbomeji/image/upload/v1692577316/GreenPlusPharmacy/sebamedcleansingbar_exzk3v.webp",
//   },
//   {
//     name: "Sebamed Skin Care Oil 150ml",
//     price: 3550,
//     quantity: 2,
//     imageUrl:
//       "https://res.cloudinary.com/pojuagbomeji/image/upload/v1692577315/GreenPlusPharmacy/sebamedskincareoil_h05h9g.webp",
//   },
//   {
//     name: "Morgans Pomade",
//     price: 1387,
//     quantity: 1,
//     imageUrl:
//       "https://res.cloudinary.com/pojuagbomeji/image/upload/v1692577316/GreenPlusPharmacy/morganspomade_vqiuuk.jpg",
//   },
// ];


// async function importfeaturedProducts() {
//   try {
//     await mongoose.connect("mongodb://127.0.0.1:27017/pharm", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to MongoDB");
//     await featuredProducts.insertMany(featuredProductsData);
//     console.log("featuredProducts inserted successfully.");
//   } catch (err) {
//     console.error("Error inserting products:", err);
//   } finally {
//     mongoose.disconnect();
//   }
// }

// importfeaturedProducts();