import { CourseSummary } from "@/types/course-summary.interface";
import { HomeHeroSection } from "./_components/home-hero-section/home-hero-section";
import { CourseCardList } from "./(courses)/_components/course-card-list";

import { IconArrowLeftFill, IconCheck } from "./_components/icons/icons";
import { homeFeatures } from "@/data/home-features";
import Feature from "./_components/feature/feature";
import { Button } from "./_components/button";
import { BlogPostSummary } from "@/types/blog-post-summary.interface";
import { BlogPostCardList } from "./(blog)/_components/blog-post-card-list";
import { API_URL } from "@/configs/global";

async function getNewesCourses(count: number): Promise<CourseSummary[]> {
  const res = await fetch(
    `${API_URL}/courses/newest/${count}`,
    {
      next: {
        revalidate: 24 * 60 * 60,
      },
    }
  );
  return res.json();
}

async function getNewesPosts(count: number): Promise<BlogPostSummary[]> {
  const res = await fetch(`${API_URL}/blog/newest/${count}`, {
    next: {
      revalidate: 24 * 60 * 60,
    },
  });
  return res.json();
}

export default async function Home() {
  const newestCoursesData  = getNewesCourses(4);
  const newestBlogPostsData  = getNewesPosts(4);

  const [newestCourses, newestBlogPosts] = await Promise.all([
    newestCoursesData ,
    newestBlogPostsData ,
  ]);

  return (
    <>
      <HomeHeroSection />
      <section className="dark:bg-base-75 mt-10">
        <div className="container py-10 flex flex-col lg:flex-row gap-10 xl:gap-5">
          {homeFeatures.map((feature) => (
            <Feature key={`feature-${feature.title}`} feature={feature} />
          ))}
        </div>
      </section>
      <section className="container pt-20">
        <div className="text-center xl:text-right">
          <h2 className="text-2x1 font-extrabold">تازه ترین دوره های آموزشی</h2>
          <p>برای به روز ماندن , یاد گرفتن نکته های تازه و ضروری !</p>
        </div>
        <CourseCardList courses={newestCourses} />
      </section>
      <section className="px-2 my-40">
        {/* <div className="sticky top-0 pt-0 text-center"> */}
        <div className="relative pt-0 text-center">
          <div className="bg-primary pointer-events-none absolute left-1/2 aspect-square w-1/2 -translate-x-1/2 -top-96 rounded-full opacity-10 blur-3xl"></div>

          <h2
            lang="en"
            className="gradient leading-[1.3] relative z-10 mx-auto inline-block text-[clamp(2rem,6vw,5.5rem)] font-black"
          >
            ReactJs & Next.js
          </h2>
          <p className="text-base-content/70  relative z-[2] py-4 m-auto md:text-3xl max-w-5xl font-light !leading-[1.7]">
            ری‌اکت و نکست‌جی‌اس برترین کتابخونه‌های فرانت‌اند و یکه‌تاز دنیای
            وب! پیشرفته‌ترین مباحث رو اینجا می تونی پیدا کنی. پس همین الان
            یادگیری رو شروع کن ما هم از ابتدای مسیر با آموزش‌های تخصصی و کاملاً
            کاربردی کنارت هستیم.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-3 justify-center">
            <Button
              variant="primary"
              size="large"
              className="mt-7"
              animatedIcon={true}
            >
              دوره‌های ری اکت و نکست‌ جی‌اس
              <IconArrowLeftFill fill="currentColor" />
            </Button>
            <Button
              variant="neutral"
              size="large"
              className="mt-7"
              animatedIcon={true}
            >
              مقالات ری اکت و نکست‌ جی‌اس
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="flex flex-col xl:flex-row gap-4 justify-center xl:justify-between items-center">
          <div className="text-center xl:text-right">
            <h2 className="text-2xl font-extrabold">
              تازه‌ترین مقاله‌های آموزشی
            </h2>
            <p className="mt-3 text-lg">
              به رایگان، به‌روزترین مقاله‌های دنیای تکنولوژی رو در اختیارت
              می‌ذاریم؛ چون پیشرفتت برامون مهمه!
            </p>
          </div>
          <Button
            variant="neutral"
            className="font-semibold"
            animatedIcon={true}
          >
            همه مقاله‌ها
            <IconArrowLeftFill fill="currentColor" />
          </Button>
        </div>
        <BlogPostCardList posts={newestBlogPosts} />
      </section>
    </>
  );
}
