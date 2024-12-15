import Image from 'next/image';

export default function About() {
    return (
        <div className="flex justify-between items-center h-screen p-5">
            {/* Left Content */}
            <div className=" relative w-full md:w-1/2 flex justify-center items-center">
                <Image
                    src="/images/aboutpic.jpeg"  // Replace with your image path
                    alt="Example Image"
                    width={600}
                    height={600}
                    className="object-cover   ml-[150px]"
                />

                <div className="absolute  ml-[-120px] mt-[-40px] top-[50%] left-[50%] flex justify-center flex-col items-center ">
                    <div><h3 className=" mr-[300px] text-[#AB4459] text-[40px]  mt-[-150px] ">Hey!</h3></div>
                    <h3 className="font-bold  ml-[50px] mr-[50px] text-[30px] mb-[20px] mt-[-90px]">I am Urooj Saeed, <span className="text-[#A59D84] "> FrontEnd Developer</span></h3>
                    <p className=" text-[15px]  ml-[50px] mr-[50px]"> A front-end developer who brings ideas to life with clean code and sleek designs. Passionate about creating seamless, responsive web experiences, I thrive on transforming complex challenges into simple, intuitive solutions. Always curious and driven to learn, I'm here to build the web of tomorrow—one line of code at a time. </p>
                </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <Image
                    src="/images/pic2.png"  
                    alt="Example Image"
                    width={400}
                    height={200}
                    className="object-cover rounded-md  mt-[-100px] shadow-sm mb-[20px] mr-[100px] h-[500px] w-[600px]"
                />
            </div>
        </div>
    );
}

