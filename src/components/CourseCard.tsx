import { Link } from 'react-router-dom';
import { Course } from '../types';
import { Clock, GraduationCap, CheckCircle2, Tag } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-premium hover:shadow-2xl transition-all duration-500 flex flex-col h-full group">
      <div className="flex justify-between items-start mb-6">
        <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-bold uppercase tracking-wider">
          {course.type}
        </span>
        <GraduationCap className="w-6 h-6 text-accent/40 group-hover:text-accent transition-colors" />
      </div>
      
      <h3 className="text-2xl font-bold mb-4 flex-grow text-primary">{course.title}</h3>

      {course.description && (
        <p className="text-sm text-primary/60 mb-6 line-clamp-3 font-light leading-relaxed italic">
          "{course.description}"
        </p>
      )}
      
      <div className="space-y-4 mb-8">
        {course.price && (
          <div className="flex items-center gap-3 text-accent font-bold">
            <Tag className="w-4 h-4" />
            <span className="text-lg">{course.price}</span>
            <span className="text-[10px] uppercase font-normal text-primary/40 tracking-widest">(Full Program Fee)</span>
          </div>
        )}
        <div className="flex items-center gap-3 text-primary/60">
          <Clock className="w-4 h-4 text-accent" />
          <span className="text-sm">{course.duration}</span>
        </div>
        <div className="flex items-center gap-3 text-primary/60">
          <CheckCircle2 className="w-4 h-4 text-accent" />
          <span className="text-sm">Eligibility: {course.eligibility}</span>
        </div>
        {course.accreditation && (
          <div className="flex items-center gap-3 text-primary/60">
            <CheckCircle2 className="w-4 h-4 text-accent" />
            <span className="text-sm">{course.accreditation}</span>
          </div>
        )}
      </div>
      
      <Link 
        to="/admission" 
        className="btn-premium bg-primary text-white hover:bg-accent text-sm uppercase tracking-widest font-bold shadow-lg"
      >
        Enquire Now
      </Link>
    </div>
  );
}
