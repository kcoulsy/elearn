import Link from "next/link";
import { ModuleNav } from "./_components/module-nav";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { buttonVariants } from "~/components/ui/button";
import { Progress } from "~/components/ui/progress";
import { routes } from "~/app/constants/routes";

interface PageParams {
  slug: string;
  moduleId: string;
  lessonId: string;
}

export default function Page({ params }: { params: PageParams }) {
  console.log(params);
  const moduleName = "Module 1: Introduction to React";
  const lessons = [
    { id: "1", title: "Lesson 1: Introduction to React" },
    { id: "2", title: "Lesson 2: JSX" },
    { id: "3", title: "Lesson 3: Components" },
    { id: "4", title: "Lesson 4: Props" },
    { id: "5", title: "Lesson 5: State" },
    { id: "6", title: "Lesson 6: Lifecycle Methods" },
  ].map((lesson) => ({
    ...lesson,
    isActive: lesson.id === params.lessonId,
  }));
  const nextLessonId = Math.min(Number(params.lessonId) + 1, 6);
  const previousLessonId = Math.max(Number(params.lessonId) - 1, 1);

  return (
    <div className="bg-muted flex min-h-screen w-full">
      <ModuleNav
        slug={params.slug}
        moduleId={params.moduleId}
        lessons={lessons}
        moduleName={moduleName}
      />
      <div className="flex flex-1 flex-col">
        <header className="bg-background sticky top-0 z-10 items-center justify-between border-b px-6 shadow-sm ">
          <div className="my-4 flex items-center justify-between">
            <div className="text-lg font-medium">{moduleName}</div>
            <Progress value={50} className="w-1/2" />
          </div>
          <div className="bg-primary text-primary-foreground flex items-center justify-between rounded-lg px-6 py-4">
            <h2 className="text-2xl font-bold">
              {lessons.find((l) => l.id === params.lessonId)?.title}
            </h2>
            <div className="flex items-center gap-4">
              <Link
                className={buttonVariants({ variant: "ghost", size: "icon" })}
                href={routes.moduleLesson(
                  params.slug,
                  params.moduleId,
                  `${previousLessonId}`,
                )}
              >
                <ChevronLeftIcon className="h-5 w-5" />
                <span className="sr-only">Previous step</span>
              </Link>
              <Link
                className={buttonVariants({ variant: "ghost", size: "icon" })}
                href={routes.moduleLesson(
                  params.slug,
                  params.moduleId,
                  `${nextLessonId}`,
                )}
              >
                <ChevronRightIcon className="h-5 w-5" />
                <span className="sr-only">Next step</span>
              </Link>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-6 md:p-8">
          <div className="m-5 h-screen bg-gray-800"></div>
        </main>
      </div>
    </div>
  );
}
