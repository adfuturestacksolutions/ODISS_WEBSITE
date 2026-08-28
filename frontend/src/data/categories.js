import adultsGif from "../assets/category/Adults.gif";
import womenGif from "../assets/category/Women.gif";
import kidsGif from "../assets/category/Kids.gif";
import vitalsGif from "../assets/category/Vitals.gif";

/**
 * ODISS Product Categories Data
 * Source: MongoDB categories collection
 */

const categories = [
  {
    _id: "6a8418187ab5284c0db7cb72",
    slug: "adults-range",
    name: "Adults Range",
    shortDescription:
      "Oral dissolving strip solutions designed for the everyday wellness and nutritional needs of adults.",
    description:
      "Explore ODIS Adults Range of oral dissolving strips developed for convenient daily wellness. The range can include solutions supporting energy, immunity, sleep, focus, nutrition and other adult wellness needs in a convenient, fast-dissolving format.",
    image: {
      url: adultsGif,
      publicId: "odiss_products/zwkihdbktooo4svycvio",
      alt: "ODIS Adults Range oral dissolving strips",
    },
    banner: {
      url: "https://res.cloudinary.com/t1hpbvi6/image/upload/v1787076109/odiss_products/pnyrrdrt3wavczk7yceo.jpg",
      publicId: "odiss_products/pnyrrdrt3wavczk7yceo",
      alt: "",
    },
    displayOrder: 1,
    isFeatured: true,
    status: "published",
    seo: {
      metaTitle: "Adults Oral Dissolving Strips | ODIS",
      metaDescription:
        "Explore ODIS Adults Range oral dissolving strips for convenient daily wellness, nutrition, energy, immunity, sleep and more.",
      canonicalUrl: "/products/adults-range",
      ogTitle: "Adults Range | ODIS Oral Dissolving Strips",
      ogDescription:
        "Discover convenient oral dissolving strip solutions designed for adult wellness and nutritional needs.",
      ogImage: "",
    },
    benefits: [],
    keyFeatures: [],
    createdAt: "2026-08-18T08:30:16.350Z",
    updatedAt: "2026-08-18T18:01:53.426Z",
    publishedAt: "2026-08-18T18:01:53.422Z",
  },
  {
    _id: "6a8418197ab5284c0db7cb73",
    slug: "womens-range",
    name: "Women's Range",
    shortDescription:
      "Oral dissolving strip solutions developed around the wellness and nutritional needs of women.",
    description:
      "Discover the ODIS Women's Range, featuring convenient oral dissolving strip solutions designed around women's wellness and nutritional needs. Products can address areas such as beauty, immunity, energy, nutritional support and everyday wellbeing.",
    image: {
      url: womenGif,
      publicId: "odiss_products/lfrvky50p9zy4m44ethn",
      alt: "ODIS Women's Range oral dissolving strips",
    },
    banner: {
      url: "https://res.cloudinary.com/t1hpbvi6/image/upload/v1787076448/odiss_products/qnw7mi0zxct2kpt8yglv.jpg",
      publicId: "odiss_products/qnw7mi0zxct2kpt8yglv",
      alt: "",
    },
    displayOrder: 2,
    isFeatured: true,
    status: "published",
    seo: {
      metaTitle: "Women's Oral Dissolving Strips | ODIS",
      metaDescription:
        "Explore ODIS Women's Range of oral dissolving strips designed for convenient wellness, beauty, nutrition, immunity and everyday wellbeing.",
      canonicalUrl: "/products/womens-range",
      ogTitle: "Women's Range | ODIS Oral Dissolving Strips",
      ogDescription:
        "Discover convenient oral dissolving strip solutions developed around women's wellness and nutritional needs.",
      ogImage: "",
    },
    benefits: [],
    keyFeatures: [],
    createdAt: "2026-08-18T08:30:17.098Z",
    updatedAt: "2026-08-18T18:07:40.525Z",
    publishedAt: "2026-08-18T18:07:40.524Z",
  },
  {
    _id: "6a8418197ab5284c0db7cb74",
    slug: "kids-range",
    name: "Kids Range",
    shortDescription:
      "Convenient oral dissolving strip solutions designed with children's wellness and nutritional needs in mind.",
    description:
      "Explore the ODIS Kids Range of convenient oral dissolving strip solutions developed with children's wellness and nutritional needs in mind. The range can include products supporting everyday nutrition, immunity and other age-appropriate wellness applications.",
    image: {
      url: kidsGif,
      publicId: "odiss_products/mayhwkd5361irql6gf5r",
      alt: "ODIS Kids Range oral dissolving strips",
    },
    banner: {
      url: "https://res.cloudinary.com/t1hpbvi6/image/upload/v1787076236/odiss_products/jcbze3jyuqs2rwsh4chp.jpg",
      publicId: "odiss_products/jcbze3jyuqs2rwsh4chp",
      alt: "",
    },
    displayOrder: 3,
    isFeatured: true,
    status: "published",
    seo: {
      metaTitle: "Kids Oral Dissolving Strips | ODIS",
      metaDescription:
        "Explore ODIS Kids Range oral dissolving strips designed for convenient nutritional and wellness applications for children.",
      canonicalUrl: "/products/kids-range",
      ogTitle: "Kids Range | ODIS Oral Dissolving Strips",
      ogDescription:
        "Discover convenient oral dissolving strip solutions developed for children's nutritional and wellness applications.",
      ogImage: "",
    },
    benefits: [],
    keyFeatures: [],
    createdAt: "2026-08-18T08:30:17.310Z",
    updatedAt: "2026-08-18T18:03:59.785Z",
    publishedAt: "2026-08-18T18:03:59.782Z",
  },
  {
    _id: "6a8418197ab5284c0db7cb75",
    slug: "vitals-range",
    name: "Vitals Range",
    shortDescription:
      "Essential oral dissolving strip solutions focused on everyday vitamins, minerals and nutritional wellness.",
    description:
      "The ODIS Vitals Range brings together essential vitamins, minerals and nutritional wellness solutions in a convenient oral dissolving strip format. It is designed for brands looking to offer practical and innovative daily nutrition products.",
    image: {
      url: vitalsGif,
      publicId: "odiss_products/cmkm8qqfdnac4ptzfa8x",
      alt: "ODIS Vitals Range oral dissolving strips",
    },
    banner: {
      url: "https://res.cloudinary.com/t1hpbvi6/image/upload/v1787076569/odiss_products/rp1ccabho6eupvzwj6vt.jpg",
      publicId: "odiss_products/rp1ccabho6eupvzwj6vt",
      alt: "",
    },
    displayOrder: 4,
    isFeatured: true,
    status: "published",
    seo: {
      metaTitle: "Vitals Oral Dissolving Strips | Vitamins & Minerals | ODIS",
      metaDescription:
        "Explore ODIS Vitals Range of oral dissolving strips featuring vitamins, minerals and essential nutritional wellness solutions.",
      canonicalUrl: "/products/vitals-range",
      ogTitle: "Vitals Range | ODIS Oral Dissolving Strips",
      ogDescription:
        "Explore essential vitamin, mineral and nutritional wellness solutions in a convenient oral dissolving strip format.",
      ogImage: "",
    },
    benefits: [],
    keyFeatures: [],
    createdAt: "2026-08-18T08:30:17.495Z",
    updatedAt: "2026-08-18T18:09:32.653Z",
    publishedAt: "2026-08-18T18:09:32.652Z",
  },
];

export default categories;
