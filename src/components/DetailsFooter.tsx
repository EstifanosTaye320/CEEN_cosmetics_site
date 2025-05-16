import RelatedProducts, { Product } from "./RelatedProducts";
import bottle from "../assets/bottle.svg";
import ProductTabs from "./ProductTab";

const realisticSampleProducts: Product[] = [
  { imageUrl: bottle, name: "Cleansing Cream" },
  { imageUrl: bottle, name: "Cleansing Cream" },
  { imageUrl: bottle, name: "Cleansing Cream" },
  { imageUrl: bottle, name: "Cleansing Cream" },
];

const descriptionText = (
  <p className="text-center">
    Lorem ipsum dolor sit amet, et natum albucius vis. Ius iuvaret legimus
    referrentur an, qui harum verear ea, vim te porro detracto. Minim aeterno
    vis in. Duo error nobis mnesarchum ad, latine feugait in sea. His ad diam
    altera percipit, illud nostrud docendi vim ei. Hinc constituam cum cu. Per
    an sadipscing necessitatibus, vel quas idque recusabo an, sale constituam
    est ne.
  </p>
);

const additionalInformation = (
  <div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800">
      Specifications:
    </h3>{" "}
    <ul className="list-disc list-inside pl-4">
      {" "}
      <li>Size: 100ml</li>
      <li>Ingredients: [Aqua, Glycerin, ...etc.]</li>
      <li>Skin Type: Suitable for all skin types</li>
    </ul>
    <p className="mt-4">Manufactured by [Company Name] in [Country].</p>
  </div>
);

const reviews = (
  <div>
    <h3 className="text-xl font-semibold mb-4 text-gray-800">
      Customer Reviews:
    </h3>{" "}
    <div className="border border-gray-200 p-4 rounded-md mb-4">
      {" "}
      <p className="font-medium text-gray-800">Jane Doe</p>{" "}
      <p className="text-sm text-gray-500 mb-2">October 27, 2023</p>{" "}
      <p>
        This cleansing cream is amazing! It leaves my skin feeling so soft and
        clean without being drying. Highly recommend!
      </p>
    </div>
  </div>
);

const currentReviewCount = 1;

function DetailsFooter() {
  return (
    <>
      <ProductTabs
        descriptionContent={descriptionText}
        additionalInfoContent={additionalInformation}
        reviewsContent={reviews}
        reviewCount={currentReviewCount}
      />
      <RelatedProducts products={realisticSampleProducts} />
    </>
  );
}

export default DetailsFooter;
