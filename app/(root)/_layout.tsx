import { CartProvider } from "@/lib/cart-provider";
import { useGlobalContext } from "@/lib/global-provider";
import { Redirect, Slot } from "expo-router";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppLayout(){
    const { loading, isLogged } = useGlobalContext();

    if(loading){
        return(
            <SafeAreaView className="flex-1 justify-center items-center bg-white">
                <ActivityIndicator className="text-primary-300" size="large" />
            </SafeAreaView>
        )
    }

    if(!isLogged){
        return <Redirect href="/sing-in" />
    }

    return (
    <CartProvider>
      <Slot />
    </CartProvider>
  );
}