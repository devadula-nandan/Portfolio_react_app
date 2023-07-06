import React from 'react';
import Heading from './Heading';
const ExperienceItem = ({ item, index, icons }) => {
  return (
    <div className="xl:pl-20 pl-9 relative mb-5" key={index}>
      <div>
        {icons[item.type]}
        <span className="text-sm font-semibold text-base-content/60 -ml-4">
          {new Date(item.period[0]).toDateString().split(' ')[1] +
            '-' +
            new Date(item.period[0]).toDateString().split(' ')[3]}{' '}
          -{' '}
          {item.period[1]
            ? new Date(item.period[1]).toDateString().split(' ')[1] +
              '-' +
              new Date(item.period[1]).toDateString().split(' ')[3]
            : <div className="badge badge-primary uppercase text-xs">present</div>}
        </span>
        <h3 className="font-bold text-xl mb-2">{item.title}</h3>
        <ol className=' list-disc text-base-content/80 font-semibold'>
          {item.description.split("*").map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

const ExperienceSection = ({ experience }) => {

  const expIcons = {
    academic: <div className="absolute left-[-1rem] xl:left-6 top-[1.2rem]"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-mortarboard-fill text-secondary drop-shadow-lg" viewBox="0 0 16 16">
        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
    </svg></div>,
    professional: <div className="absolute left-[-0.8rem] xl:left-[1.69rem] top-6"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-briefcase-fill text-secondary drop-shadow-lg" viewBox="0 0 16 16">
        <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
        <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
    </svg></div>
}

  const sortedExperience = experience?.sort(
    (a, b) => new Date(b.period[0]) - new Date(a.period[0])
  );

  return (
    <div className="container mx-auto pt-24 px-3" id="experience">
      <div className="px-5 md:px-4">
        <Heading text="Experience" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-12 gap-6 md:gap-8 mt-20">
        <div className="col-span-6 bg-base-200 rounded-box shadow-lg px-8 py-10 xl:py-14 relative">
          <div className="absolute bg-secondary w-1 h-[calc(100%-5.4rem)] xl:h-[calc(100%-6.4rem)] rounded-full xl:left-[4.5rem] left-[2rem]"></div>
          {sortedExperience
            ?.slice(0, Math.ceil(sortedExperience.length / 2))
            .map((item, index) => (
              <ExperienceItem
                key={index}
                item={item}
                index={index}
                icons={expIcons}
              />
            ))}
        </div>
        <div className="col-span-6 bg-base-200 rounded-box shadow-lg px-8 py-10 xl:py-14 relative">
          <div className="absolute bg-secondary w-1 h-[calc(100%-5.4rem)] xl:h-[calc(100%-6.4rem)] rounded-full xl:left-[4.5rem] left-[2rem]"></div>
          {sortedExperience
            ?.slice(Math.ceil(sortedExperience.length / 2))
            .map((item, index) => (
              <ExperienceItem
                key={index}
                item={item}
                index={index}
                icons={expIcons}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
