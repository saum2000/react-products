export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
}

export const getAllProducts = (): Promise<Product[]> => fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json: Product[]) => json);