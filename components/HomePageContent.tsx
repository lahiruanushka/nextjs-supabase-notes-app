"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  BookOpen,
  Zap,
  Cloud,
  Lock,
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const HomePageContent = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Designer",
      avatar: "SC",
      quote:
        "NoteNest has completely transformed how I organize my design ideas. Clean, fast, and always there when I need it.",
    },
    {
      name: "Marcus Johnson",
      role: "Software Engineer",
      avatar: "MJ",
      quote:
        "Finally, a notes app that doesn't get in my way. Simple yet powerful. I use it for everything from code snippets to meeting notes.",
    },
    {
      name: "Emily Rodriguez",
      role: "Content Writer",
      avatar: "ER",
      quote:
        "The cloud sync is seamless. I can start a draft on my phone and finish it on my laptop without missing a beat.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 -left-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 dark:from-blue-600/10 dark:to-purple-800/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-0 -right-20 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-600/20 dark:from-purple-600/10 dark:to-pink-800/10 rounded-full blur-3xl"
        />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-950/80 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                NoteNest
              </span>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <a
                href="#features"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#workflow"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                How It Works
              </a>
              <Button variant="ghost" className="dark:text-gray-300">
                <Link href="/login">Login</Link>
              </Button>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                <Link href="/register">Get Started</Link>
              </Button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-600 dark:text-gray-300"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-4 space-y-4"
          >
            <a
              href="#features"
              className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Features
            </a>
            <a
              href="#workflow"
              className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              How It Works
            </a>
            <Button variant="ghost" className="w-full dark:text-gray-300">
              <Link href="/login">Login</Link>
            </Button>
            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600">
              <Link href="/register">Get Started</Link>
            </Button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Organize Your Thoughts.
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Anytime, Anywhere.
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto"
            >
              A simple, secure, and fast way to take and sync your notes across
              all your devices.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-lg">
                <Link href="/register">Get Started Free</Link>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="px-8 py-6 text-lg dark:border-gray-700 dark:text-gray-300"
              >
                Watch Demo
              </Button>
            </motion.div>

            {/* Animated Demo Preview */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-20 relative"
            >
              <div className="relative max-w-5xl mx-auto">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>

                  <div className="space-y-4">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "60%" }}
                      transition={{ duration: 1, delay: 0.8 }}
                      className="h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"
                    />
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "80%" }}
                      transition={{ duration: 1, delay: 1.2 }}
                      className="h-6 bg-gray-300 dark:bg-gray-700 rounded-lg"
                    />
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "70%" }}
                      transition={{ duration: 1, delay: 1.4 }}
                      className="h-6 bg-gray-300 dark:bg-gray-700 rounded-lg"
                    />
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "90%" }}
                      transition={{ duration: 1, delay: 1.6 }}
                      className="h-6 bg-gray-300 dark:bg-gray-700 rounded-lg"
                    />
                  </div>
                </motion.div>

                {/* Floating Cards */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-8 top-10 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 border border-gray-200 dark:border-gray-700 hidden lg:block"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      Synced
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute -left-8 bottom-10 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 border border-gray-200 dark:border-gray-700 hidden lg:block"
                >
                  <div className="flex items-center gap-2">
                    <Lock className="w-5 h-5 text-blue-500" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      Encrypted
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Everything you need
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Simple, powerful, and designed for you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Fast & Simple",
                description:
                  "Lightning-fast performance with an intuitive interface. Start typing and watch your thoughts flow.",
                delay: 0,
              },
              {
                icon: Cloud,
                title: "Cloud Sync",
                description:
                  "Access your notes from anywhere, anytime. All your devices stay perfectly in sync.",
                delay: 0.2,
              },
              {
                icon: Lock,
                title: "Secure Storage",
                description:
                  "Bank-level encryption keeps your notes safe and private. Your thoughts belong to you.",
                delay: 0.4,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: feature.delay }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-800/50 backdrop-blur">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Animation Section */}
      <section id="workflow" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Get started in seconds
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Three simple steps to better note-taking
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                step: "01",
                title: "Sign Up",
                description:
                  "Create your free account in seconds. No credit card required.",
                delay: 0,
              },
              {
                step: "02",
                title: "Add Your First Note",
                description:
                  "Start writing immediately. Rich text, markdown, or plain text—your choice.",
                delay: 0.2,
              },
              {
                step: "03",
                title: "Access Anywhere",
                description:
                  "Your notes sync instantly across all your devices. Work from anywhere.",
                delay: 0.4,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: step.delay,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ y: -10 }}
                className="relative"
              >
                <Card className="h-full border-0 shadow-lg dark:bg-gray-800/50 backdrop-blur overflow-hidden">
                  <CardContent className="p-8">
                    <div className="text-6xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 opacity-20">
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                      <ArrowRight className="w-12 h-12 text-blue-500/30 dark:text-blue-400/30" />
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Loved by thousands
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              See what our users have to say
            </p>
          </motion.div>

          <div className="relative">
            <Card className="border-0 shadow-xl dark:bg-gray-800/50 backdrop-blur">
              <CardContent className="p-12">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                      {testimonials[currentTestimonial].avatar}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white text-lg">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        {testimonials[currentTestimonial].role}
                      </div>
                    </div>
                  </div>
                  <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed italic">
                    &quot;{testimonials[currentTestimonial].quote}&quot;
                  </p>
                </motion.div>

                <div className="flex justify-center items-center gap-4 mt-8">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                  </button>
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentTestimonial
                            ? "bg-gradient-to-r from-blue-500 to-purple-600 w-8"
                            : "bg-gray-300 dark:bg-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white overflow-hidden">
            <CardContent className="p-12 sm:p-16 text-center relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"
              />

              <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                  Ready to get organized?
                </h2>
                <p className="text-xl mb-8 text-blue-100">
                  Join thousands of users who trust NoteNest with their thoughts
                </p>
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
                  <Link href="/register">Start Free Today</Link>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                NoteNest
              </span>
            </div>

            <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
              <a
                href="#"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>

            <div className="text-sm text-gray-600 dark:text-gray-400">
              © 2025 NoteNest. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePageContent;
