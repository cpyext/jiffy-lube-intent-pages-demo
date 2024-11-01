import {
  GetHeadConfig,
  GetPath,
  GetRedirects,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import "../index.css";
import { Image, LexicalRichText } from "@yext/pages-components";
import Hours from "../components/hours";
import {
  BsFacebook,
  BsFileMinus,
  BsInstagram,
  BsLinkedin,
  BsPlus,
  BsSearch,
  BsStarFill,
  BsTiktok,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import Cta from "../components/cta";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Schema from "../components/Schema";

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "my-stream-id-1",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "mainPhone",
      "description",
      "hours",
      "slug",
      "photoGallery",
      "c_primaryCTA",
      "c_secondaryCTA",
      // "c_tertiaryCTA",
      "geocodedCoordinate",
      // "c_relatedOffers.name",
      // "c_relatedOffers.shortDescriptionV2",
      // "c_relatedOffers.c_primaryCTA",
      // "c_relatedOffers.price",
      // "c_relatedServices.name",
      // "c_relatedServices.richTextDescriptionV2",
      // "c_relatedServices.c_primaryCTA",
      // "c_relatedServices.primaryPhoto",
      // "c_relatedServices.id",
      "primaryPhoto",
      "c_photo",
      // "c_relatedPromotions.name",
      // "c_relatedPromotions.id",
      // "c_relatedPromotions.shortDescriptionV2",
      // "c_relatedPromotions.primaryPhoto",
      // "c_relatedPromotions.c_category",
      // "c_relatedPromotions.c_primaryCTA",
      // "c_relatedPromotions.c_secondaryCTA",
      // "c_relatedFAQs.id",
      // "c_relatedFAQs.question",
      // "c_relatedFAQs.answerV2",
      // "c_relatedFAQs.c_primaryCTA",

      // "c_ourServices",
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityTypes: ["location"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
    },
  },
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug
    ? document.slug
    : `${document.locale}/${document.address.region}/${document.address.city}/${document.address.line1
    }-${document.id.toString()}`;
};

/**
 * Defines a list of paths which will redirect to the path created by getPath.
 *
 * NOTE: This currently has no impact on the local dev path. Redirects will be setup on
 * a new deploy.
 */
export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`index-old/${document.id.toString()}`];
};

/**
 * This allows the user to define a function which will take in their template
 * data and procude a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: document.description,
        },
      },
    ],
  };
};

/**
 * This is the main template. It can have any name as long as it's the default export.
 *
 *
 * There are a bunch of custom components being used from the src/components folder. These are
 * an example of how you could create your own. You can set up your folder structure for custom
 * components any way you'd like as long as it lives in the src folder (though you should not put
 * them in the src/templates folder as this is specific for true template files).
 */
