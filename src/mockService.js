const database = [
    {
        id: 1,
        category: "sustratos", 
        title: "Sustrato grow mix 80 litros", 
        price: 7500,
        stock: 16,
        img: "jkxnsakjnx",
        description: "Sustrato profesional Terra Fertil grow mix multipro 80 litros. 100% orgánico.",
    },
    {
        id: 2,
        category: "sustratos",
        title: "Humus de lombriz Juani Juana 10 litros", 
        price: 3800,
        stock: 8,
        img: "jjcdbsjcbsdj",
        description: "Humus de lombriz 100% orgánico JuaniJuana 10 litros.",
    },
    {
        id: 3,
        category: "iluminacion",
        title: "Panel led 300w",
        price: 25000,
        stock: 12,
        img: "hddjsbcsdhjbcs",
        description: "Panel led 300w para cultivo indoor. Floración y crecimiento",
    },
    {
        id: 4,
        category: "macetas",
        title: "Maceta geotextil Eden 10 litros.",
        price: 800,
        stock: 21,
        img: "dkjscnksjcnsdkjcn",
        description: "Maceta para cultivo de tela geotextil Eden 10 litros.",
    },
    {
        id: 5,
        category: "fertilizantes",
        title:  "Redutor PH Namaste 500ml.",
        price: 1015,
        stock: 9,
        img: "uchdsbcjhsbdcjsdhbc",
        description: "Redcutor de PH Namaste a base de ácidos orgánicos 500ml.",
    },
    {
        id: 6,
        category: "macetas",
        title: "Maceta root house 10 litros",
        price: 2200,
        stock: 13,
        img: "chsdjcbhsdjbcjsdh",
        description: "Maceta para cultivo inddor root house autopoda + plato",
    },
    {
        id: 7,
        category: "fertilizantes",
        title: "Tripack advanced nutrientes 500ml.",
        price: 11000,
        stock: 31,
        img: "iduacisjcnksajcn",
        description: "Pack x 3 fertilizantes grow, micro, bloom 500ml.",
    },
    {
        id: 8,
        category: "fertilizantes",
        title: "Nutripack Namaste",
        price: 8500,
        stock: 26,
        img: "disjdnask",
        description: "Nutripack Namaste, kit orgánico completo",
    },
    {
        id: 9,
        category: "iluminacion",
        title: "Lampara led cultivo indoor 50w",
        price: 3400,
        stock: 17,
        img: "jdnkjcsnkjsncsd",
        description: "Lampara led cultivo indoor 50w growing full spectrum",
    },
    {
        id: 10,
        category: "sustrato",
        title: "Sustrato Santa Planta super mix 50 litros",
        price: 4500,
        stock: 5,
        img: "udshbcsdkjbcsdjkcbksd",
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