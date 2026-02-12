import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Info, AlertTriangle, X } from 'lucide-react';
import { ToastMessage } from '../types';

interface ToastProps {
  toasts: ToastMessage[];
  removeToast: (id: string) => void;
}

const icons = {
  success: <CheckCircle className="text-green-500" size={20} />,
  error: <AlertCircle className="text-red-500" size={20} />,
  warning: <AlertTriangle className="text-amber-500" size={20} />,
  info: <Info className="text-blue-500" size={20} />,
};

const Toast: React.FC<ToastProps> = ({ toasts, removeToast }) => {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            layout
            className="pointer-events-auto bg-white shadow-lg rounded-lg p-4 flex items-start gap-3 border border-gray-100 min-w-[300px] max-w-md"
          >
            <div className="flex-shrink-0 mt-0.5">{icons[toast.type]}</div>
            <div className="flex-1 pt-0.5">
              <p className="text-sm font-medium text-gray-800 leading-5">{toast.message}</p>
            </div>
            <button 
              onClick={() => removeToast(toast.id)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={16} />
            </button>
            <TimeoutHandler id={toast.id} remove={removeToast} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

const TimeoutHandler = ({ id, remove }: { id: string, remove: (id: string) => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => remove(id), 4000);
    return () => clearTimeout(timer);
  }, [id, remove]);
  return null;
};

export default Toast;