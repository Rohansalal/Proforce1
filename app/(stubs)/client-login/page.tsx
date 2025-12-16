// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';
// import { 
//   ShieldCheck, 
//   Lock, 
//   User, 
//   Loader2, 
//   ArrowRight, 
//   Activity, 
//   MapPin, 
//   FileText 
// } from 'lucide-react';

// interface LoginFormData {
//   username: string;
//   password: string;
//   rememberMe: boolean;
// }

// const ClientLogin: React.FC = () => {
//   const [formData, setFormData] = useState<LoginFormData>({
//     username: '',
//     password: '',
//     rememberMe: false
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');
//   const router = useRouter();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//     if (error) setError('');
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');

//     try {
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 2000));
      
//       if (formData.username && formData.password) {
//         router.push('/client-dashboard');
//       } else {
//         setError('Invalid credentials provided.');
//       }
//     } catch (err) {
//       setError('Connection failed. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex bg-slate-950 font-sans selection:bg-red-500/30">
      
//       {/* =======================
//           LEFT SIDE: LOGIN FORM
//          ======================= */}
//       {/* NOTE: Added 'pt-32 lg:pt-0' to push content down on mobile/tablet 
//          so it sits lower than the website header.
//          On Desktop (lg), we use 'justify-center' to vertically center it.
//       */}
//       <div className="w-full lg:w-1/2 flex flex-col justify-start lg:justify-center items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-32 lg:pt-0">
        
//         {/* Background Technical Grid Pattern */}
//         <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        
//         {/* Main Content Container - Pushed down to avoid header overlap */}
//         <div className="w-full max-w-md space-y-8 relative z-10">
          
//           {/* Brand Header */}
//           <div className="text-center">
//             <div className="flex justify-center mb-8">
//                <div className="w-20 h-20 bg-gradient-to-br from-red-700 to-red-900 rounded-2xl flex items-center justify-center shadow-[0_0_40px_-10px_rgba(220,38,38,0.5)] border border-white/10 transform rotate-3 hover:rotate-0 transition-all duration-500">
//                  <ShieldCheck className="w-10 h-10 text-white" />
//                </div>
//             </div>
//             <h2 className="text-4xl font-black text-white tracking-tighter">
//               PROFORCE<span className="text-red-600">1</span> PORTAL
//             </h2>
//             <div className="h-1 w-20 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto my-4 rounded-full"></div>
//             <p className="text-slate-400 font-medium tracking-wide text-sm">
//               SECURE CLIENT ACCESS GATEWAY
//             </p>
//           </div>

//           {/* Form Container */}
//           <div className="bg-slate-900/60 backdrop-blur-xl py-10 px-6 shadow-2xl rounded-3xl border border-white/10 sm:px-12 relative overflow-hidden group">
            
//             {/* Subtle top shine effect */}
//             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-50"></div>

//             <form className="space-y-6" onSubmit={handleSubmit}>
              
//               {/* Error Message */}
//               {error && (
//                 <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
//                   <ShieldCheck className="w-5 h-5 text-red-500 flex-shrink-0" />
//                   <p className="text-sm font-medium text-red-400">{error}</p>
//                 </div>
//               )}

//               {/* Username Input */}
//               <div className="space-y-2">
//                 <label htmlFor="username" className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">
//                   Client ID
//                 </label>
//                 <div className="relative group/input">
//                   <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                     <User className="h-5 w-5 text-slate-500 group-focus-within/input:text-red-500 transition-colors duration-300" />
//                   </div>
//                   <input
//                     id="username"
//                     name="username"
//                     type="text"
//                     required
//                     className="block w-full pl-12 pr-4 py-3.5 bg-slate-950/50 border border-slate-700 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-300"
//                     placeholder="Enter your Client ID"
//                     value={formData.username}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>

