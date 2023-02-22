import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    getDoc,
    doc,
    query,
    where,
    orderBy,
    addDoc,
    writeBatch,
    documentId
} from  "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_9zf1JMFWh0-vSqiyBOv8zm8lkK8Y7ok",
  authDomain: "ecommerce-acabral.firebaseapp.com",
  projectId: "ecommerce-acabral",
  storageBucket: "ecommerce-acabral.appspot.com",
  messagingSenderId: "584249738930",
  appId: "1:584249738930:web:06f654027182e4f5ecabab"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);







export async function obtenerProductos() {
    const productsRef = collection(db, "products");
    const q = query(productsRef, orderBy("index"));
    const snapshot = await getDocs(q);
  
    const productos = snapshot.docs.map((elem) => {
      let producto = elem.data();
      producto.id = elem.id;
      return producto;
    });
  
   
    return productos;
}

export async function getProducts(idUrl) {
    const productsRef = collection(db, "products");
    const docRef = doc(productsRef, idUrl);
    
    const snapshot = await getDoc(docRef);

    return { ...snapshot.data(), id: snapshot.id };
}

export async function getProductsByCategory(categoryUrl) {
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("category", "==", categoryUrl));
  
    const snapshot = await getDocs(q);
  
    const products = snapshot.docs.map((elem) => {
      let product = elem.data();
      product.id = elem.id;
      return product;
    });
  
    return products;
}

export async function exportArray(){


    const database = [
      {
          id: 1,
          category: "sustratos", 
          title: "Sustrato grow mix 80 litros", 
          price: 7500,
          stock: 16,
          img: "/images/sustratoGrowmix80.jpg",
          description: "Sustrato profesional Terra Fertil grow mix multipro 80 litros. 100% orgánico.",
      },
      {
          id: 2,
          category: "sustratos",
          title: "Humus de lombriz Juani Juana 10 litros", 
          price: 3800,
          stock: 8,
          img: "/images/humus_de_lombriz.jpg",
          description: "Humus de lombriz 100% orgánico JuaniJuana 10 litros.",
      },
      {
          id: 3,
          category: "iluminacion",
          title: "Panel led 300w",
          price: 25000,
          stock: 12,
          img: "/images/panelLed300w.jpg",
          description: "Panel led 300w para cultivo indoor. Floración y crecimiento",
      },
      {
          id: 4,
          category: "macetas",
          title: "Maceta geotextil Eden 10 litros.",
          price: 800,
          stock: 21,
          img: "/images/maceta_geotextil_eden_10litros.jpg",
          description: "Maceta para cultivo de tela geotextil Eden 10 litros.",
      },
      {
          id: 5,
          category: "fertilizantes",
          title:  "Redutor PH Namaste 500ml.",
          price: 1015,
          stock: 9,
          img: "/images/reductor_ph_namaste.jpg",
          description: "Redcutor de PH Namaste a base de ácidos orgánicos 500ml.",
      },
      {
          id: 6,
          category: "macetas",
          title: "Maceta root house 10 litros",
          price: 2200,
          stock: 13,
          img: "/images/Maceta root house 10L.jpg",
          description: "Maceta para cultivo inddor root house autopoda + plato",
      },
      {
          id: 7,
          category: "fertilizantes",
          title: "Tripack advanced nutrientes 500ml.",
          price: 11000,
          stock: 31,
          img: "/images/packFertilizantesX3.jpg",
          description: "Pack x 3 fertilizantes grow, micro, bloom 500ml.",
      },
      {
          id: 8,
          category: "fertilizantes",
          title: "Nutripack Namaste",
          price: 8500,
          stock: 26,
          img: "/images/Nutripack namaste.jpg",
          description: "Nutripack Namaste, kit orgánico completo",
      },
      {
          id: 9,
          category: "iluminacion",
          title: "Lampara led cultivo indoor 50w",
          price: 3400,
          stock: 17,
          img: "/images/LamparaLed50w.webp",
          description: "Lampara led cultivo indoor 50w growing full spectrum",
      },
      {
          id: 10,
          category: "sustrato",
          title: "Sustrato Santa Planta super mix 50 litros",
          price: 4500,
          stock: 5,
          img: "/images/Sustrato santa planta super mix 50L.jpg",
          description: "Sustrato ligero profesional Santa Planta super mix indoor/outdoor",
      },
    ];
  
   for (let item of database) {
      item.index = item.id;
      delete item.id;
      addDoc(collection(db, "products"), item).then((respuesta) =>
      console.log("item creado: ", respuesta.id));
    }
  
}

export async function createOrder_WithStockControl(order) {
    const orderRef = collection(db, "orders");
    const productsRef = collection(db, "products");
    const batch = writeBatch(db);
    const arrayIds = order.items.map((item) => item.id);
    const q = query(productsRef, where(documentId(), "in", arrayIds));
    const querySnapshot = await getDocs(q);
    const docsToUpdate = querySnapshot.docs;
    let itemsSinStock = [];
    
    docsToUpdate.forEach((doc) => {
      let stock = doc.data().stock;
      let itemInCart = order.items.find((item) => item.id === doc.id);
      let countInCart = itemInCart.count;
      let newStock = stock - countInCart;
    
      if (newStock < 0) {
        itemsSinStock.push(doc.data().title);
      } else {
        batch.update(doc.ref, { stock: newStock });
      }
    });
    
    if (itemsSinStock.length >= 1)
      throw new Error(
        `Stock no disponible para el producto para los productos ${itemsSinStock}`
      );
    
    await batch.commit();
  
    let newOrder = await addDoc(orderRef, order);
    return newOrder.id;
}




export default db;

