import React, { useContext, useState } from 'react';
import { AppContext } from '../App';
import { Save } from 'lucide-react';
import { CellDesign } from '../types';

const DesignPage: React.FC = () => {
  const { state, dispatch, addToast, t } = useContext(AppContext);
  const isDarkMode = state.ui.theme === 'dark' || (state.ui.theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  // Deep copy to avoid reference issues during edit
  const [design, setDesign] = useState(JSON.parse(JSON.stringify(state.design)));

  const updateField = (type: 'lesson' | 'break', field: keyof CellDesign, value: any) => {
    setDesign((prev: any) => ({
        ...prev,
        [type]: { ...prev[type], [field]: value }
    }));
  };

  const handleSave = () => {
    dispatch({ type: 'UPDATE_DESIGN', payload: design });
    addToast('success', t('toast_settings_saved'));
  };

  const renderControls = (type: 'lesson' | 'break', label: string) => {
    // Adaptive background for preview if using default white
    let previewBg = design[type].backgroundColor;
    if (isDarkMode && (previewBg === '#ffffff' || previewBg === 'white' || previewBg.toLowerCase() === '#fff')) {
        previewBg = type === 'break' ? '#1e293b' : '#0f172a';
    }

    return (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 transition-colors">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4 pb-2 border-b border-slate-100 dark:border-slate-700">{label}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <div>
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-1">{t('design_bg_color')}</label>
                    <div className="flex gap-2">
                        <input type="color" className="w-10 h-10 rounded cursor-pointer dark:bg-slate-900 border-none" value={design[type].backgroundColor} onChange={(e) => updateField(type, 'backgroundColor', e.target.value)} />
                        <input type="text" className="flex-1 border dark:border-slate-600 rounded px-2 text-sm bg-white dark:bg-slate-900 dark:text-white" value={design[type].backgroundColor} onChange={(e) => updateField(type, 'backgroundColor', e.target.value)} />
                    </div>
                </div>

                <div>
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-1">{t('design_border_color')}</label>
                    <div className="flex gap-2">
                        <input type="color" className="w-10 h-10 rounded cursor-pointer dark:bg-slate-900 border-none" value={design[type].borderColor} onChange={(e) => updateField(type, 'borderColor', e.target.value)} />
                        <input type="text" className="flex-1 border dark:border-slate-600 rounded px-2 text-sm bg-white dark:bg-slate-900 dark:text-white" value={design[type].borderColor} onChange={(e) => updateField(type, 'borderColor', e.target.value)} />
                    </div>
                </div>

                <div>
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-1">{t('design_border_width')} ({design[type].borderWidth}px)</label>
                    <input type="range" min="0" max="5" className="w-full accent-primary-500" value={design[type].borderWidth} onChange={(e) => updateField(type, 'borderWidth', parseInt(e.target.value))} />
                </div>

                <div>
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-1">{t('design_border_radius')} ({design[type].borderRadius}px)</label>
                    <input type="range" min="0" max="20" className="w-full accent-primary-500" value={design[type].borderRadius} onChange={(e) => updateField(type, 'borderRadius', parseInt(e.target.value))} />
                </div>
                
                <div>
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-1">{t('design_margin')} ({design[type].margin}px)</label>
                    <input type="range" min="0" max="10" className="w-full accent-primary-500" value={design[type].margin} onChange={(e) => updateField(type, 'margin', parseInt(e.target.value))} />
                </div>

                {type === 'lesson' && (
                    <div>
                        <label className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-1">{t('design_font_size')} ({design[type].fontSize}px)</label>
                        <input type="range" min="10" max="20" className="w-full accent-primary-500" value={design[type].fontSize} onChange={(e) => updateField(type, 'fontSize', parseInt(e.target.value))} />
                    </div>
                )}

            </div>
            
            {/* Preview */}
            <div className="mt-6 p-4 bg-slate-100 dark:bg-slate-900/50 rounded-lg flex justify-center transition-colors">
                <div style={{
                    width: '140px', height: '80px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: previewBg,
                    borderColor: design[type].borderColor,
                    borderWidth: `${design[type].borderWidth}px`,
                    borderStyle: design[type].borderStyle,
                    borderRadius: `${design[type].borderRadius}px`,
                    margin: 0, // Margin handled by container in preview
                    fontSize: `${design[type].fontSize}px`,
                    boxShadow: design[type].shadow === 'none' ? 'none' : 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
                    color: isDarkMode && (previewBg === '#1e293b' || previewBg === '#0f172a') ? '#f1f5f9' : '#000'
                }}>
                    <span>{t('design_preview_text')}</span>
                </div>
            </div>
        </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto pb-20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">{t('design_title')}</h2>
        <button 
            onClick={handleSave}
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-xl flex items-center gap-2 shadow-lg transition-colors"
        >
            <Save size={20} />
            <span>{t('edit_modal_save')}</span>
        </button>
      </div>
      
      <div className="grid gap-6">
        {renderControls('lesson', t('design_lesson_style'))}
        {renderControls('break', t('design_break_style'))}
      </div>
    </div>
  );
};

export default DesignPage;
