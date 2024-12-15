import Image from 'next/image';

export default function HeroSection() {
    return (
        <div className=" bg-white  mt-10 pr-10 pl-10">
            <div className="bg-white  mt-10 p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center  mb-[40px] h-[400px]">
                    {/* Text Content */}
                    <div className="flex flex-col items-start ml-[150px] w-[500px]">
                        <h1 className="text-[#A59D84] text-5xl font-bold mb-4  w-[500px] text-[58px] font-bold ${montserrat.className}">Urooj Saeed</h1>
                        <h3 className="text-black text-[18px] mb-6 ${montserrat.className}">
                            "I create visually stunning and user-friendly websites, turning design concepts into seamless front-end experiences."
                        </h3>
                        <div className="flex items-center gap-5">
                            <button className="bg-[#A59D84]    text-black px-5 py-2  ${montserrat.className}  hover:bg-[#D7D3BF] hover:text-white ">
                                <a href="/images/Urooj Saeed Resume!!!-2.pdf">Download Resume</a>
                            </button>
                        </div>
                    </div>

                    {/* Picture*/}

                    <div className="flex justify-center mb-[40px] w-[500px] mr-[200px]">
                        <Image
                            src="/images/pic1.png"
                            alt="Product image"
                            width={300}
                            height={300}
                            className="rounded-md shadow-md w-[400px] h-[300px]"
                        />
                    </div>

                </div>
                <div className="w-[600px] h-[2px] bg-[#C1BAA1] mt-[-20px] ml-[-30px]"></div>
            </div>

        </div>
    );
}
