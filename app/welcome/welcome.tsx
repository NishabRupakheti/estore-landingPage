import TopLevel from "~/components/Home/TopLevel";
import TodayOffer from "~/components/Home/TodayOffer";
import ExploreProduct from "~/components/Home/ExploreProduct";
import CatagoryBrowser from "~/components/Home/CatagoryBrowser";
import NewArrival from "~/components/Home/NewArrival";
import Service from "~/components/about/Service";
import BestSellingProduct from "~/components/Home/BestSellingProduct";
import Categories from "~/components/Home/Categories";


export function Welcome() { // home component
  return (
    <>
      <TopLevel />
      <TodayOffer />
      <CatagoryBrowser />
      <BestSellingProduct />
      <Categories />
      <ExploreProduct />
      <NewArrival />
      <Service />
    </>
  );
}

