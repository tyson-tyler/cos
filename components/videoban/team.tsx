import Image from "next/image";
import React from "react";

const Teams = () => {
  const teamMembers = [
    {
      name: "Ayush Goyal",
      title: "Team Leader",
      image:
        "https://i.pinimg.com/736x/e4/17/1a/e4171a45bc388893e32ed6690ad209a3.jpg", // Replace with actual image path
      insta: "#",
      github: "#",
      linked: "#",
    },
    {
      name: "Ananya Tandon",
      title: "AI/ML Expert",
      image:
        "https://i.pinimg.com/736x/e4/17/1a/e4171a45bc388893e32ed6690ad209a3.jpg", // Replace with actual image path
      insta: "#",
      github: "#",
      linked: "#",
    },
    {
      name: "Kunal Gupta",
      title: "Frontend Developer",
      image:
        "https://i.pinimg.com/736x/46/a4/e9/46a4e9fcbadaff10367d9e7a7946b05c.jpg", // Replace with actual image path
      insta: "#",
      github: "#",
      linked: "#",
    },
    {
      name: "Tushar Patel",
      title: "Backend Developer",
      image:
        "https://i.pinimg.com/736x/47/4d/11/474d114ad34f9d10289cdd834d9bb0be.jpg", // Replace with actual image path
      insta: "#",
      github: "#",
      linked: "#",
    },
  ];

  return (
    <div className="text-center">
      <h1 className="text-6xl font-semibold">
        Meet the Team Behind <br /> BuildHub
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 container mx-auto px-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 text-center"
          >
            <Image
              className="rounded-full mx-auto w-[200px] h-[200px] object-cover"
              src={member.image}
              alt={member.name}
              width={150}
              height={150}
            />
            <h2 className="text-xl text-gray-700 font-semibold mt-4">
              {member.name}
            </h2>
            <p className="text-gray-600">{member.title}</p>

            <div className="flex justify-center space-x-4 mt-3">
              <a href={member.insta} target="_blank" rel="noopener noreferrer">
                📷
              </a>
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                💻
              </a>
              <a href={member.linked} target="_blank" rel="noopener noreferrer">
                🔗
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