//               {/* Password Input */}
//               <div className="space-y-2">
//                 <label htmlFor="password" className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">
//                   Password
//                 </label>
//                 <div className="relative group/input">
//                   <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                     <Lock className="h-5 w-5 text-slate-500 group-focus-within/input:text-red-500 transition-colors duration-300" />
//                   </div>
//                   <input
//                     id="password"
//                     name="password"
//                     type="password"
//                     required
//                     className="block w-full pl-12 pr-4 py-3.5 bg-slate-950/50 border border-slate-700 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-300"
//                     placeholder="••••••••••••"
//                     value={formData.password}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>

//               {/* Remember Me & Forgot PW */}
//               <div className="flex items-center justify-between pt-2">
//                 <div className="flex items-center">
//                   <input
//                     id="remember-me"
//                     name="rememberMe"
//                     type="checkbox"
//                     checked={formData.rememberMe}
//                     onChange={handleChange}
//                     className="h-4 w-4 rounded border-slate-700 bg-slate-800 text-red-600 focus:ring-offset-slate-900 focus:ring-red-500 cursor-pointer"
//                   />
//                   <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-400 cursor-pointer hover:text-slate-300 transition-colors">
//                     Remember me
//                   </label>
//                 </div>

//                 <div className="text-sm">
//                   <a href="#" className="font-semibold text-red-500 hover:text-red-400 transition-colors hover:underline decoration-red-500/30 underline-offset-4">
//                     Forgot password?
//                   </a>
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="w-full group relative flex justify-center py-4 px-4 border border-transparent text-sm font-bold uppercase tracking-wider rounded-xl text-white bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 focus:ring-offset-slate-900 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 shadow-[0_0_20px_-5px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_-5px_rgba(220,38,38,0.5)] transform hover:-translate-y-0.5"
//               >
//                 {isLoading ? (
//                   <span className="flex items-center gap-2">
//                     <Loader2 className="w-5 h-5 animate-spin" /> Authenticating...
//                   </span>
//                 ) : (
//                   <span className="flex items-center gap-2">
//                     Access Secure Dashboard <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                   </span>
//                 )}
//               </button>
//             </form>

//             {/* Footer */}
//             <div className="mt-8 pt-6 border-t border-white/5 text-center">
//               <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 font-medium uppercase tracking-widest">
//                 <Lock className="w-3 h-3" />
//                 <span>End-to-End Encrypted Session</span>
//               </div>
//             </div>
//           </div>
          
//           <div className="text-center text-xs text-slate-600">
//              &copy; {new Date().getFullYear()} ProForce1 Protection Services.
//           </div>
//         </div>
//       </div>

//       {/* ===============================
//           RIGHT SIDE: FEATURE SHOWCASE
//          =============================== */}
//       <div className="hidden lg:flex w-1/2 relative bg-slate-900 border-l border-white/5">
//         {/* Background Image */}
//         <div className="absolute inset-0 z-0">
//           <Image 
//             src="/gallery/command-center-1.jpg" // Ensure this path matches your public folder
//             alt="Security Operations Center"
//             fill
//             className="object-cover opacity-20"
//             priority
//           />
//           <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/80 to-red-950/30" />
//         </div>

//         {/* Content Overlay */}
//         <div className="relative z-10 w-full flex flex-col justify-center px-16 xl:px-24">
//           <div className="mb-12">
//             <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
//               </span>
//               System Online
//             </div>
//             <h2 className="text-5xl font-black text-white mb-6 leading-tight">
//               Real-Time<br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">
//                 Security Intelligence
//               </span>
//             </h2>
//             <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
//               Monitor your assets, track officer patrols, and access detailed incident reports directly from our centralized command dashboard.
//             </p>
//           </div>

