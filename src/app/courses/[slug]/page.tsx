import Link from "next/link";
import { Card, CardContent } from "~/components/ui/card";

export default function Page() {
  return (
    <div className="flex min-h-dvh flex-col">
      <section className="w-full bg-primary pt-12 md:pt-24 lg:pt-32">
        <div className="container space-y-10 px-4 md:px-6 xl:space-y-16">
          <div className="grid gap-4 md:grid-cols-2 md:gap-16">
            <div className="space-y-4 pb-4">
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Introduction to Web Development
              </h1>
              <p className="mx-auto max-w-[700px] text-primary-foreground md:text-xl">
                Learn the fundamentals of web development, from HTML and CSS to
                JavaScript and modern frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="mb-8 text-3xl font-bold tracking-tighter md:text-4xl">
            Course Modules
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <Card className="pt-2 transition-colors hover:bg-stone-300/70">
              <Link href="/courses/html-and-css-basics">
                <CardContent>
                  <h3 className="text-xl font-bold">HTML and CSS Basics</h3>
                  <p className="text-muted-foreground">
                    Learn the fundamentals of HTML and CSS to build responsive
                    web pages.
                  </p>
                  <p className="text-muted-foreground">Duration: 2 hours</p>
                </CardContent>
              </Link>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-xl font-bold">JavaScript Essentials</h3>
                <p className="text-muted-foreground">
                  Dive into the world of JavaScript and learn how to add
                  interactivity to your web pages.
                </p>
                <p className="text-muted-foreground">Duration: 3 hours</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-xl font-bold">React Fundamentals</h3>
                <p className="text-muted-foreground">
                  Explore the React library and learn how to build modern,
                  component-based web applications.
                </p>
                <p className="text-muted-foreground">Duration: 4 hours</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-xl font-bold">Backend with Node.js</h3>
                <p className="text-muted-foreground">
                  Learn how to build server-side applications using Node.js and
                  Express.
                </p>
                <p className="text-muted-foreground">Duration: 5 hours</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-xl font-bold">Deployment and Hosting</h3>
                <p className="text-muted-foreground">
                  Discover how to deploy your web applications to popular
                  hosting platforms.
                </p>
                <p className="text-muted-foreground">Duration: 2 hours</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-xl font-bold">
                  Web Development Best Practices
                </h3>
                <p className="text-muted-foreground">
                  Explore industry-standard best practices for building
                  high-quality web applications.
                </p>
                <p className="text-muted-foreground">Duration: 3 hours</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