const Location: Template<TemplateRenderProps> = ({ relativePrefixToRoot, path, document }) => {
  const _data = document;
  const {
    _site,
    name,
    address,
    openTime,
    hours,
    mainPhone,
    geocodedCoordinate,
    description,
    // c_relatedOffers,
    // c_relatedPromotions,
    c_primaryCTA,
    c_secondaryCTA,
    // c_tertiaryCTA,
    photoGallery, primaryPhoto,
    c_photo,
    // c_relatedServices,
    // c_relatedFAQs,
  } = document;
  console.log(geocodedCoordinate);

  const reviews = [
    {
      id: 1,
      title: "Can't say enough good things",
      rating: 5,
      content: `
      <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
      <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
    `,
      author: "Risako M",
      date: "May 16, 2021",
      datetime: "2021-01-06",
    },
    {
      id: 1,
      title: "Can't say enough good things",
      rating: 5,
      content: `
      <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
      <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
    `,
      author: "Risako M",
      date: "May 16, 2021",
      datetime: "2021-01-06",
    },
    {
      id: 1,
      title: "Can't say enough good things",
      rating: 5,
      content: `
      <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
      <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
    `,
      author: "Risako M",
      date: "May 16, 2021",
      datetime: "2021-01-06",
    },
    {
      id: 1,
      title: "Can't say enough good things",
      rating: 5,
      content: `
      <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
      <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
    `,
      author: "Risako M",
      date: "May 16, 2021",
      datetime: "2021-01-06",
    },
  ];

  return (
    <>
      <Schema document={_data} />
      

      {/* Main Header */}
      <header
        className="bg-[#862633] text-white p-6 font-semibold"
        aria-label="Main"
      >
        <div className="mx-auto md:flex justify-between items-center hidden">
          <a href="#">
            <img
              src="https://jiffylube-assets1.imgix.net/img/jiffy-lube.svg?auto=format%2Ccompress&fit=max&ixlib=react-9.2.0&h=32&dpr=1&q=75"
              alt="N Keystone Ave"
              className="h-10 w-auto"
            />
          </a>
          <nav aria-label="Main Navigation">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://handandstone.com/massage/swedish-massage/"
                  className="text-xl hover:underline"
                >
                  Get an Estimate
                </a>
              </li>
              <li>
                <a
                  href="https://handandstone.com/locations/"
                  className="text-xl hover:underline"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="https://handandstone.com/memberships/"
                  className="text-xl hover:underline"
                >
                  Coupons & Offers
                </a>
              </li>
              <li>
                <a
                  href="https://handandstone.com/memberships/"
                  className="text-xl hover:underline"
                >
                  Tips In A Jiffy
                </a>
              </li>
              <li>
                <a
                  href="https://handandstone.com/memberships/"
                  className="text-xl hover:underline"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="https://handandstone.com/memberships/"
                  className="text-xl hover:underline"
                >
                </a>
              </li>
              <li>
                <a
                  href="https://handandstone.com/book-an-appointment/"
                  className="text-white cta2-white hover:underline !inline !font-semibold"
                >
                  Sign in / Create Account
                </a>
              </li>
              <li>
                <BsSearch
                  className="!inline w-6 h-6 ml-6 font-semibold text-white"
                  aria-label="Search Icon"
                />
              </li>
            </ul>
          </nav>
        </div>
      </header>

     
     

{/* Top Account Bar */}
{/* <nav aria-label="Account" className="bg-[#862633] text-white py-2">

<div className="w-full md:container mx-auto flex justify-end">
  <a
    href="https://www.jiffylube.com/locations/in/indianapolis/3328#"
    className="text-xl font-semibold px-4 py-2 bg-[#862633] text-white rounded transition-colors duration-300 border-2 border-transparent"
    style={{
      '--hover-bg-color': '#FFFFFF',      // Hover background color
      '--hover-border-color': '#FF5733',  // Hover border color
      '--hover-text-color': '#333333'     // Hover text color
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = 'var(--hover-bg-color)';
      e.currentTarget.style.borderColor = 'var(--hover-border-color)';
      e.currentTarget.style.color = 'var(--hover-text-color)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = '#862633';
      e.currentTarget.style.borderColor = 'transparent';
      e.currentTarget.style.color = '#FFFFFF';  // Reset to original text color
    }}
  >
    Sign in / Create Account
  </a>
</div>


        {<div className="w-full md:container mx-auto flex justify-start">
          <a
            href="https://www.jiffylube.com/vehicle/preferred-location"
            className="text-xl font-semibold px-4 py-2 bg-[#862633] text-white rounded transition-colors duration-300 border-2 border-transparent"
            style={{
              '--hover-bg-color': '#FFFFFF',      // Hover background color
              '--hover-border-color': '#FF5733',  // Hover border color
              '--hover-text-color': '#333333'     // Hover text color
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--hover-bg-color)';
              e.currentTarget.style.borderColor = 'var(--hover-border-color)';
              e.currentTarget.style.color = 'var(--hover-text-color)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#862633';
              e.currentTarget.style.borderColor = 'transparent';
              e.currentTarget.style.color = '#FFFFFF';  // Reset to original text color
            }}
          >
            Register a Vehicle
          </a>
        </div> }
        
        
      </nav> */}
      

      <nav aria-label="Account" className="bg-[#862633] text-white py-2">
  <div className="w-full md:container mx-auto flex justify justify-between space-x-4">
    <a
      href="https://www.jiffylube.com/locations/in/indianapolis/3328#"
      className="text-xl font-semibold px-4 py-2 bg-[#862633] text-white rounded transition-colors duration-300 border-2 border-transparent"
      style={{
        '--hover-bg-color': '#FFFFFF',      // Hover background color
        '--hover-border-color': '#FF5733',  // Hover border color
        '--hover-text-color': '#333333'     // Hover text color
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--hover-bg-color)';
        e.currentTarget.style.borderColor = 'var(--hover-border-color)';
        e.currentTarget.style.color = 'var(--hover-text-color)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#862633';
        e.currentTarget.style.borderColor = 'transparent';
        e.currentTarget.style.color = '#FFFFFF';  // Reset to original text color
      }}
    >
      Sign in / Create Account
    </a>

    <a
      href="https://www.jiffylube.com/vehicle/preferred-location"
      className="text-xl font-semibold px-4 py-2 bg-[#862633] text-white rounded transition-colors duration-300 border-2 border-transparent"
      style={{
        '--hover-bg-color': '#FFFFFF',      // Hover background color
        '--hover-border-color': '#FF5733',  // Hover border color
        '--hover-text-color': '#333333'     // Hover text color
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--hover-bg-color)';
        e.currentTarget.style.borderColor = 'var(--hover-border-color)';
        e.currentTarget.style.color = 'var(--hover-text-color)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#862633';
        e.currentTarget.style.borderColor = 'transparent';
        e.currentTarget.style.color = '#FFFFFF';  // Reset to original text color
      }}
    >
      Register a Vehicle
    </a>
  </div>
