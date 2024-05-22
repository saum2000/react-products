export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    qty?: number;
}

export const getAllProducts = (): Promise<Product[]> => fetch("/products.json")
    .then((res) => res.json())
    .then((json: Product[]) => json);