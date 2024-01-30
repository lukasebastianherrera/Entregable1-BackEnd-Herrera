class ProductManager {
    
    constructor() {
        this.products = [];
    }

    getProducts(){
        return this.products;
    }

    addProduct(title, description, price, thumbnail, code, stock){
        const products = this.getProducts();
        const id = products.length > 0 ? products[products.length - 1].id + 1 : 1;
        const product = {
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };
        const productCodeRepetido = this.products.some((product) => product.code === code);
        if (productCodeRepetido) {
            console.log(`EL CAMPO DE  ${code} SE REPITE `);
            return;
        }
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Falta rellenar un campo");
            return;
        }
        products.push(product);
    }
    

    getProductById(id){
        const product = this.products.find((product) => product.id === id);
        
        if (!product){
            console.log(`Producto con el id: ${id} no fue encontrado`);
            return;
        }
    return product; 
    }
}

const productManager = new ProductManager();
const products = productManager.getProducts();
    console.log(products)
productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
productManager.addProduct("producto pruebaa2", "Este es un producto prueba2", 199, "Sin imagen", "aaaaa2", 22);
const nuevosProductos = productManager.getProducts(); 
    console.log(nuevosProductos)
productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
const productoID = productManager.getProductById(2);
console.log(productoID)
console.log("funciona node")