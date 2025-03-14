import { z } from 'zod';

import { experienceSchema } from '@/utils/schema';
import rawExpData from '@/data/data.json';
import { RecursiveTimeline } from '@/_components/recursive-timeline';

const experienceListSchema = z.array(experienceSchema);

const parsedData = experienceListSchema.parse(rawExpData);

export default function Home() {
  return (
    <div className="w-5xl p-4 mx-auto">
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {parsedData.map((exp) => (
          <RecursiveTimeline key={exp.name} {...exp} />
        ))}
      </ol>
    </div>
  );
}
