import Link from "next/link";
import { routes } from "~/app/constants/routes";
import { cn } from "~/lib/utils";

interface ModuleNavProps {
  slug: string;
  moduleName: string;
  moduleId: string;
  lessons: { id: string; title: string; isActive?: boolean }[];
}

export function ModuleNav({
  moduleName,
  moduleId,
  slug,
  lessons,
}: ModuleNavProps) {
  return (
    <aside className="bg-background hidden w-64 shrink-0 border-r p-6 md:block">
      <div className="mb-6 text-lg font-semibold">{moduleName}</div>
      <nav className="space-y-1">
        {lessons.map((lesson) => (
          <Link
            key={lesson.id}
            href={routes.moduleLesson(slug, moduleId, lesson.id)}
            className={cn(
              "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
              {
                "bg-primary hover:bg-primary/90 text-primary-foreground":
                  lesson.isActive,
                "hover:bg-muted": !lesson.isActive,
              },
            )}
            prefetch={false}
          >
            <div
              className={cn("bg-primary h-2 w-2 rounded-full", {
                "bg-primary-foreground": lesson.isActive,
                "bg-primary": !lesson.isActive,
              })}
            />
            <span>{lesson.title}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
