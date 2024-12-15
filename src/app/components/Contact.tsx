import Image from 'next/image';
import Link from "next/link";
export default function Contact() {
    return (
        <div>
            {/* Part 1 */}
            <div className="relative w-full">
                <Image src="/images/contact.png"
                    height={716}
                    width={1500}
                    alt="Picture of the author"
                    className="w-[2000px]  h-[200px] " />
                <div className="absolute  ml-[-120px] mt-[-40px] top-[50%] left-[50%] flex justify-center flex-col items-center ">
                    <h3 className="font-bold mt-[-20px] ml-[-60px] text-[30px] ">Lets Write  Your Story Together</h3>
                    <h4 className="font-bold  ml-[-90px]  text-[#A59D84] text-[20px] ">Get In Touch With Me</h4>
                    <div className="flex justify-center space-x-4 mt-2 mr-[80px]">
                        <Link href="https://www.linkedin.com/in/urooj-saeed-b748a5304/" className="flex items-center ${montserrat.className} text-black hover:text-[#A59D84] font-bold text-[20px] ${montserrat.className} tracking-[0.2px]">

                         LinkedIn
                        </Link>
                        <Link href="https://github.com/Urooj1112" className="flex items-center hover:text-[#A59D84] ${montserrat.className} text-black font-bold text-[20px] ${montserrat.className} tracking-[0.2px]">
                        GitHub
                        </Link>
                        <Link href="mailto:saeedurooj0@gmail.com" className="flex items-center hover:text-[#A59D84] ${montserrat.className}  text-black font-bold text-[20px] ${montserrat.className} tracking-[0.2px]">
                             Email
                        </Link>
                    </div>

                </div>

            </div>
      </div>

    );
}
