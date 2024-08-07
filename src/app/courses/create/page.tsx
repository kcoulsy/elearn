/**
 * v0 by Vercel.
 * @see https://v0.dev/t/R7HDTzWvKEC
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

export default function Page() {
  return (
    <div className="container mx-auto">
      <Card className="mx-auto w-full max-w-md">
        <CardHeader>
          <CardTitle>Create a New Course</CardTitle>
          <CardDescription>
            Enter the details for your new course below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Course Title</Label>
              <Input id="title" placeholder="Enter course title" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="slug">Course Slug</Label>
              <Input id="slug" placeholder="Enter course slug" />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="ml-auto">
            Create Course
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
