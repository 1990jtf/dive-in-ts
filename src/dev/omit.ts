
interface IProduct {
    id: string;
    name: string;
    price: number;
    inventory: number; // 库存
}

// TypeScript 中的交叉类型（&），将 { amount: number } 和 Omit<IProduct, 'inventory'> 结合在一起
// Omit 是 TypeScript 中的一个工具类型，用于从某个类型中排除特定属性。

// 所以，ICartProduct 是一个新的类型，包含一个 amount 属性（数字类型），以及从 IProduct 接口中排除了 inventory 属性的其他属性。
type ICartProduct = { amount: number} & Omit<IProduct, 'inventory'>;

const res: ICartProduct[] = []


type INew = Omit<IProduct, 'inventory'>;

type A = { foo: number };
type B = { bar: string };

type C = A & B;

const obj: C = {
    foo: 42,
    bar: "hello"
};