</nav>



















     








     
      {/* Hero Section */}
      <section
        className="relative bg-[#862633] text-white"
        aria-labelledby="hero-heading"
      >
        <div className="mx-auto flex flex-col-reverse md:flex-row-reverse">
          <div className="px-6 pb-24 pt-10 sm:pb-32 lg:px-0 lg:pb-56 lg:pt-48 w-full md:w-1/2">
            <div className="mx-auto max-w-2xl ml-10">
              <div className="hidden sm:mt-32 sm:flex lg:mt-16">
                <div className="relative px-3 py-1 text-xl leading-6">
                  {name}
                </div>
              </div>
              <h1
                id="hero-heading"
                className="text-4xl font-bold tracking-tight sm:text-6xl font-playFair"
              >
                {address.city}, {address.region}
              </h1>
              <p className="mt-6 text-xl leading-8">
                <strong>Call us:</strong>{" "}
                {mainPhone
                  ? mainPhone
                    .replace("+1", "")
                    .replace(/\D+/g, "")
                    .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")
                  : `(610) 363-8020`}
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>Find us:</strong> {address.line1}, {address.city},{" "}
                {address.region} {address.postalCode}
              </p>
              <div className="mt-10 flex flex-col items-start gap-12 h-full justify-between">
                {(c_primaryCTA || c_secondaryCTA) && <div className="flex flex-col md:flex-row gap-4 mb-4 items-start">
                  <Cta cta={c_primaryCTA} className="cta1-primarybg" />
                  <Cta cta={c_secondaryCTA} className="cta1-primarybg" />
                </div>}
                {/* <div className="flex gap-8 mb-4">
                  <BsFacebook className="h-8 w-8" aria-hidden="true" />
                  <BsTwitter className="h-8 w-8" aria-hidden="true" />
                  <BsInstagram className="h-8 w-8" aria-hidden="true" />
                  <BsLinkedin className="h-8 w-8" aria-hidden="true" />
                  <BsYoutube className="h-8 w-8" aria-hidden="true" />
                  <BsTiktok className="h-8 w-8" aria-hidden="true" />
                </div> */}
              </div>
            </div>
          </div>
          <div className="relative lg:-mr-8 xl:absolute xl:inset-0 w-full md:w-1/2">
            <Image image={c_photo} className="!h-full !w-full !max-w-none" />
          </div>
        </div>
      </section>

      
      
      
      
      
      
      
      
      
      
      
      
      {/* Welcome Section */}
      <section
        className="mx-auto p-12 gap-28 flex flex-col md:flex-row justify-between w-full text-primary py-16"
        aria-labelledby="welcome-heading"
      >
        <div className="w-full md:w-1/2">
          <h2 id="welcome-heading" className="text-5xl font-bold mb-6">
            <span className="text-3xl">About Jiffy Lube {address.city}, {" "} {address.region} </span>
            <br />
            
          </h2>
          <p className="text-xl mb-4">{description}</p>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          {hours && <Hours hours={hours} title="Hours" />}
          <p className="text-3xl">Book an appointment</p>
          <Cta
            cta={{
              label: `Call ${mainPhone
                .replace("+1", "")
                .replace(/\D+/g, "")
                .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}`,
              link: `tel:${mainPhone}`,
            }}
            className="cta1-whitebg !w-full"
          />
          {c_primaryCTA && <Cta
            cta={{ label: "Book online", link: c_primaryCTA.link }}
            className="cta1-whitebg !w-full"
          />}
          <p className="text-3xl">Find us</p>
          <Cta
            cta={{
              label: "Buy a Gift Card",
              link: "https://www.google.com/maps/place/7204+Hancock+Village+Drive,+Chesterfield,+VA+23832",
            }}
            className="cta2-whitebg !w-full"
          />
        </div>
      </section>

      {/* Reviews Section */}
      <section
        className="bg-white text-primary py-16"
        aria-labelledby="reviews-heading"
      >
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mx-auto sm:text-center">
            <h2
              id="reviews-heading"
              className="text-6xl font-semibold leading-7 font-playFair"
            >
              Reviews
            </h2>
          </div>
          <div className="mt-24 space-y-10 divide-y divide-gray-200 border-b border-t border-gray-200 pb-10">
            {reviews.map((review, index) => (
              <article
                key={index}
                className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8"
              >
                <div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
                  <div className="flex items-center xl:col-span-1">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating, index) => (
                        <BsStarFill
                          key={index}
                          aria-hidden="true"
                          className={
                            review.rating > rating
                              ? "fill-primary h-5 w-5 flex-shrink-0"
                              : "fill-gray-200 h-5 w-5 flex-shrink-0"
                          }
                        />
                      ))}
                    </div>
                    <p className="ml-3">
                      {review.rating}
                      <span className="sr-only"> out of 5 stars</span>
                    </p>
                  </div>
                  <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                    <h3 className="font-medium">{review.title}</h3>
                    <div
                      dangerouslySetInnerHTML={{ __html: review.content }}
                      className="mt-3 space-y-6"
                    />
                  </div>
                </div>
                <div className="mt-6 flex items-center lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
                  <p className="font-medium">{review.author}</p>
                  <time
                    dateTime={review.datetime}
                    className="ml-4 border-l border-gray-200 pl-4 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
                  >
                    {review.date}
                  </time>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-primary bg-white py-16" aria-label="Footer">
        <div className="mx-auto text-center">
          <p>
            © *Introductory offers valid for first time visit only. Not valid
            for gift cards. Sessions include time for consultation and dressing.
            Rates and services may vary by location.
            <br />
            **Enhancements are included within the one-hour service. ***Offers
            may not be combined. See spa for details.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Location;
