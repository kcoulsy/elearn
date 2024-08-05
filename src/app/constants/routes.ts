export const routes = {
  moduleLesson: (slug: string, moduleId: string, lessonId: string) =>
    `/courses/${slug}/module/${moduleId}/lesson/${lessonId}`,
}
