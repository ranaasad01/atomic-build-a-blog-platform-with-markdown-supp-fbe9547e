"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen, Tag, Star, Clock, Feather, Sparkles, Heart, Eye, ChevronRight } from 'lucide-react';
import { APP_NAME, APP_TAGLINE, APP_DESCRIPTION } from "@/lib/data";
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  scaleIn,
  slideInLeft,
  slideInRight,
} from "@/lib/motion";

// ─── Inline mock data ────────────────────────────────────────────────────────

const featuredPosts = [
  {
    slug: "the-art-of-deep-work",
    title: "The Art of Deep Work: How to Reclaim Your Focus in a Distracted World",
    excerpt:
      "In an era of constant notifications and open-plan offices, the ability to concentrate without distraction is becoming increasingly rare — and increasingly valuable.",
    date: "Jan 14, 2025",
    tags: ["Productivity", "Focus"],
    author: "Elena Marsh",
    readingTime: 7,
    coverImage: "/images/deep-work-focus-desk-minimal.jpg",
  },
  {
    slug: "markdown-for-writers",
    title: "Why Every Writer Should Learn Markdown",
    excerpt:
      "Markdown strips away the noise of rich-text editors and lets you focus on what matters: the words. Here's a practical guide to getting started.",
    date: "Jan 9, 2025",
    tags: ["Writing", "Markdown"],
    author: "James Okafor",
    readingTime: 5,
    coverImage: "/images/markdown-writing-laptop-coffee.jpg",
  },
  {
    slug: "building-a-reading-habit",
    title: "Building a Reading Habit That Actually Sticks",
    excerpt:
      "Most reading goals fail by February. These evidence-backed strategies will help you read more books, retain more ideas, and enjoy the process.",
    date: "Jan 3, 2025",
    tags: ["Habits", "Books"],
    author: "Sofia Reyes",
    readingTime: 6,
    coverImage: "/images/reading-habit-books-cozy.jpg",
  },
];

const recentPosts = [
  {
    slug: "typography-in-the-digital-age",
    title: "Typography in the Digital Age",
    excerpt: "How typeface choices shape the way we read and feel about content online.",
    date: "Dec 28, 2024",
    tags: ["Design"],
    author: "Elena Marsh",
    readingTime: 4,
  },
  {
    slug: "the-second-brain-method",
    title: "The Second Brain Method",
    excerpt: "A practical system for capturing, organising, and retrieving your best ideas.",
    date: "Dec 21, 2024",
    tags: ["Productivity"],
    author: "James Okafor",
    readingTime: 8,
  },
  {
    slug: "slow-journalism",
    title: "In Defence of Slow Journalism",
    excerpt: "Why taking time to report deeply matters more than ever in the age of hot takes.",
    date: "Dec 15, 2024",
    tags: ["Media", "Writing"],
    author: "Sofia Reyes",
    readingTime: 6,
  },
  {
    slug: "open-source-writing-tools",
    title: "The Best Open-Source Writing Tools",
    excerpt: "From distraction-free editors to grammar checkers — all free, all powerful.",
    date: "Dec 10, 2024",
    tags: ["Tools"],
    author: "Kai Nakamura",
    readingTime: 5,
  },
];

const features = [
  {
    icon: BookOpen,
    title: "Full Markdown Support",
    description:
      "Write in plain Markdown and see it rendered beautifully — headings, code blocks, blockquotes, tables, and more.",
    color: "bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400",
  },
  {
    icon: Sparkles,
    title: "Syntax Highlighting",
    description:
      "Code snippets are automatically highlighted with Prism.js across 30+ languages, making technical posts a pleasure to read.",
    color: "bg-violet-50 dark:bg-violet-950 text-violet-600 dark:text-violet-400",
  },
  {
    icon: Tag,
    title: "Tag-Based Browsing",
    description:
      "Every article is tagged so readers can explore topics they love — from productivity and design to code and culture.",
    color: "bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400",
  },
  {
    icon: Clock,
    title: "Reading Time Estimates",
    description:
      "Readers know exactly how long an article takes before they start, so they can choose the right moment to dive in.",
    color: "bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: Heart,
    title: "Minimal & Distraction-Free",
    description:
      "A clean, typographically-tuned layout keeps the focus on the writing — no ads, no clutter, no noise.",
    color: "bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400",
  },
  {
    icon: Eye,
    title: "Beautiful Reading Experience",
    description:
      "Generous line-height, optimal measure, and a carefully chosen type scale make every article a joy to read.",
    color: "bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400",
  },
];

const popularTags = [
  { label: "Productivity", count: 12 },
  { label: "Writing", count: 9 },
  { label: "Design", count: 8 },
  { label: "Books", count: 7 },
  { label: "Markdown", count: 6 },
  { label: "Focus", count: 6 },
  { label: "Tools", count: 5 },
  { label: "Habits", count: 5 },
  { label: "Media", count: 4 },
  { label: "Culture", count: 4 },
];

