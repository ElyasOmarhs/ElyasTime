import React, { useContext } from 'react';
import { AppContext } from '../App';
import { Mail, MessageCircle, Send, MapPin, ExternalLink, Code2, GraduationCap } from 'lucide-react';

const AboutPage: React.FC = () => {
  const { t } = useContext(AppContext);
  const socialLinks = [
    { 
      label: 'Email', 
      value: 'ElyasOmar100@gmail.com', 
      icon: <Mail size={18} />, 
      link: 'mailto:ElyasOmar100@gmail.com',
      color: 'bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400'
    },
    { 
      label: 'WhatsApp', 
      value: '+93782965085', 
      icon: <MessageCircle size={18} />, 
      link: 'https://wa.me/93782965085',
      color: 'bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400'
    },
    { 
      label: 'Telegram', 
      value: '@G_Zwan', 
      icon: <Send size={18} />, 
      link: 'https://t.me/G_Zwan',
      color: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
    },
  ];

  return (
    <div className="max-w-5xl mx-auto pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-slate-800 rounded-[3rem] p-10 shadow-xl border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center sticky top-6">
             <div className="relative mb-8">
                <div className="w-32 h-32 rounded-[2rem] bg-gradient-to-tr from-primary-600 to-indigo-400 flex items-center justify-center text-white text-5xl font-black shadow-2xl">
                    EO
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-emerald-500 border-4 border-white dark:border-slate-800 rounded-full flex items-center justify-center text-white shadow-lg">
                    <Code2 size={20} />
                </div>
             </div>
             
             <h2 className="text-2xl font-black text-slate-800 dark:text-white mb-1">الیاس عمر</h2>
             <p className="text-primary-600 dark:text-primary-400 font-bold mb-8">Software Developer</p>
             
             <div className="w-full space-y-2">
                {socialLinks.map((item, idx) => (
                  <a key={idx} href={item.link} target="_blank" rel="noreferrer" className={`flex items-center gap-4 p-3 rounded-2xl border border-transparent hover:scale-105 transition-all group ${item.color}`}>
                    <div className="shrink-0">{item.icon}</div>
                    <div className="flex-1 text-right overflow-hidden">
                       <div className="text-[10px] opacity-70 font-black uppercase tracking-tighter">{item.label}</div>
                       <div className="text-xs font-black truncate">{item.value}</div>
                    </div>
                  </a>
                ))}
             </div>
          </div>
        </div>

        {/* Biography and Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-10 shadow-sm border border-slate-100 dark:border-slate-700">
             <h3 className="text-xl font-black text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-primary-500 rounded-full"></div>
                {t('about_intro_title')}
             </h3>
             <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg mb-8 font-medium italic">
                {t('about_intro_text')}
             </p>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-8 bg-slate-50 dark:bg-slate-900/50 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-inner transition-colors">
                   <div className="text-primary-500 mb-4 bg-white dark:bg-slate-800 w-12 h-12 rounded-2xl flex items-center justify-center shadow-md"><GraduationCap size={28} /></div>
                   <h4 className="font-black text-slate-800 dark:text-white mb-2">{t('about_edu_title')}</h4>
                   <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-bold">
                      {t('about_edu_text')}
                   </p>
                </div>
                <div className="p-8 bg-slate-50 dark:bg-slate-900/50 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-inner transition-colors">
                   <div className="text-primary-500 mb-4 bg-white dark:bg-slate-800 w-12 h-12 rounded-2xl flex items-center justify-center shadow-md"><Code2 size={28} /></div>
                   <h4 className="font-black text-slate-800 dark:text-white mb-2">{t('about_skills_title')}</h4>
                   <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-bold">
                      {t('about_skills_text')}
                   </p>
                </div>
             </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-10 shadow-sm border border-slate-100 dark:border-slate-700">
             <h3 className="text-xl font-black text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-emerald-500 rounded-full"></div>
                {t('about_location_title')}
             </h3>
             <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 space-y-6">
                   <div className="flex items-start gap-4">
                      <div className="bg-red-50 dark:bg-red-900/30 p-3 rounded-2xl"><MapPin className="text-red-500 shrink-0" size={24} /></div>
                      <div>
                         <div className="font-black text-slate-800 dark:text-white text-lg">لوګر، افغانستان</div>
                         <div className="text-sm text-slate-500 dark:text-slate-400 font-bold">{t('about_location_text')}</div>
                      </div>
                   </div>
                   <a 
                      href="https://maps.app.goo.gl/q8tLSaKW6hFEe6QV9" 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-[1.5rem] font-black hover:scale-105 transition-all shadow-xl shadow-slate-900/20 dark:shadow-none"
                   >
                      <MapPin size={20} />
                      <span>{t('about_map_btn')}</span>
                      <ExternalLink size={14} className="opacity-50" />
                   </a>
                </div>
                <div className="w-full md:w-72 h-48 bg-slate-100 dark:bg-slate-900 rounded-[2.5rem] border-4 border-white dark:border-slate-700 overflow-hidden relative shadow-2xl group transition-all">
                   <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:scale-125 transition-transform duration-1000">
                      <MapPin size={80} className="text-slate-400" />
                   </div>
                   <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-transparent"></div>
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white animate-bounce shadow-xl border-4 border-white dark:border-slate-800">
                        <MapPin size={24} />
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>

      </div>
      
      <div className="mt-12 text-center text-slate-400 dark:text-slate-600 text-xs font-black uppercase tracking-widest">
         © {new Date().getFullYear()} ELYAS OMAR STUDIO
      </div>
    </div>
  );
};

export default AboutPage;