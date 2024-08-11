import TemplateBlog from "@/components/layout/templateBlog";
import Image from "next/image";
import Link from "next/link";

const WhyShouldSwitchToNextJs = () => {
  return (
    <TemplateBlog>
      <div>
        <h1 className="text-2xl mb-3 font-bold">
          Why you should switch to Next js App router ? here are the benefits !
        </h1>
        <h4 className="mb-1 text-lg font-bold">1. Faster Performance</h4>
        <Image
          src={"/images/blog/why-should-switch-to-app-router/img-content1.jpg"}
          alt="content-1"
          width={800}
          height={800}
          className="w-full md:w-[75%] mb-1"
        />
        <p className="text-justify">
          The App router uses new technology that makes your website faster,
          your site's components can be rendered on the server, so visitors
          don't have to wait long to see the content
        </p>

        <h4 className="mb-1 text-lg mt-7 font-bold">2. Easier Organization</h4>
        <Image
          src={"/images/blog/why-should-switch-to-app-router/img-content2.jpg"}
          alt="content-2"
          width={800}
          height={800}
          className="w-full md:w-[75%] mb-1"
        />
        <p className="text-justify">
          The folder structure in App router makes more sense. you'll find it
          easier to manage your project files, especially as your project grows
        </p>

        <h4 className="mb-1 text-lg mt-7 font-bold">
          3. More flexible layouts
        </h4>
        <Image
          src={"/images/blog/why-should-switch-to-app-router/img-content3.jpg"}
          alt="content-3"
          width={800}
          height={800}
          className="w-full md:w-[75%] mb-1"
        />
        <p className="text-justify">
          Want to use the same layout for several pages?, it's easy, just create
          layout.tsx file, and Boom !! your work becomes simpler, in the example
          above, every page inside app directory, will use "layout.tsx"
        </p>

        <h4 className="mb-1 text-lg mt-7 font-bold">
          4. Easy to handle Error page & Loading page
        </h4>
        <Image
          src={"/images/blog/why-should-switch-to-app-router/img-content4.jpg"}
          alt="content-4"
          width={800}
          height={800}
          className="w-full md:w-[75%] mb-1"
        />
        <p className="text-justify">
          Just create a "loading.tsx" or "error.tsx" file (if you're using
          typescript), then inside, make a component that you can customize
          however you want, and this file will run when there is an error or
          during loading.
        </p>

        <h4 className="mb-1 text-lg mt-12 font-bold">Conclusion :</h4>
        <p>
          Actually, there are many more advantages offered by the App router,
          you can check out all the detail here{" "}
          <Link
            href="https://nextjs.org/docs"
            className="text-sm text-blue-700 underline hover:no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://nextjs.org/docs
          </Link>
          , Basically, it's better to use App router instead of the Pages router, as Next js also recommends the App router for it's numerous benefits
        </p>
      </div>
    </TemplateBlog>
  );
};
export default WhyShouldSwitchToNextJs;
