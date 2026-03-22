import React, { useState } from 'react';
import { COURSES } from '../constants';
import CourseCard from '../components/CourseCard';
import { Search, Filter, Award, ShieldCheck } from 'lucide-react';

export default function Courses() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const categories = ['All', 'Online Degree', 'Degree', 'Diploma', 'Certificate'];

  const filteredCourses = COURSES.filter(course => {
    const matchesFilter = filter === 'All' || course.type === filter;
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 bg-secondary/30 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-6">Explore Our Programs</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Find the perfect course to kickstart your career in the global hospitality industry.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="flex gap-2 p-1 bg-white rounded-full border border-gray-200 w-full md:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat ? 'bg-primary text-white shadow-lg' : 'text-gray-500 hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search courses..." 
              className="w-full pl-12 pr-6 py-3 bg-white rounded-full border border-gray-200 focus:ring-2 focus:ring-primary/20 transition-all"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Results Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-[3rem] border border-gray-100">
            <Filter className="w-16 h-16 text-gray-300 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-400">No courses found matching your criteria</h3>
            <button 
              onClick={() => { setFilter('All'); setSearch(''); }}
              className="mt-6 text-primary font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Accreditation Banner */}
        <div className="mt-24 bg-white p-12 rounded-[3rem] border border-gray-100 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4">Globally Recognized Certification</h3>
            <p className="text-gray-600">
              Our programs are accredited by leading international hospitality bodies, ensuring your degree is valued across the world. We offer dual certification options for selected programs.
            </p>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">UGC Approved</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">OTHM, UK</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">ISO Certified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
