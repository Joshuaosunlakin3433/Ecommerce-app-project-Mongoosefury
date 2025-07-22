import image1 from "../assets/images/ps5-slim.png";
import image2 from "../assets/images/attractive-woman.png";
import image3 from "../assets/images/speaker.png";
import image4 from "../assets/images/perfume.png";
import Tag from "../components/Tag";

const items = [
    {
      title: "PlayStation 5",
      description: "Black and White version of the PS5 coming out on sale.",
      imageSrc: image1,
      link: "Shop Now",
    },
    {
      title: "Women's Collections",
      description: "Featured women collections that give you another vibe.",
      imageSrc: image2,
      link: "Shop Now",
    },
    {
      title: "Speakers",
      description: "Amazon wireless speakers",
      imageSrc: image3,
      link: "Shop Now",
    },
    {
      title: "Perfume",
      description: "GUCCI INTENSE OUD EDP",
      imageSrc: image4,
      link: "Shop Now",
    },
  ];

const NewArrival = () => {

  return (
    <section className="bg-white px-20 py-12 ">
       <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 mx-auto max-w-7xl">
        <Tag>Featured</Tag></div>
      <h1 className="text-3xl text-black-500 font-bold mb-3 ml-15">New Arrivals</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-25 py-15">
        {/* Left Column - PlayStation */}
        <div className="relative bg-black">
          <img src={items[0].imageSrc} alt="PS5" className="w-full h-full object-cover" />
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-xl font-semibold">{items[0].title}</h2>
            <p className="text-sm mt-1">{items[0].description}</p>
            <a href={items[0].link} className="text-white underline mt-2 inline-block">Shop Now</a>
          </div>
        </div>
        <div>
          {/* Right Column - Women Collections */}
        <div className="relative w-120 h-60 bg-black mb-6">
          <img src={items[1].imageSrc} alt="PS5" className="w-full h-full object-cover" />
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-xl font-semibold">{items[1].title}</h2>
            <p className="text-sm w-50 mt-1">{items[1].description}</p>
            <a href={items[1].link} className="text-white underline mt-2 inline-block">Shop Now</a>
          </div>
        </div>

        {/* Right Column - 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.slice(2).map((item, index) => (
            <div key={index} className="relative bg-black">
              <img src={item.imageSrc} alt={item.title} className="w-full object-cover" />
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-sm mt-1">{item.description}</p>
                <a href={item.link} className="text-white underline mt-2 inline-block">Shop Now</a>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;