import {
  // computed,
  observable,
} from 'mobx'

export interface ProductProps {
    id: number;
    name: string;
    price: number;
    count: number;
}

export const cart = observable({
  products: observable.map(),

  addProduct (product: ProductProps) {
    if (this.Products.has(product.id)) {
      throw new Error('Product already exists')
    } else {
      this.Products.set(product.id, product)
    }
  },

  updateProduct (product: ProductProps) {
    this.Products.set(product.id, product)
  },

  removeProduct (id: any) {
    this.Products.delete(id)
  },

  // unenrollProduct(courseId: number, ProductId: number) {
  //     this.enrollment.get(courseId).remove(ProductId)
  // },

  // enrolledProducts(courseId: number) {
  //     return computed(() => this.enrollment.get(courseId).map((n: any) => this.Products.get(n))).get()
  // },
})
