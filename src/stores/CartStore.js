import {ref } from 'vue'
import {defineStore } from 'pinia'
import { useToast } from 'primevue/usetoast';

export const useCartStore = defineStore('Cart', () => {
    const showCart = ref(false);
    const cartItems = ref([])
    const totalPrice = ref(0);
    const totalQuantities = ref(0);
    const qty = ref(1) 

    const toast = useToast();



    function onAdd(product, quantity) {
        const checkProductInCart = cartItems.value.find((item) => item._id === product._id);

        totalPrice.value = totalPrice.value + product.price * quantity;
        totalQuantities.value = totalQuantities.value + quantity;
        if(checkProductInCart) {
            const updatedCartItems = cartItems.value.map((cartProduct) => {
                if(cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })
            
            cartItems.value = updatedCartItems;
        } else {
            product.quantity = quantity;
            cartItems.value = [...cartItems.value, {...product}];
        }

        toast.add({ severity: 'success', summary: 'Added to cart', detail: `${qty.value} ${product.name} added to the cart.`, life: 3000 });
        qty.value = 1;
    }

    function onRemove(product) {
        const foundProduct = cartItems.value.find((item) => item._id === product._id);
        const newCartItems = cartItems.value.filter((item) => item._id !== product._id);
    
        totalPrice.value = totalPrice.value - foundProduct.price * foundProduct.quantity;
        totalQuantities.value = totalQuantities.value - foundProduct.quantity;

        cartItems.value = newCartItems;
        console.log(cartItems)
    }

    function toggleCartItemQuanitity (id, value){
        const foundProduct = cartItems.value.find((item) => item._id === id)
        const newCartItems = cartItems.value.filter((item) => item._id !== id)
    
        if(value === 'inc') {
            cartItems.value = [...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ];
          totalPrice.value = totalPrice.value + foundProduct.price;
          totalQuantities.value = totalQuantities.value + 1;
        } else if(value === 'dec') {
          if (foundProduct.quantity > 1) {
            cartItems.value = [...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ];
            totalPrice.value = totalPrice.value - foundProduct.price;
            totalQuantities.value = totalQuantities.value - 1;
          }
        }
    }

      function incQty(){
        qty.value = qty.value + 1;
      }
    
      function decQty(){
        if (qty.value -1 < 1) return qty.vlaue = 1;
        qty.value = qty.value - 1; 
      }


    return { showCart, cartItems, totalPrice, totalQuantities, qty, onAdd, onRemove, toggleCartItemQuanitity, incQty, decQty}
})