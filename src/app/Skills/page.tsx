import Image from 'next/image';
import SkillsSection from '../components/SkillsSection';
export default function Skills() {
    return (
        <div>
            {/* Part 1 */}
            <div className="relative w-full">
                <Image src="/images/skill.png"
                    height={716}
                    width={1500}
                    alt="Picture of the author"
                    className="w-[2000px]  h-[150px] " />
                <div className="absolute  ml-[-120px] mt-[-40px] top-[50%] left-[50%] flex justify-center flex-col items-center ">
                    <h3 className="font-bold  ml-[-60px] mt-[20px] text-[30px] ">Technical Expertise/Skills</h3>
                </div>
            </div>
            {/* part 2 */}
            <SkillsSection />
        </div>

    );
}
