import { Routes, Route } from "react-router-dom";
import { CommonPage } from "../Components/Components";
import { Home, Services, Blogs, SingleBlog, Contact, BookNow, MultipleBlogPage, Category, MultipleCategory, ThankYou, PPC,  ChildBenefit, DentalImplant, Denture, TeethWhitening, CrownsNBridges, Veneers, Invisalign, RootCanal, ToothCleaning, DentalEmergency, ToothFilling, PrivacyPolicy, TNC, Offer, Error } from "../Pages/Pages";

const Routing = () => {
  return (
    <>
      <Routes>
        {
          [{ id: "route-1", path: "/", element: <Home /> },
          { id: "route-2", path: "/about-us/", element: <CommonPage contactDetails={true} /> },
          { id: "route-3", path: "/referral-program/", element: <CommonPage contactDetails={false} /> },
          { id: "route-4", path: "/payment-plan/", element: <CommonPage contactDetails={true} /> },
          { id: "route-5", path: "/new-technologies/", element: <CommonPage contactDetails={false} /> },
          { id: "route-6", path: "/service/", element: <Services /> },
          { id: "route-7", path: "/blog/", element: <Blogs /> },
          { id: "route-8", path: "/:slug", element: <SingleBlog /> },
          { id: "route-9", path: "/contact-us/", element: <Contact /> },
          { id: "route-10", path: "/how-we-can-reduce-the-spread-of-corona-virus-together/", element: <CommonPage contactDetails={false} /> },
          { id: "route-11", path: "/book-now/", element: <BookNow /> },
          { id: "route-12", path: "/blog/page/:pageNo/", element: <MultipleBlogPage /> },
          { id: "route-13", path: "/category/:category/", element: <Category /> },
          { id: "route-14", path: "/category/:category/page/:pageNo/", element: <MultipleCategory /> },

          {id: "route-38", path: "/service/child-benefit/", element: <ChildBenefit />},
          {id: "route-39", path: "/service/dental-implants/", element: <DentalImplant />},
          {id: "route-40", path: "/service/dentures/", element: <Denture />},
          {id: "route-41", path: "/service/teeth-whitening/", element: <TeethWhitening />},
          {id: "route-42", path: "/service/crowns-and-bridge/", element: <CrownsNBridges />},
          {id: "route-43", path: "/service/veneers/", element: <Veneers />},
          {id: "route-44", path: "/service/teeth-aligners/", element: <Invisalign />},
          {id: "route-45", path: "/service/root-canal/", element: <RootCanal />},
          {id: "route-46", path: "/service/teeth-cleaning/", element: <ToothCleaning />},
          {id: "route-47", path: "/service/dental-emergency/", element: <DentalEmergency />},
          {id: "route-48", path: "/service/tooth-fillings/", element: <ToothFilling />},

          { id: "route-16", path: "/get-painless-dental-treatment-at-skye/", element: <CommonPage contactDetails={true} /> },
          { id: "route-17", path: "/get-the-best-dental-care-at-sandhurst/", element: <CommonPage contactDetails={true} /> },
          { id: "route-18", path: "/affordable-dental-services-at-patterson-lakes/", element: <CommonPage contactDetails={true} /> },
          { id: "route-19", path: "/we-are-your-go-to-dentist-in-cranbourne-west/", element: <CommonPage contactDetails={true} /> },
          { id: "route-20", path: "/we-are-your-go-to-dentist-in-cranbourne-west/", element: <CommonPage contactDetails={true} /> },
          { id: "route-21", path: "/looking-for-a-dentist-in-frankston-north/", element: <CommonPage contactDetails={true} /> },
          { id: "route-22", path: "/find-the-best-dentist-in-seaford/", element: <CommonPage contactDetails={true} /> },
          { id: "route-23", path: "/get-all-your-dental-needs-handled-in-lyndhurst/", element: <CommonPage contactDetails={true} /> },
          { id: "route-24", path: "/affordable-dental-services-at-langwarrin/", element: <CommonPage contactDetails={true} /> },
          { id: "route-25", path: "/thank-you/", element: <ThankYou /> },
          { id: "route-26", path: "/dental-emergency/", element: <PPC /> },
          { id: "route-27", path: "/scale-and-clean/", element: <PPC /> },
          { id: "route-28", path: "/dentures/", element: <PPC /> },
          { id: "route-29", path: "/teeth-whitening/", element: <PPC /> },
          { id: "route-30", path: "/child-dental-benefit-schedule/", element: <PPC /> },
          { id: "route-31", path: "/tooth-fillings/", element: <PPC /> },
          { id: "route-32", path: "/veneers/", element: <PPC /> },
          { id: "route-33", path: "/root-canal/", element: <PPC /> },
          { id: "route-34", path: "/dental-implants/", element: <PPC /> },
          { id: "route-35", path: "/wisdom-teeth-removal/", element: <PPC /> },
          { id: "route-36", path: "/crowns-and-bridges/", element: <PPC /> },
          {id: "route-49", path: "/privacy-policy/", element: <PrivacyPolicy />},
          {id: "route-50", path: "/terms-and-conditions/", element: <TNC />},
          {id: "route-51", path: "/offer/", element: <Offer />},
          {id: "route-52", path: "404", element: <Error/>},

          ].map(item => <Route key={item.id} path={item.path} element={item.element} />)
        }
      </Routes>
    </>
  )
}

export default Routing