//           {/* Feature Grid */}
//           <div className="space-y-4 max-w-md">
//             {[
//               { 
//                 icon: Activity, 
//                 title: "Live Activity Feed", 
//                 desc: "Real-time updates on checkpoints and patrols." 
//               },
//               { 
//                 icon: FileText, 
//                 title: "Digital Reporting", 
//                 desc: "Instant access to Daily Activity Reports (DARs)." 
//               },
//               { 
//                 icon: MapPin, 
//                 title: "GPS Verification", 
//                 desc: "Geofenced tracking for total accountability." 
//               }
//             ].map((feature, idx) => (
//               <div 
//                 key={idx}
//                 className="group flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-red-500/30 transition-all duration-300 cursor-default"
//               >
//                 <div className="p-3.5 rounded-xl bg-slate-950 text-red-500 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-lg">
//                   <feature.icon className="w-6 h-6" />
//                 </div>
//                 <div>
//                   <h3 className="text-white font-bold text-lg mb-0.5">{feature.title}</h3>
//                   <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">{feature.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default ClientLogin;


'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Lock, 
  User, 
  Loader2, 
  ArrowRight, 
  Activity, 
  MapPin, 
  FileText 
} from 'lucide-react';

interface LoginFormData {
  UserName: string;
  Password: string;
  rememberMe: boolean;
}

