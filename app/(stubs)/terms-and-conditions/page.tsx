// 'use client';

// import { motion } from 'framer-motion';
// import { ShieldCheck, FileText } from 'lucide-react';
// import React from 'react';

// const TermsAndConditions: React.FC = () => {
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15 }
//     }
//   };

//   return (
//     <main className="min-h-screen bg-white font-sans selection:bg-red-500/30">
//       {/* Hero Section */}
//       <section className="relative py-24 md:py-32 bg-slate-900 text-white overflow-hidden">
//         <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
//         <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={staggerContainer}
//             className="max-w-3xl mx-auto"
//           >
//             <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-500/10 backdrop-blur-md border border-red-500/20 rounded-full text-red-400 text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-2xl">
//               <FileText className="w-3 h-3 fill-current" />
//               Legal Information
//             </motion.div>
//             <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-black mb-6 leading-tight drop-shadow-2xl">
//               Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Conditions</span>
//             </motion.h1>
//             <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
//               Please read these terms and conditions carefully before using our services.
//             </motion.p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Content Section */}
//       <section className="py-16 md:py-24 bg-gray-50">
//         <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             variants={staggerContainer}
//             className="space-y-12 text-slate-700 leading-relaxed text-lg"
//           >
//             <motion.div variants={fadeInUp}>
//               <p>Please read these terms & conditions carefully before using Our Service.</p>
//             </motion.div>

//             <motion.div variants={fadeInUp}>
//               <h2 className="text-3xl font-bold text-slate-900 mb-4">Interpretation and Definitions</h2>
//               <h3 className="text-2xl font-bold text-slate-800 mb-2">Interpretation</h3>
//               <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
//               <h3 className="text-2xl font-bold text-slate-800 mb-2 mt-4">Definitions</h3>
//               <p>For the purposes of these Terms and Conditions:</p>
//               <ul className="list-disc list-inside space-y-2 pl-4">
//                 <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where “control” means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
//                 <li><strong>Country</strong> refers to: California, United States</li>
//                 <li><strong>Company</strong> (referred to as either “the Company”, “We”, “Us” or “Our” in this Agreement) refers to PROFORCE1 PROTECTION SERVICES.</li>
//                 <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
//                 <li><strong>Service</strong> refers to the Website.</li>
//                 <li><strong>Terms and Conditions</strong> (also referred as “Terms”) mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the Free Terms and Conditions Generator.</li>
//                 <li><strong>Third-party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</li>
//                 <li><strong>Website</strong> refers to PROFORCE1 PROTECTION SERVICES, accessible from https://proforc1.com/</li>
//                 <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
//               </ul>
//             </motion.div>

//             <motion.div variants={fadeInUp}>
//               <h2 className="text-3xl font-bold text-slate-900 mb-4">Acknowledgment</h2>
//               <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
//               <p className="mt-4">Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
//               <p className="mt-4">By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
//               <p className="mt-4">You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>
//               <p className="mt-4">Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.</p>
//             </motion.div>

//             <motion.div variants={fadeInUp}>
//               <h2 className="text-3xl font-bold text-slate-900 mb-4">Links to Other Websites</h2>
//               <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.</p>
//               <p className="mt-4">The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
//               <p className="mt-4">We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.</p>
//             </motion.div>

//             <motion.div variants={fadeInUp}>
//               <h2 className="text-3xl font-bold text-slate-900 mb-4">Termination</h2>
//               <p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>
//               <p className="mt-4">Upon termination, Your right to use the Service will cease immediately.</p>
//             </motion.div>

//             <motion.div variants={fadeInUp}>
//               <h2 className="text-3xl font-bold text-slate-900 mb-4">Limitation of Liability</h2>
//               <p>Notwithstanding any damages that You might incur, the entire liability</p>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default TermsAndConditions;


'use client';

import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import React from 'react';

const TermsAndConditions: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 font-sans selection:bg-red-500/30">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-500/10 backdrop-blur-md border border-red-500/20 rounded-full text-red-400 text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-2xl">
              <FileText className="w-3 h-3 fill-current" />
              Legal Information
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-black mb-6 leading-tight drop-shadow-2xl">
              Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Conditions</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Please read these terms and conditions carefully before using our services.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-12 text-gray-700 leading-relaxed text-lg"
          >
            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-sm">
              <p>Please read these terms & conditions carefully before using Our Service.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Interpretation and Definitions</h2>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Interpretation</h3>
              <p className="mb-4">The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 mt-6">Definitions</h3>
              <p className="mb-4">For the purposes of these Terms and Conditions:</p>
              <ul className="list-disc list-inside space-y-3 pl-5 text-gray-600">
                <li><strong className="text-gray-800">Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
                <li><strong className="text-gray-800">Country</strong> refers to: California, United States</li>
                <li><strong className="text-gray-800">Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to PROFORCE1 PROTECTION SERVICES.</li>
                <li><strong className="text-gray-800">Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
                <li><strong className="text-gray-800">Service</strong> refers to the Website.</li>
                <li><strong className="text-gray-800">Terms and Conditions</strong> (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the Free Terms and Conditions Generator.</li>
                <li><strong className="text-gray-800">Third-party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</li>
                <li><strong className="text-gray-800">Website</strong> refers to PROFORCE1 PROTECTION SERVICES, accessible from https://proforc1.com/</li>
                <li><strong className="text-gray-800">You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Acknowledgment</h2>
              <div className="space-y-4 text-gray-600">
                <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
                <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
                <p>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
                <p>You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>
                <p>Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Links to Other Websites</h2>
              <div className="space-y-4 text-gray-600">
                <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.</p>
                <p>The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
                <p>We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Termination</h2>
              <div className="space-y-4 text-gray-600">
                <p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>
                <p>Upon termination, Your right to use the Service will cease immediately.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Limitation of Liability</h2>
              <div className="space-y-4 text-gray-600">
                <p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.</p>
                <p>To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.</p>
                <p>Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">"AS IS" and "AS AVAILABLE" Disclaimer</h2>
              <div className="space-y-4 text-gray-600">
                <p>The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.</p>
                <p>Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.</p>
                <p>Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Governing Law</h2>
              <p className="text-gray-600">The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Disputes Resolution</h2>
              <p className="text-gray-600">If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">For European Union (EU) Users</h2>
              <p className="text-gray-600">If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">United States Legal Compliance</h2>
              <p className="text-gray-600">You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Severability and Waiver</h2>
              <div className="space-y-4 text-gray-600">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Severability</h3>
                <p>If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.</p>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 mt-6">Waiver</h3>
                <p>Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not effect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Translation Interpretation</h2>
              <p className="text-gray-600">These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Changes to These Terms and Conditions</h2>
              <div className="space-y-4 text-gray-600">
                <p>We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.</p>
                <p>By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Contact Us</h2>
              <p className="text-gray-600 mb-4">If you have any questions about these Terms and Conditions, You can contact us:</p>
              <div className="mt-4 space-y-3 text-gray-600">
                <p className="flex items-center gap-2">
                  <span className="font-semibold text-gray-800">By email:</span> 
                  <a href="mailto:INFO@PROFORCE1PROTECTION.COM" className="text-red-600 hover:text-red-800 transition-colors">
                    INFO@PROFORCE1PROTECTION.COM
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold text-gray-800">By phone number:</span> 
                  <a href="tel:8007797691" className="text-red-600 hover:text-red-800 transition-colors">
                    (800) 779-7691
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default TermsAndConditions;