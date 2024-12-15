import Image from 'next/image';
const products = [
  {
    name: "Dynamic Resume",
    description: "I developed a dynamic resume using HTML, CSS, and JavaScript, allowing for interactive and customizable content. This project showcases my skills and experience in a visually engaging, user-friendly format.",
    imageUrl: "/images/project1.PNG",
  },
  {
    name: "Car Selling Website  ",
    description:
      "I built a car-selling website for the Mini Hackathon using Next.js, offering a fast and responsive user experience. The project features dynamic listings, search functionality, and a sleek design to help users easily browse and purchase cars.",
    imageUrl: "/images/project02.PNG",
  },
  {
    name: "Best Selling Products ",
    description: "I created a best-selling product website for my practice hackathon using Next.js, focusing on fast performance and seamless navigation. The site showcases top-selling products with real-time updates and an intuitive layout for an enhanced shopping experience.",
    imageUrl: "/images/project03.PNG",
  },
  {
    name: "New Collection Clothes",
    description: "I developed a project for my hackathon using Next.js, where I meticulously recreated a Figma design into a fully frontEnd website. This project demonstrates my ability to translate design concepts into responsive, high-performance web applications.",
    imageUrl: "/images/project4.PNG",
  },]
export default function Projects() {
  return (
    <div>
      {/* Part 1 */}
      <div className="relative w-full">
        <Image src="/images/img1.png"
          height={716}
          width={1440}
          alt="Picture of the author"
          className="w-[2000px]  h-[150px] " />
        <div className="absolute  ml-[-120px] mt-[-40px] top-[50%] left-[50%] flex justify-center flex-col items-center ">
          <h3 className="font-bold text-[30px] ">Most Popular Projects</h3>
        </div>
      </div>

      {/* part 2 */}
      <div className="container mx-auto p-6">
        <div className="flex justify-between mb-8">
        </div>
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`product border rounded-lg p-4 shadow-lg hover:shadow-xl transition `}
            >
              <div className="relative">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="object-cover rounded-md"
                />


              </div>

              <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>

              <div className="flex justify-between items-center mt-4">
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
