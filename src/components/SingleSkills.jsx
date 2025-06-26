// components/SingleSkill.jsx
'use client';

const SingleSkill = ({ skill }) => {
  const Icon = skill.icon;

  return (
    <div className="p-4 m-2 w-32 h-32 flex flex-col items-center justify-center border border-primary rounded-lg hover:scale-105 transition-all duration-300 shadow-sm bg-white">
      <Icon className={`text-4xl mb-2 ${skill.color}`} />
      <span className="text-center text-sm font-semibold text-gray-800">{skill.name}</span>
    </div>
  );
}
export default SingleSkill;