const testimonials = [
  {
    quote:
      "Inkwell is the only blog platform that gets out of the way and lets the writing breathe. The reading experience is second to none.",
    name: "Priya Anand",
    role: "Independent Writer",
    avatar: "/images/avatar-priya-anand.jpg",
  },
  {
    quote:
      "I switched from Medium the moment I tried Inkwell. The Markdown editor is fast, the output is gorgeous, and my readers love it.",
    name: "Tom Whitfield",
    role: "Tech Blogger",
    avatar: "/images/avatar-tom-whitfield.jpg",
  },
  {
    quote:
      "Finally a platform that treats typography seriously. My articles look exactly the way I imagined them — no fighting with a WYSIWYG editor.",
    name: "Amara Diallo",
    role: "UX Designer & Writer",
    avatar: "/images/avatar-amara-diallo.jpg",
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function TagBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900">
      {label}
    </span>
  );
}

function PostCard({
  post,
  priority = false,
}: {
  post: (typeof featuredPosts)[number];
  priority?: boolean;
}) {
  return (
    <motion.article
      variants={scaleIn}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
    >
      {post.coverImage && (
        <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {(post.tags ?? []).map((tag) => (
            <TagBadge key={tag} label={tag} />
          ))}
        </div>
        <h3 className="font-playfair font-bold text-lg text-gray-900 dark:text-white leading-snug mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1 mb-4">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-500 mt-auto">
          <span>{post.author}</span>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function RecentPostRow({ post }: { post: (typeof recentPosts)[number] }) {
  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ x: 4, transition: { duration: 0.15 } }}
      className="group flex items-start gap-4 py-4 border-b border-gray-100 dark:border-gray-800 last:border-0 cursor-pointer"
    >
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap gap-1.5 mb-1">
          {(post.tags ?? []).map((tag) => (
            <TagBadge key={tag} label={tag} />
          ))}
        </div>
        <h4 className="font-semibold text-gray-900 dark:text-white text-sm leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-1">
          {post.title}
        </h4>
        <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
          {post.excerpt}
        </p>
      </div>
      <div className="flex flex-col items-end gap-1 shrink-0 text-xs text-gray-400 dark:text-gray-500">
        <span>{post.date}</span>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>{post.readingTime}m</span>
        </div>
      </div>
    </motion.article>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();

  const motionProps = (variants: object) =>
    shouldReduceMotion
      ? {}
      : {
          variants,
          initial: "hidden" as const,
          whileInView: "visible" as const,
          viewport: { once: true, margin: "-80px" },
        };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
        {/* Background decoration */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-indigo-100/60 dark:bg-indigo-950/40 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-violet-100/50 dark:bg-violet-950/30 blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              {...motionProps(fadeIn)}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-900 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-widest mb-6"
            >
              <Feather className="w-3 h-3" />
              <span>A new kind of blog platform</span>
            </motion.div>

            <motion.h1
              {...motionProps(fadeInUp)}
              className="font-playfair font-bold text-5xl sm:text-6xl lg:text-7xl text-gray-900 dark:text-white leading-tight tracking-tight mb-6"
            >
              {APP_TAGLINE}
            </motion.h1>

            <motion.p
              {...motionProps(fadeInUp)}
              className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              {APP_DESCRIPTION}
            </motion.p>

            <motion.div
              {...motionProps(fadeInUp)}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                href="#articles"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#articles")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
              >
                <BookOpen className="w-4 h-4" />
                Browse Articles
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 font-semibold rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 shadow-sm hover:shadow-md transition-all duration-200"
              >
                Learn More
              </motion.a>
            </motion.div>
          </div>

          {/* Hero stats */}
          <motion.div
            {...motionProps(staggerContainer)}
            className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto"
          >
            {[
              { value: "120+", label: "Articles" },
              { value: "18", label: "Authors" },
              { value: "40k", label: "Readers" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                className="text-center"
              >
                <div className="font-playfair font-bold text-3xl text-indigo-600 dark:text-indigo-400">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Featured Articles ── */}
      <section id="articles" className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...motionProps(fadeInUp)}
            className="flex items-end justify-between mb-12"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
                Featured
              </p>
              <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white">
                Editor's Picks
              </h2>
            </div>
            <Link
              href="#articles"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
            >
              View all <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            {...motionProps(staggerContainer)}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {featuredPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Recent + Tags ── */}
      <section id="tags" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Recent posts list */}
            <div className="lg:col-span-2">
              <motion.div {...motionProps(slideInLeft)}>
                <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
                  Latest
                </p>
                <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-8">
                  Recent Articles
                </h2>
              </motion.div>

              <motion.div {...motionProps(staggerContainer)}>
                {recentPosts.map((post) => (
                  <RecentPostRow key={post.slug} post={post} />
                ))}
              </motion.div>
            </div>

            {/* Tags sidebar */}
            <div>
              <motion.div {...motionProps(slideInRight)}>
                <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
                  Explore
                </p>
                <h2 className="font-playfair font-bold text-2xl text-gray-900 dark:text-white mb-6">
                  Browse by Tag
                </h2>
              </motion.div>

              <motion.div
                {...motionProps(staggerContainer)}
                className="flex flex-wrap gap-2"
              >
                {popularTags.map((tag) => (
                  <motion.button
                    key={tag.label}
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-indigo-400 dark:hover:border-indigo-600 hover:text-indigo-700 dark:hover:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-all duration-200 shadow-sm"
                  >
                    <Tag className="w-3 h-3" />
                    {tag.label}
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      {tag.count}
                    </span>
                  </motion.button>
                ))}
              </motion.div>

              {/* Newsletter CTA */}
              <motion.div
                {...motionProps(fadeInUp)}
                className="mt-10 p-6 rounded-2xl bg-indigo-600 dark:bg-indigo-700 text-white shadow-lg"
              >
                <Sparkles className="w-6 h-6 mb-3 text-indigo-200" />
                <h3 className="font-playfair font-bold text-lg mb-2">
                  Never miss a post
                </h3>
                <p className="text-sm text-indigo-200 mb-4 leading-relaxed">
                  Get the best articles delivered straight to your inbox, every
                  week.
                </p>
                <div className="flex flex-col gap-2">
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-3 py-2 rounded-lg text-sm text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                    defaultValue=""
                    readOnly={false}
                    onChange={() => {}}
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-3 py-2 rounded-lg text-sm font-semibold bg-white text-indigo-700 hover:bg-indigo-50 transition-colors"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features / Value Props ── */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...motionProps(fadeInUp)}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
              Platform
            </p>
            <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-4">
              Built for writers who care about craft
            </h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              {APP_NAME} combines a powerful Markdown engine with a reading
              experience designed to keep readers engaged from the first word to
              the last.
            </p>
          </motion.div>

          <motion.div
            {...motionProps(staggerContainer)}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${feature.color}`}
                >
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials / Social Proof ── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...motionProps(fadeInUp)}
            className="text-center max-w-xl mx-auto mb-14"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
              Readers & Writers
            </p>
            <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white">
              Loved by thoughtful people
            </h2>
          </motion.div>

          <motion.div
            {...motionProps(staggerContainer)}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={scaleIn}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                <div className="flex mb-3 gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <blockquote className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex-1 mb-5">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-9 h-9 rounded-full object-cover bg-gray-100 dark:bg-gray-800"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      {t.name}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {t.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div {...motionProps(slideInLeft)}>
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
                About {APP_NAME}
              </p>
              <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-6 leading-tight">
                A home for ideas that deserve more than 280 characters
              </h2>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                {APP_NAME} was born from a simple frustration: the best writing
                platforms had become cluttered, algorithm-driven, and hostile to
                long-form thought. We built something different.
              </p>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                Every design decision — from the type scale to the line-height —
                is made in service of the reader. Write in Markdown, publish in
                seconds, and trust that your words will be presented exactly as
                they deserve.
              </p>
              <motion.a
                href="#articles"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#articles")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
              >
                Start Reading
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>

            <motion.div
              {...motionProps(slideInRight)}
              className="grid grid-cols-2 gap-4"
            >
              {[
                {
                  icon: BookOpen,
                  title: "Long-form first",
                  body: "Designed for essays, tutorials, and deep dives — not hot takes.",
                  color: "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950",
                },
                {
                  icon: Feather,
                  title: "Markdown native",
                  body: "Write in the format developers and writers already love.",
                  color: "text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950",
                },
                {
                  icon: Heart,
                  title: "Reader-obsessed",
                  body: "Every pixel is tuned for comfortable, distraction-free reading.",
                  color: "text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950",
                },
                {
                  icon: Sparkles,
                  title: "Open & honest",
                  body: "No ads, no algorithmic feeds, no dark patterns. Ever.",
                  color: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 shadow-sm"
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${item.color}`}
                  >
                    <item.icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...motionProps(scaleIn)}
            className="relative overflow-hidden rounded-3xl bg-indigo-600 dark:bg-indigo-700 px-8 py-16 sm:px-16 text-center shadow-2xl"
          >
            {/* Decorative blobs */}
            <div
              aria-hidden
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-2xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-violet-400/20 blur-2xl"
            />

            <motion.div
              {...motionProps(staggerContainer)}
              className="relative z-10"
            >
              <motion.div variants={fadeInUp}>
                <Feather className="w-10 h-10 text-indigo-200 mx-auto mb-4" />
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="font-playfair font-bold text-3xl sm:text-4xl text-white mb-4"
              >
                Ready to read something worth your time?
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-indigo-200 text-lg mb-8 max-w-xl mx-auto leading-relaxed"
              >
                Dive into our growing library of thoughtful articles on
                productivity, writing, design, and the ideas shaping how we
                work and think.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <motion.a
                  href="#articles"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#articles")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-indigo-700 font-bold rounded-xl shadow-lg hover:bg-indigo-50 transition-colors duration-200"
                >
                  <BookOpen className="w-4 h-4" />
                  Browse All Articles
                </motion.a>
                <motion.a
                  href="#tags"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#tags")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold rounded-xl border border-indigo-400 transition-colors duration-200"
                >
                  <Tag className="w-4 h-4" />
                  Explore Tags
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}