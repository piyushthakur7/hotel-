import React, { useState } from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { COURSES } from '../constants';
import { ChevronDown, ChevronUp, Monitor, BookOpen, Users, Headphones, GraduationCap, Library, Award, ShieldCheck, Calendar, DollarSign } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('ug');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const ugCourses = COURSES.filter(c => c.type === 'Online Degree');
  const diplomaCourses = COURSES.filter(c => c.type === 'Diploma');
  const degreeCourses = COURSES.filter(c => c.type === 'Degree');
  const certificateCourses = COURSES.filter(c => c.type === 'Certificate');

  const tabData: Record<string, typeof COURSES> = {
    ug: ugCourses,
    pg: degreeCourses,
    diploma: diplomaCourses,
    certificate: certificateCourses,
  };

  const advantages = [
    { title: "Recorded & Live Lectures", desc: "Learn through comprehensive recorded and live lecture sessions.", icon: <Monitor className="w-6 h-6" />, color: "bg-[#2563EB]" },
    { title: "Various Specializations", desc: "Choose from a wide range of specializations in hospitality.", icon: <BookOpen className="w-6 h-6" />, color: "bg-[#E8A723]" },
    { title: "Placement Assistance", desc: "Get dedicated placement support from our corporate resource centre.", icon: <Users className="w-6 h-6" />, color: "bg-[#2563EB]" },
    { title: "24/7 Student Support", desc: "Round-the-clock assistance for all your academic needs.", icon: <Headphones className="w-6 h-6" />, color: "bg-[#E8A723]" },
    { title: "Career-Focused Curriculum", desc: "Industry-aligned programs designed for professional growth.", icon: <GraduationCap className="w-6 h-6" />, color: "bg-[#E8A723]" },
    { title: "Digital Library Resources", desc: "Access thousands of e-books, journals, and study materials.", icon: <Library className="w-6 h-6" />, color: "bg-[#2563EB]" },
    { title: "100% Online Degree", desc: "Complete your entire degree online from anywhere.", icon: <Award className="w-6 h-6" />, color: "bg-[#E8A723]" },
    { title: "Accreditation & Recognition", desc: "UGC approved and NAAC A+ accredited programs.", icon: <ShieldCheck className="w-6 h-6" />, color: "bg-[#2563EB]" },
  ];

  const faqs = [
    { q: "Is FIHM Online Approved by UGC?", a: "Yes, FIHM Online programs are offered through a UGC-DEB approved university, ensuring full recognition for all online degree programmes." },
    { q: "Are Online Degrees from FIHM Valid for Government and Private Jobs?", a: "Absolutely, online degree programmes offered through FIHM Online are accepted widely by government and private organizations for job opportunities." },
    { q: "What are the Online programs offered by FIHM Online?", a: "FIHM Online offers both undergraduate and diploma courses. Our programs include BA, BBA, BCA, Hotel Management diplomas, Culinary Arts, F&B Service, and more." },
    { q: "How can I apply for Admission to FIHM Online?", a: "For applying to FIHM Online programmes, you may visit our Admission page or contact our admissions helpline at +91 9358-333-333." },
    { q: "What is the Fee Structure for Online Degree and Diploma Programs?", a: "All fee structures for different online courses, whether diploma, undergraduate, or certificate programs, are available on our Courses page." },
    { q: "What are the Eligibility Criteria for FIHM Online Courses?", a: "Eligibility varies by program. Undergraduate programs require 10+2, while diploma programs may accept 10th pass candidates. Check individual course pages for details." },
    { q: "How are Online Classes Conducted at FIHM Online?", a: "Online classes are conducted through our Learning Management System (LMS) featuring both recorded and live lectures.The curriculum and assessment techniques meet the same standards as on-campus programs." },
    { q: "Does FIHM Provide Placement Assistance after Online Courses?", a: "Yes, FIHM provides dedicated placement assistance through our Corporate Resource Centre after completion of online programmes." },
    { q: "What are the Benefits of Pursuing an Online Degree from FIHM?", a: "An online degree from FIHM offers flexible timing, cost-effectiveness, industry recognition, and curriculum that is at par with hospitality industry standards." },
    { q: "Is an Online Degree from FIHM Equivalent to a Regular Degree?", a: "Yes, an online degree from FIHM through our UGC approved university partner is equivalent to regular degree programmes." },
  ];

  const accreditations = [
    { name: "UGC Entitled", full: "University Grants Commission of India" },
    { name: "NAAC A+ Graded", full: "National Assessment And Accreditation Council" },
    { name: "AICTE Accredited", full: "All India Council for Technical Education" },
    { name: "Member of AIU", full: "Association of Indian Universities" },
  ];

  const recruiters = [
    "Taj Hotels", "Marriott", "Hilton", "Hyatt", "ITC Hotels",
    "The Oberoi Group", "Radisson", "Accor Hotels", "Lemon Tree Hotels", "The Leela"
  ];

  const currentCourses = tabData[activeTab] || [];

  return (
    <div className="bg-white pt-0">
      <Hero />

      {/* About Section + Admission Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1B3A5C] mb-6 leading-tight">
                FIHM Online - Leading the Way in Online Courses in India
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-4 text-[15px] text-justify">
                <p>
                  FIHM Online offers a unique opportunity for students who want to study at their own pace and in their own space. It is the ultimate gateway to a world-class education system, offering a wide range of online programs, undergraduate, and diploma courses in various fields, including Hotel Management, Culinary Arts, Food & Beverage Service, Business Studies, and more. As one of the <strong>best online colleges</strong> and <strong>online universities</strong> in India, FIHM Online provides quality <strong>online college courses</strong> that match students' self-interest and career goals. <strong>Online Programs in India</strong> from FIHM give you an immense opportunity to explore the courses offered and then decide on online courses in India to pursue that align with your goals.
                </p>
                <p>
                  In today's digital learning environment, students and working professionals can have a flexible learning experience with <strong>online courses in India</strong>, interactive learning platforms, discussion groups, and support services. Our esteemed faculty members are vested with the responsibility of providing the best teaching and learning experiences. <strong>Online schools</strong> and learning platforms typically provide tools for assessment, including quizzes, exams, and assignments. This global accessibility opens up opportunities for international collaboration and diverse perspectives.
                </p>
                <p>
                  At FIHM, we offer quality education that has the capacity to transform one's life and professional path. The education is imparted here to all those who wish to learn at affordable prices and at a convenient time and place. The teaching and learning experience at FIHM's <strong>online programs</strong> not only sharpens your analytical and critical thinking skills but also prepares you for the professional world.
                </p>
              </div>
            </div>

            {/* Right Admission Form */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 sticky top-28">
                <h3 className="text-xl font-bold text-center text-[#1B3A5C] mb-6 font-serif">
                  Admissions For Online Programs
                </h3>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Enter Full Name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#E8A723] focus:border-[#E8A723] outline-none transition"
                  />
                  <div className="flex gap-2">
                    <div className="flex items-center gap-1 px-3 py-3 border border-gray-300 rounded-lg text-sm bg-white min-w-[80px]">
                      <span>🇮🇳</span>
                      <span className="text-gray-600 text-xs">+91</span>
                    </div>
                    <input 
                      type="tel" 
                      placeholder="Enter Phone" 
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#E8A723] focus:border-[#E8A723] outline-none transition"
                    />
                  </div>
                  <input 
                    type="email" 
                    placeholder="Enter Email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#E8A723] focus:border-[#E8A723] outline-none transition"
                  />
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-500 focus:ring-2 focus:ring-[#E8A723] focus:border-[#E8A723] outline-none transition appearance-none bg-white bg-[url('data:image/svg+xml;charset=US-ASCII,<svg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2020%2020%22><path%20fill%3D%22%23999%22%20d%3D%22M7%207l3%203%203-3%22/></svg>')] bg-no-repeat bg-[right_12px_center] bg-[length:16px]">
                    <option>Select State</option>
                    <option>Delhi</option>
                    <option>Maharashtra</option>
                    <option>Karnataka</option>
                    <option>Uttar Pradesh</option>
                    <option>Tamil Nadu</option>
                  </select>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-500 focus:ring-2 focus:ring-[#E8A723] focus:border-[#E8A723] outline-none transition appearance-none bg-white bg-[url('data:image/svg+xml;charset=US-ASCII,<svg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2020%2020%22><path%20fill%3D%22%23999%22%20d%3D%22M7%207l3%203%203-3%22/></svg>')] bg-no-repeat bg-[right_12px_center] bg-[length:16px]">
                    <option>Select Level</option>
                    <option>UG Programs</option>
                    <option>Diploma</option>
                    <option>Certificate</option>
                  </select>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-500 focus:ring-2 focus:ring-[#E8A723] focus:border-[#E8A723] outline-none transition appearance-none bg-white bg-[url('data:image/svg+xml;charset=US-ASCII,<svg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2020%2020%22><path%20fill%3D%22%23999%22%20d%3D%22M7%207l3%203%203-3%22/></svg>')] bg-no-repeat bg-[right_12px_center] bg-[length:16px]">
                    <option>Select Program</option>
                    {COURSES.map(c => (
                      <option key={c.id}>{c.title}</option>
                    ))}
                  </select>

                  <div className="flex items-start gap-2 text-xs text-[#E8A723]">
                    <input type="checkbox" className="mt-1 accent-[#E8A723]" />
                    <span>I agree to receive information regarding my submitted application by signing up on FIHM Online.*</span>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button type="button" className="flex-1 py-3 border border-gray-300 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-50 transition uppercase tracking-wider">
                      Existing User? Login
                    </button>
                    <button type="submit" className="flex-1 py-3 bg-[#1B3A5C] text-white rounded-lg text-xs font-bold hover:bg-[#0A2240] transition uppercase tracking-wider">
                      Register Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {accreditations.map((acc, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#E8A723]/20 to-[#E8A723]/5 border-2 border-[#E8A723]/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="w-10 h-10 text-[#E8A723]" />
                </div>
                <h4 className="text-sm md:text-base font-bold text-[#1B3A5C] mb-1">{acc.name}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{acc.full}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section with Tabs */}
      <section className="py-16 bg-[#0A192F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#E8A723] text-center mb-10">
            List of Top Online Programmes Offered by FIHM Online
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { key: 'ug', label: 'UG Programmes' },
              { key: 'pg', label: 'PG Programmes' },
              { key: 'diploma', label: 'Diploma' },
              { key: 'certificate', label: 'Certificate' },
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 rounded-lg text-sm font-bold border-2 transition-all duration-300 ${
                  activeTab === tab.key
                    ? 'bg-[#E8A723] border-[#E8A723] text-white shadow-lg'
                    : 'bg-white/10 border-white/20 text-white hover:border-[#E8A723]/50 hover:text-[#E8A723]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Course Cards */}
          <div className="bg-gray-100 rounded-2xl p-6 md:p-10">
            {currentCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentCourses.map((course) => (
                  <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    {/* Course Title Header */}
                    <div className="bg-gray-200 px-5 py-4">
                      <h3 className="font-bold text-[#1B3A5C] text-center text-sm md:text-base">{course.title}</h3>
                    </div>
                    {/* Course Info */}
                    <div className="px-5 py-4">
                      <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-[#E8A723]" />
                          {course.duration}
                        </span>
                        {course.price && (
                          <span className="flex items-center gap-1.5">
                            <DollarSign className="w-4 h-4 text-[#E8A723]" />
                            {course.price}
                          </span>
                        )}
                      </div>
                      <div className="flex justify-between">
                        <Link to="/courses" className="text-[#E8A723] text-sm font-semibold hover:underline">
                          Know More
                        </Link>
                        <Link to="/admission" className="text-[#E8A723] text-sm font-semibold hover:underline">
                          Apply Now
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <p className="text-lg">No courses available in this category yet.</p>
                <p className="text-sm mt-2">Please check other categories or contact us for more information.</p>
              </div>
            )}

            {currentCourses.length > 0 && (
              <div className="text-center mt-8">
                <Link to="/courses" className="inline-block px-8 py-3 bg-[#2563EB] text-white rounded-lg font-bold text-sm hover:bg-[#1D4FBF] transition-colors shadow-md">
                  View More Courses
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gradient-to-b from-[#F0F4FF] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1B3A5C] italic mb-3">
              Advantage of FIHM Online
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              Discover Our Exceptional And Singular Qualities That Make Us Unique
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {advantages.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 border border-gray-100">
                <div className={`w-14 h-14 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  {item.icon}
                </div>
                <h4 className="text-sm font-bold text-[#1B3A5C] mb-2 leading-tight">{item.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed hidden md:block">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1B3A5C] text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-0 border-t border-gray-200">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200">
                <button
                  className="w-full flex items-center justify-between py-5 text-left group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className={`font-semibold text-sm md:text-base pr-4 transition-colors ${openFaq === i ? 'text-[#E8A723]' : 'text-[#1B3A5C] group-hover:text-[#E8A723]'}`}>
                    {faq.q}
                  </span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-[#E8A723] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="pb-5 pr-8 text-gray-600 text-sm leading-relaxed animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Recruiters Section */}
      <section className="py-16 bg-gradient-to-r from-[#E8A723] to-[#D4941F] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white text-center">
            Our Top Recruiters
          </h2>
          <p className="text-white/80 text-center mt-3 text-sm md:text-base">
            Placement is the biggest strength of FIHM. A unique Corporate Resource Centre to facilitate excellent placements.
          </p>
        </div>
        <div className="flex gap-12 items-center px-4 animate-marquee whitespace-nowrap opacity-90 hover:opacity-100 transition-opacity">
          {[...Array(3)].map((_, idx) => (
            <React.Fragment key={idx}>
              {recruiters.map((name, i) => (
                <div key={`${idx}-${i}`} className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-xl px-8 py-4 min-w-[180px]">
                  <span className="text-white font-bold text-lg whitespace-nowrap">{name}</span>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A192F] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#E8A723] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Admissions 2026-27</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
            Ready to <span className="text-[#E8A723] italic">Transform</span> your Career?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/admission" className="px-8 py-4 bg-[#E8A723] text-white rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-[#D4941F] transition-all shadow-lg hover:shadow-xl w-full sm:w-auto">
              Apply Online Now
            </Link>
            <a href="tel:+919358333333" className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-[#0A192F] transition-all w-full sm:w-auto">
              Call Us: +91 9358-333-333
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
