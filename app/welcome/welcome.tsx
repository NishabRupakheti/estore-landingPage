import TopLevel from "~/components/Home/TopLevel";
import TodayOffer from "~/components/Home/TodayOffer";
import ExploreProduct from "~/components/Home/ExploreProduct";
import CatagoryBrowser from "~/components/Home/CatagoryBrowser";
import NewArrival from "~/components/Home/NewArrival";
import Service from "~/components/about/Service";


export function Welcome() { // home component
  return (
    <>
      <TopLevel />
      <TodayOffer />
      <CatagoryBrowser />
      <ExploreProduct />
      <NewArrival />
      <Service />
    </>
  );
}

