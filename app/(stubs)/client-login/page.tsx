'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Lock, 
  User, 
  Loader2, 
  ArrowRight, 
  Activity, 
  MapPin, 
  FileText, 
  CheckCircle2 
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoginFormData {
  username: string;
  password: string;
  rememberMe: boolean;
}

const ClientLogin: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: '',
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      if (formData.username && formData.password) {
        router.push('/client-dashboard');
      } else {
        setError('Invalid credentials provided.');
      }
    } catch (err) {
      setError('Connection failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-slate-950 font-sans selection:bg-red-500/30">
      
      {/* =======================
          LEFT SIDE: LOGIN FORM
         ======================= */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        
        {/* Background Technical Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="w-full max-w-md space-y-8 relative z-10">
          
          {/* Brand Header */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
               <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center shadow-2xl shadow-red-900/20 border border-white/10">
                 <ShieldCheck className="w-8 h-8 text-white" />
               </div>
            </div>
            <h2 className="text-3xl font-black text-white tracking-tight">
              PROFORCE<span className="text-red-600">1</span> PORTAL
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Authorized personnel and client access only.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-slate-900/50 backdrop-blur-md py-8 px-4 shadow-2xl rounded-2xl border border-white/5 sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              
              {/* Error Message */}
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 flex items-start gap-3">
                  <div className="p-0.5"><ShieldCheck className="w-4 h-4 text-red-500" /></div>
                  <p className="text-sm text-red-400">{error}</p>
                </div>
              )}

              {/* Username Input */}
              <div>
                <label htmlFor="username" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Client ID / Email
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-slate-500 group-focus-within:text-red-500 transition-colors" />
                  </div>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="block w-full pl-10 pr-3 py-3 bg-slate-950 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-300"
                    placeholder="Enter your ID"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-500 group-focus-within:text-red-500 transition-colors" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="block w-full pl-10 pr-3 py-3 bg-slate-950 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-300"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Remember Me & Forgot PW */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="rememberMe"
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-slate-700 bg-slate-800 rounded cursor-pointer"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-400 cursor-pointer select-none">
                    Remember device
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-red-500 hover:text-red-400 transition-colors">
                    Reset credentials?
                  </a>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative w-full flex justify-center py-3.5 px-4 border border-transparent text-sm font-bold uppercase tracking-wider rounded-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 focus:ring-offset-slate-900 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-red-900/20"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" /> Verifying...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Access Dashboard <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </button>
              </div>
            </form>

            {/* Security Badge Footer */}
            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500 border-t border-white/5 pt-6">
              <Lock className="w-3 h-3" />
              <span>256-Bit SSL Encrypted Connection</span>
            </div>
          </div>
          
          <div className="text-center text-xs text-slate-600">
             &copy; {new Date().getFullYear()} ProForce1 Protection Services. All rights reserved.
          </div>
        </div>
      </div>

      {/* ===============================
          RIGHT SIDE: FEATURE SHOWCASE
         =============================== */}
      <div className="hidden lg:flex w-1/2 relative bg-slate-900">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
            alt="Security Operations Center"
            fill
            className="object-cover opacity-30 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full flex flex-col justify-center px-16">
          <div className="mb-10">
            <div className="inline-block px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-xs font-bold uppercase tracking-widest mb-4">
              System Operational
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Real-Time Security Intelligence</h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
              Monitor your assets, track officer patrols, and access detailed incident reports from our centralized command dashboard.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 gap-6 max-w-md">
            {[
              { 
                icon: Activity, 
                title: "Live Activity Feed", 
                desc: "Real-time updates on checkpoints and patrols." 
              },
              { 
                icon: FileText, 
                title: "Digital Reporting", 
                desc: "Instant access to DARs and incident logs." 
              },
              { 
                icon: MapPin, 
                title: "GPS Verification", 
                desc: "Geofenced tracking for total accountability." 
              }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-red-500/30 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-slate-800 text-red-500 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1">{feature.title}</h3>
                  <p className="text-slate-400 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ClientLogin;