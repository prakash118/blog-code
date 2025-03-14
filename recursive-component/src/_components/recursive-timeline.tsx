import { Experience } from '@/utils/schema';

export const RecursiveTimeline = ({
  name,
  time,
  position,
  children,
}: Experience) => {
  return (
    <li className="mb-10 ms-4">
      <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400">
        {time}
      </time>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        {name} - {position}
      </h3>
      {!!children &&
        children.map((child) => (
          <ol
            key={`${child.name}-${child.time}`}
            className="relative border-s border-gray-200 dark:border-gray-700"
          >
            <RecursiveTimeline {...child} />
          </ol>
        ))}
    </li>
  );
};
