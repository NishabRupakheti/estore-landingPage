import BillingForm from "~/components/checkout/BillingForm"
import CheckOut from "~/components/checkout/CheckOut"

const Checkout = () => {
  return (
    <>
      <div className="p-10 font-semibold"> Account / My Account / Product / View Cart / Checkout </div>
      <div className="max-w-7xl mx-auto p-6 space-y-6 flex" >
        <BillingForm />
        <CheckOut />
      </div>

    </>
  )
}

export default Checkout