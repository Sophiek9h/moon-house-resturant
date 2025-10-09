import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCart } from "@/lib/cart-provider";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  // 👇 This gives the full cart total (used at the bottom if needed)
  const getCartTotal = () => {
    return cartItems
      .reduce((total, item) => {
        const price = parseFloat(item.price.replace("$", ""));
        return total + price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  return (
    <SafeAreaView className="flex-1 bg-white px-6">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-2xl font-nunito-bold">My Cart</Text>

        {cartItems.length > 0 && (
          <TouchableOpacity onPress={clearCart} activeOpacity={0.7}>
            <Text className="text-red-500 font-nunito-semibold">Clear All</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Empty State */}
      {cartItems.length === 0 ? (
        <View className="flex-1 justify-center items-center">
          <Text className="text-gray-500 text-center">Your cart is empty</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => {
              const itemPrice = parseFloat(item.price.replace("$", ""));
              const totalItemPrice = (itemPrice * item.quantity).toFixed(2);

              return (
                <View className="flex-row justify-between items-center mb-4 bg-gray-50 rounded-xl p-3">
                  <View className="flex-row items-center gap-3">
                    <Image
                      source={item.image}
                      className="w-16 h-16 rounded-lg"
                      resizeMode="cover"
                    />

                    <View>
                      <Text className="font-nunito-bold text-lg">{item.title}</Text>
                      <Text className="text-gray-500">
                        ${totalItemPrice}
                      </Text>
                      <Text className="text-gray-500">Qty: {item.quantity}</Text>
                    </View>
                  </View>

                  <TouchableOpacity
                    onPress={() => removeFromCart(item.title)}
                    activeOpacity={0.7}
                    className="bg-red-100 px-3 py-1 rounded-full"
                  >
                    <Text className="text-red-500 font-nunito-semibold">Remove</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />

          {/* ✅ Optional: Show Cart Total at bottom */}
          <View className="mt-4 border-t border-gray-200 pt-4">
            <Text className="text-right text-xl font-nunito-bold">
              Total: ${getCartTotal()}
            </Text>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}
