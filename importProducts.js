// const mongoose = require("mongoose");
// const Product = require("./model/products");

// const productsData = [
//   {
//     name: "Dettol",
//     price: "1150",
//     description:
//       "https://res.cloudinary.com/pojuagbomeji/image/upload/v1691626631/GreenPlusPharmacy/dettol_uhfjvr.webp",
//   }, "Dettol is a Safe antiseptic that Keeps your family Safe from bacteria on a Daily basis. It is effective against germs and has been recommended by medical professionals for years to provide all-around family protection.",
//     imageUrl:
//      
//   {
//     name: "PureCarrot",
//     price: "5200",
//     description:
//       "Helps to prevent the formation of signs of aging that occur in the skin cells.",
//     imageUrl:
//       "https://res.cloudinary.com/pojuagbomeji/image/upload/v1691626631/GreenPlusPharmacy/purecarrot_ynq5sa.webp",
//   },
//   {
//     name: "Hyrdocortisone",
//     price: "850",
//     description:
//       "Hydrocortisone is a corticosteroid that helps treat several skin disorders, including insect bites, eczema, dermatitis, allergies, and rashes. It also reduces swelling, itching, and redness that might develop in these conditions.",
//     imageUrl:
//       "https://res.cloudinary.com/pojuagbomeji/image/upload/v1691626631/GreenPlusPharmacy/hydrocortisone_g2ok4m.webp",
//   },
//   {
//     name: "Penicillin",
//     price: "1000",
//     description: "A very effective antifungal ointment.",
//     imageUrl:
//       "https://res.cloudinary.com/pojuagbomeji/image/upload/v1691626631/GreenPlusPharmacy/penicilin_yw7jqi.webp",
//   },
//   {
//     name: "InfraRed Thermometer",
//     price: "15000",
//     description: "An infrared thermometer for measuring temperature.",
//     imageUrl:
//       "https://res.cloudinary.com/pojuagbomeji/image/upload/v1691626631/GreenPlusPharmacy/thermometer_image_url_here.webp",
//   },
// ];

// async function importProducts() {
//   try {
//     await mongoose.connect("mongodb://127.0.0.1:27017/pharm", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to MongoDB");
//     await Product.insertMany(productsData);
//     console.log("Products inserted successfully.");
//   } catch (err) {
//     console.error("Error inserting products:", err);
//   } finally {
//     mongoose.disconnect();
//   }
// }

// importProducts();
