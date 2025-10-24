import React from "react";
import CoffeePackaging from "@/components/coffeeproducts";
import FooterComponent from "@/components/common/footer";
import Header from "@/components/common/header";
import TopNavBar from "@/components/common/topNavBar";
import { useRouter } from "next/router";

const Products = () => {
    const router = useRouter();
  const { product } = router.query;
  return (
    <div>
      <TopNavBar />
      <Header />
      

      <CoffeePackaging />
      

      <FooterComponent />
    </div>
  );
};

export default Products;