const ClientLogin: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    UserName: '',
    Password: '',
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

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
      // Create a hidden form to submit to the external site
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://prod.silvertracker.net/Subscriber/Login.aspx';
      form.style.display = 'none';
      form.target = '_self'; // Opens in same tab

      // Add username field
      const usernameInput = document.createElement('input');
      usernameInput.type = 'text';
      usernameInput.name = 'UserName';
      usernameInput.value = formData.UserName;
      form.appendChild(usernameInput);

      // Add password field
      const passwordInput = document.createElement('input');
      passwordInput.type = 'password';
      passwordInput.name = 'Password';
      passwordInput.value = formData.Password;
      form.appendChild(passwordInput);

      // Add any additional hidden fields that might be required
      // You might need to inspect the actual form on the target site
      const hiddenInput = document.createElement('input');
      hiddenInput.type = 'hidden';
      hiddenInput.name = '__LASTFOCUS';
      hiddenInput.value = '';
      form.appendChild(hiddenInput);

      const viewStateInput = document.createElement('input');
      viewStateInput.type = 'hidden';
      viewStateInput.name = '__VIEWSTATE';
      viewStateInput.value = '/wEPDwUKMTY1NDU2MTA1MmRk';
      form.appendChild(viewStateInput);

      const eventValidationInput = document.createElement('input');
      eventValidationInput.type = 'hidden';
      eventValidationInput.name = '__EVENTVALIDATION';
      eventValidationInput.value = '/wEWAwKkt6XwCgLE46q9BgKZg8nEBgKM54rGBr2O2o7lQ/JPWWtxGrnXqgGk';
      form.appendChild(eventValidationInput);

      const eventTargetInput = document.createElement('input');
      eventTargetInput.type = 'hidden';
      eventTargetInput.name = '__EVENTTARGET';
      eventTargetInput.value = '';
      form.appendChild(eventTargetInput);

      const eventArgumentInput = document.createElement('input');
      eventArgumentInput.type = 'hidden';
      eventArgumentInput.name = '__EVENTARGUMENT';
      eventArgumentInput.value = '';
      form.appendChild(eventArgumentInput);

      // Add the form to the document and submit it
      document.body.appendChild(form);
      form.submit();

      // Remove the form after submission
      document.body.removeChild(form);

    } catch (err) {
      setError('Failed to submit form. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-slate-950 font-sans selection:bg-red-500/30">
      
      {/* LEFT SIDE: LOGIN FORM */}
      <div className="w-full lg:w-1/2 flex flex-col justify-start lg:justify-center items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-32 lg:pt-0">
        
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        
        <div className="w-full max-w-md space-y-8 relative z-10">
          
          <div className="text-center">
            <div className="flex justify-center mb-8">
               <div className="w-20 h-20 bg-gradient-to-br from-red-700 to-red-900 rounded-2xl flex items-center justify-center shadow-[0_0_40px_-10px_rgba(220,38,38,0.5)] border border-white/10 transform rotate-3 hover:rotate-0 transition-all duration-500">
                 <ShieldCheck className="w-10 h-10 text-white" />
               </div>
            </div>
            <h2 className="text-4xl font-black text-white tracking-tighter">
              PROFORCE<span className="text-red-600">1</span> PORTAL
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto my-4 rounded-full"></div>
            <p className="text-slate-400 font-medium tracking-wide text-sm">
              SECURE CLIENT ACCESS GATEWAY
            </p>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-xl py-10 px-6 shadow-2xl rounded-3xl border border-white/10 sm:px-12 relative overflow-hidden group">
            
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-50"></div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                  <ShieldCheck className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <p className="text-sm font-medium text-red-400">{error}</p>
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="UserName" className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">
                  Client ID
                </label>
                <div className="relative group/input">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-slate-500 group-focus-within/input:text-red-500 transition-colors duration-300" />
                  </div>
                  <input
                    id="UserName"
                    name="UserName"
                    type="text"
                    required
                    className="block w-full pl-12 pr-4 py-3.5 bg-slate-950/50 border border-slate-700 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-300"
                    placeholder="Enter your Client ID"
                    value={formData.UserName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="Password" className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">
                  Password
                </label>
                <div className="relative group/input">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-500 group-focus-within/input:text-red-500 transition-colors duration-300" />
                  </div>
                  <input
                    id="Password"
                    name="Password"
                    type="password"
                    required
                    className="block w-full pl-12 pr-4 py-3.5 bg-slate-950/50 border border-slate-700 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-300"
                    placeholder="••••••••••••"
                    value={formData.Password}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="rememberMe"
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-slate-700 bg-slate-800 text-red-600 focus:ring-offset-slate-900 focus:ring-red-500 cursor-pointer"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-400 cursor-pointer hover:text-slate-300 transition-colors">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-semibold text-red-500 hover:text-red-400 transition-colors hover:underline decoration-red-500/30 underline-offset-4">
                    Forgot password?
                  </a>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full group relative flex justify-center py-4 px-4 border border-transparent text-sm font-bold uppercase tracking-wider rounded-xl text-white bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 focus:ring-offset-slate-900 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 shadow-[0_0_20px_-5px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_-5px_rgba(220,38,38,0.5)] transform hover:-translate-y-0.5"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" /> Redirecting...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Access SilverTracker <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-white/5 text-center">
              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 font-medium uppercase tracking-widest">
                <Lock className="w-3 h-3" />
                <span>Connecting to SilverTracker Portal</span>
              </div>
            </div>
          </div>
          
          <div className="text-center text-xs text-slate-600">
             &copy; {new Date().getFullYear()} ProForce1 Protection Services.
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: FEATURE SHOWCASE */}
      <div className="hidden lg:flex w-1/2 relative bg-slate-900 border-l border-white/5">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/gallery/command-center-1.jpg"
            alt="Security Operations Center"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/80 to-red-950/30" />
        </div>

        <div className="relative z-10 w-full flex flex-col justify-center px-16 xl:px-24">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Connecting to SilverTracker
            </div>
            <h2 className="text-5xl font-black text-white mb-6 leading-tight">
              Direct Integration<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">
                SilverTracker System
              </span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              Your credentials will be securely transferred to the SilverTracker portal for real-time monitoring and reporting access.
            </p>
          </div>

          <div className="space-y-4 max-w-md">
            {[
              { 
                icon: Activity, 
                title: "Live Tracking", 
                desc: "Real-time GPS tracking of security personnel." 
              },
              { 
                icon: FileText, 
                title: "Automated Reports", 
                desc: "Detailed activity and incident reports." 
              },
              { 
                icon: MapPin, 
                title: "Geo-fencing", 
                desc: "Custom zone alerts and boundary monitoring." 
              }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="group flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-red-500/30 transition-all duration-300 cursor-default"
              >
                <div className="p-3.5 rounded-xl bg-slate-950 text-red-500 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-lg">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-0.5">{feature.title}</h3>
                  <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">{feature.desc}</p>
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