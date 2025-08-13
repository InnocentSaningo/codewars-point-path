import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Minus, Trash2, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  liked: boolean;
}

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Gaming Headset",
      price: 89.99,
      quantity: 1,
      image: "🎧",
      liked: false
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      price: 149.99,
      quantity: 1,
      image: "⌨️",
      liked: true
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: 59.99,
      quantity: 2,
      image: "🖱️",
      liked: false
    },
    {
      id: 4,
      name: "Monitor Stand",
      price: 29.99,
      quantity: 1,
      image: "🖥️",
      liked: false
    }
  ]);

  const { toast } = useToast();

  const updateQuantity = (id: number, change: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(0, item.quantity + change);
        if (newQuantity === 0) {
          toast({
            title: "Item Removed",
            description: `${item.name} has been removed from your cart.`,
          });
          return null;
        }
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(Boolean) as CartItem[]);
  };

  const deleteItem = (id: number) => {
    const item = cartItems.find(item => item.id === id);
    setCartItems(prev => prev.filter(item => item.id !== id));
    toast({
      title: "Item Deleted",
      description: `${item?.name} has been removed from your cart.`,
    });
  };

  const toggleLike = (id: number) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, liked: !item.liked } : item
    ));
  };

  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Shopping Cart
          </h2>
          <p className="text-xl text-muted-foreground">
            Manage your items and see your total
          </p>
        </div>

        <div className="grid gap-6">
          {cartItems.map((item) => (
            <Card key={item.id} className="bg-gradient-to-r from-card to-muted/10 border-gaming-purple/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  {/* Product Image */}
                  <div className="text-4xl">{item.image}</div>
                  
                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gaming-green font-medium">${item.price.toFixed(2)}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-8 h-8 p-0"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    
                    <span className="w-12 text-center font-medium bg-muted/50 rounded px-2 py-1">
                      {item.quantity}
                    </span>
                    
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-8 h-8 p-0"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Subtotal */}
                  <div className="text-right min-w-[80px]">
                    <p className="font-semibold text-gaming-purple">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => toggleLike(item.id)}
                      className={`w-8 h-8 p-0 ${
                        item.liked 
                          ? 'text-red-500 hover:text-red-600' 
                          : 'text-muted-foreground hover:text-red-500'
                      }`}
                    >
                      <Heart 
                        className={`w-4 h-4 ${item.liked ? 'fill-current' : ''}`} 
                      />
                    </Button>
                    
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => deleteItem(item.id)}
                      className="w-8 h-8 p-0 text-destructive hover:text-destructive/80"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Total Section */}
        <Card className="mt-8 bg-gradient-to-br from-gaming-purple/5 to-gaming-blue/5 border-gaming-purple/30">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Cart Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center text-xl font-bold">
              <span>Total Items: {cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
              <span className="text-gaming-green text-2xl">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            
            <div className="mt-6 text-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 text-white px-8"
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </Button>
            </div>
          </CardContent>
        </Card>

        {cartItems.length === 0 && (
          <Card className="mt-8 text-center py-12">
            <CardContent>
              <p className="text-xl text-muted-foreground">Your cart is empty</p>
              <Button className="mt-4" onClick={() => window.location.reload()}>
                Reload Sample Items
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default ShoppingCart;