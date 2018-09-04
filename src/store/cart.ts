import { observable, computed } from 'mobx'

export interface Product {
    id: number;
    name: string;
    price: number;
    count: number;
}

export const cart = observable({
    products: observable.map(),

    addProduct (Product: Product) {
        if (this.Products.has(Product.id)) {
            throw new Error('Product already exists')
        } else {
            this.Products.set(Product.id, Product)
        }
    },

    updateProduct (Product: Product) {
        this.Products.set(Product.id, Product)
    },

    removeProduct (id: any) {
        this.Products.delete(id)
    },

    unenrollProduct(courseId: number, ProductId: number) {
        this.enrollment.get(courseId).remove(ProductId)
    },

    enrolledProducts(courseId: number) {
        return computed(() => this.enrollment.get(courseId).map((n: any) => this.Products.get(n))).get()
    },
})
