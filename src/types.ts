export type WithChildren<PROPS = Record<string, unknown>> = PROPS & {
    children?: React.ReactNode | string;
};

export type ShoppingCartItem = {
    id: string;
    name: string;
};

export type ButtonVariants =
    | 'solid-black'
    | 'solid-yellow'
    | 'outline-white'
    | 'outline-black';

export type ImageProps = {
    imageUrl?: string | null;
    altText?: string | null;
};

export type MenuTabTitle = 'Appetizers' | 'Main Course' | 'Dessert';

export type CheckoutFormData = {
    fullName: string;
    phoneNumber: string;
    emailAddress: string;
    brandName?: string;
    brandDetails: string;
    source: string;
    items?: Array<string>;
};
