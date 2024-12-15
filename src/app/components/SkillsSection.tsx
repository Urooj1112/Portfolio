export default function SkillsSection() {
    const skills = [
      { name: "HTML", percentage: 90 },
 { name: "Next.js", percentage: 85 },
      { name: "CSS", percentage: 80 },
      { name: "Tailwind CSS", percentage: 80 },
     { name: "TypeScript", percentage: 75 },
 { name: "C++", percentage: 70 },
      { name: "C", percentage: 70 },

      { name: "JavaScript", percentage: 60 },  
    ];
    return (
      <div className="py-16 px-4 sm:px-8 md:px-16 lg:px-40 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 bg-white rounded-[50px] shadow-lg">
              <div className="w-full   bg-gray-300 rounded h-2 mb-4">
                <div
                  className="bg-[#A59D84] h-2 rounded"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
              <p className="text-gray-500 font-bold">{skill.percentage}%</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  