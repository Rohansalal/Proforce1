// components/AboutUs.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  delay: number;
}

const AboutUs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // FIX 1: Separate effect for mounting to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // FIX 2: Only observe after mount
  useEffect(() => {
    if (!mounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [mounted]);

  const services = [
    {
      icon: <ShieldIcon />,
      title: "Guarding Services",
      description: "Professional security personnel trained to protect people, property, and assets in various environments."
    },
    {
      icon: <SearchIcon />,
      title: "Investigation Services",
      description: "Thorough investigative solutions to uncover facts, prevent losses, and resolve security concerns."
    },
    {
      icon: <BuildingIcon />,
      title: "Facility Services",
      description: "Comprehensive security management for commercial, industrial, and institutional facilities."
    },
    {
      icon: <HeadsetIcon />,
      title: "Consultancy Services",
      description: "Expert security assessments and recommendations to enhance your overall protection strategy."
    }
  ];

  const values = [
    {
      icon: <TargetIcon />,
      title: "Our Mission",
      description: "To offer the best security solutions that protect complex and technological environments. Our services are available for businesses, property owners, employees, and individuals seeking premium protection."
    },
    {
      icon: <EyeIcon />,
      title: "Our Vision",
      description: "To be the leading security provider known for innovation, reliability, and exceptional service. We aim to continuously improve security measures for our clients in an ever-evolving threat landscape."
    },
    {
      icon: <HeartIcon />,
      title: "Our Values",
      description: "Integrity, professionalism, and commitment form the core of our operations. Our security experts work diligently to prevent incidents and protect our clients' interests with the highest ethical standards."
    }
  ];

  const testimonials = [
    {
      name: "Robert",
      role: "Event Security Client",
      content: "We hired the ProForce1 Protection Services team for our large corporate event. They provided reliable event security personnel and equipment. Their professional approach ensured our event ran smoothly without any security concerns."
    },
    {
      name: "Alex Yelin",
      role: "Commercial Client",
      content: "I have always found the ProForce1 protection services team very helpful with any security needs. They provide consistent, high-quality security personnel. No matter what we request, even with minimal notice, they always deliver excellent service."
    }
  ];

  // FIX 3: Only render animated content after mount to ensure client/server match
  if (!mounted) {
    return <div ref={sectionRef} className="min-h-screen bg-gray-50" />;
  }

  return (
    <div ref={sectionRef} className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-900 to-orange-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.1)_0%,transparent_55%)]"></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              About <span className="text-orange-300">ProForce1</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-orange-100 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Advanced Security Solutions for Modern Challenges
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <button className="bg-white text-orange-700 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                Our Services
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-all duration-300 transform hover:-translate-y-1">
                Get a Quote
              </button>
            </motion.div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative group">
                <div className="rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
                  <Image
                    src="/ProforceLogo.png"
                    alt="ProForce1 Security Team"
                    width={600}
                    height={400}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-600 to-orange-400 rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500 -z-10"></div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                Professional Protection <span className="text-orange-600">You Can Trust</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At ProForce1 Protection Services, we advance the quality of our resources to provide exclusive security solutions for the ever-changing needs of our clients.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With extensive industry experience, we bring the best security solutions to day-to-day operations. Our security services are widely utilized for various purposes, and our guards undergo comprehensive training to cover all security-related matters.
              </p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-r from-orange-50 to-indigo-50 p-6 rounded-xl border-l-4 border-orange-600 shadow-sm"
              >
                <p className="text-gray-700 font-medium">
                  We offer outstanding guarding services that eliminate complications, with a highly experienced team dedicated to protecting governmental, institutional, residential, commercial, and industrial assets.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-orange-600">Security Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive protection solutions tailored to your specific security needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-orange-600">Foundation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built on a strong foundation of integrity, expertise, and commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ValueCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                delay={index * 0.1}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-tr from-orange-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Why Choose <span className="text-orange-600">ProForce1</span>
              </h2>
              
              <div className="space-y-6">
                {[
                  "Highly Trained Personnel with rigorous training for diverse security scenarios",
                  "Extensive Experience with many years in the field bringing valuable expertise",
                  "Comprehensive Solutions offering a wide range of services for all security needs",
                  "Rapid Response delivering prompt security solutions with minimal notice"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start group"
                  >
                    <div className="flex-shrink-0 mt-1 transform group-hover:scale-110 transition-transform duration-300">
                      <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-300">
                        <CheckIcon />
                      </div>
                    </div>
                    <p className="ml-4 text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="w-full lg:w-1/2"
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 transform hover:-translate-y-2 transition-all duration-500">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Request a Security Consultation</h3>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Client <span className="text-orange-600">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from organizations and individuals who trust ProForce1 with their security needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                delay={index * 0.1}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Sub-components
const ServiceCard: React.FC<ServiceCardProps & { isVisible: boolean }> = ({ icon, title, description, delay, isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="bg-white p-6 rounded-xl border border-gray-200 transition-all duration-500 hover:border-orange-300 service-card transform hover:-translate-y-2">
        <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-500">
          <div className="text-orange-600 text-2xl group-hover:scale-110 transition-transform duration-500">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>
        <button className="text-orange-600 font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300">
          Learn more
          <ArrowRightIcon />
        </button>
      </div>
    </motion.div>
  );
};

const ValueCard: React.FC<ValueCardProps & { isVisible: boolean }> = ({ icon, title, description, delay, isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2">
        <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-500">
          <div className="text-orange-600 text-3xl group-hover:scale-110 transition-transform duration-500">
            {icon}
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center group-hover:text-orange-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 text-center leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const TestimonialCard: React.FC<TestimonialProps & { isVisible: boolean }> = ({ name, role, content, delay, isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="bg-gradient-to-br from-gray-50 to-orange-50 p-6 rounded-xl border border-gray-200 shadow-sm transition-all duration-500 hover:shadow-md transform hover:-translate-y-1">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mr-4 group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-500">
            <UserIcon />
          </div>
          <div>
            <h3 className="font-bold text-gray-800">{name}</h3>
            <p className="text-gray-600 text-sm">{role}</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">
          {content}
        </p>
      </div>
    </motion.div>
  );
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700 mb-2 font-medium" htmlFor="name">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2 font-medium" htmlFor="email">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2 font-medium" htmlFor="service">
          Service Interest
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
        >
          <option value="">Select a service</option>
          <option value="guarding">Guarding Services</option>
          <option value="investigation">Investigation Services</option>
          <option value="facility">Facility Services</option>
          <option value="consultancy">Consultancy Services</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-700 mb-2 font-medium" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-orange-800 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
      >
        Request Consultation
      </button>
    </form>
  );
};

// Icons
const ShieldIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const BuildingIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const HeadsetIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const TargetIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const EyeIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-3 h-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

export default AboutUs;