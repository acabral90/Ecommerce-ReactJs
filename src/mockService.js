

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

function obtenerProducto() {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve (database)
        }, 2000);
    });
};

function getProductos(idURL)  {
    return new Promise ((resolve) => {
        let reqItem = database.find((item) => {
            return item.id === parseInt(idURL)
        });

        setTimeout(() => {
            resolve(reqItem)
        }, 2000);
    });
};

function getProductosByCategory(categoryURL) {
    return new Promise ((resolve) => {
        let reqItems = database.filter((item) => {
            return item.category === categoryURL
        });

        setTimeout(() => {
            resolve(reqItems)
        }, 2000);
    });
};

export default obtenerProducto;

export  {getProductos};

export {getProductosByCategory};