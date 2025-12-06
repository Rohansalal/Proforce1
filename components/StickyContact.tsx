// 'use client';

// import { useState, FormEvent } from 'react';

// interface FormData {
//   name: string;
//   phone: string;
//   email: string;
//   message: string;
// }

// interface SocialLink {
//   href: string;
//   icon: string;
//   label: string;
//   color: string;
// }

// export default function StickyContact() {
//   const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     phone: '',
//     email: '',
//     message: ''
//   });

//   const contactButtons: SocialLink[] = [
//     {
//       href: '#contact-form',
//       icon: 'far fa-envelope',
//       label: 'Contact Us',
//       color: 'bg-red-700 hover:bg-red-800'
//     },
//     {
//       href: 'https://web.whatsapp.com/send?phone=+18007797691',
//       icon: 'fab fa-whatsapp',
//       label: 'WhatsApp',
//       color: 'bg-green-500 hover:bg-green-600'
//     },
//     {
//       href: 'tel:+18007797691',
//       icon: 'fas fa-phone',
//       label: 'Phone',
//       color: 'bg-black hover:bg-gray-800'
//     }
//   ];

//   const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log('Form submitted:', formData);
//     setIsFormOpen(false);
//     setFormData({ name: '', phone: '', email: '', message: '' });
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
//     const value = e.target.value.replace(/[^0-9+]/g, '');
//     setFormData(prev => ({
//       ...prev,
//       phone: value
//     }));
//   };

//   return (
//     <>
//       {/* Sticky Contact Sidebar */}
//       <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
//         <div className="flex flex-col space-y-2">
//           {contactButtons.map((button) => (
//             button.label === 'Contact Us' ? (
//               <button
//                 key={button.label}
//                 onClick={() => setIsFormOpen(!isFormOpen)}
//                 className={`text-white p-3 rounded-l-lg transition-colors ${button.color}`}
//               >
//                 <i className={`${button.icon} mr-2`}></i>
//                 {button.label}
//               </button>
//             ) : (
//               <a
//                 key={button.label}
//                 href={button.href}
//                 target={button.href.startsWith('http') ? '_blank' : undefined}
//                 rel={button.href.startsWith('http') ? 'noopener noreferrer' : undefined}
//                 className={`text-white p-3 rounded-l-lg transition-colors ${button.color}`}
//               >
//                 <i className={`${button.icon} mr-2`}></i>
//                 {button.label}
//               </a>
//             )
//           ))}
//         </div>

//         {/* Contact Form Modal */}
//         {isFormOpen && (
//           <div className="absolute right-full top-0 bg-white shadow-2xl rounded-lg w-80">
//             <div className="bg-white p-4 border-b">
//               <div className="flex justify-between items-center">
//                 <h3 className="text-lg font-semibold text-purple-700">Contact Form</h3>
//                 <button
//                   onClick={() => setIsFormOpen(false)}
//                   className="text-gray-500 hover:text-gray-700 transition-colors"
//                   aria-label="Close contact form"
//                 >
//                   <i className="fas fa-times"></i>
//                 </button>
//               </div>
//             </div>

//             <form onSubmit={handleSubmit} className="p-4 space-y-4">
//               <div>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Name"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition-colors"
//                 />
//               </div>

//               <div>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handlePhoneChange}
//                   placeholder="Phone*"
//                   required
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition-colors"
//                 />
//               </div>

//               <div>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Email*"
//                   required
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition-colors"
//                 />
//               </div>

//               <div>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Message"
//                   rows={3}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition-colors"
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-red-700 text-white py-2 px-4 rounded-md hover:bg-red-800 transition-colors"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

'use client';

import { useState } from 'react';

export default function StickyContact() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col space-y-2">
        {/* Contact Us Button */}
        <button
          onClick={() => setIsFormOpen(!isFormOpen)}
          className="bg-red-700 text-white p-3 rounded-l-lg hover:bg-red-800 transition-colors"
        >
          Contact Us
        </button>

        {/* WhatsApp */}
        <a
          href="https://web.whatsapp.com/send?phone=+18007797691"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-l-lg hover:bg-green-600 transition-colors text-center"
        >
          WhatsApp
        </a>

        {/* Phone */}
        <a
          href="tel:+18007797691"
          className="bg-black text-white p-3 rounded-l-lg hover:bg-gray-800 transition-colors text-center"
        >
          Phone
        </a>
      </div>

      {/* Contact Form Modal */}
      {isFormOpen && (
        <div className="absolute right-full top-0 bg-white shadow-2xl rounded-lg w-80">
          <div className="bg-white p-4 border-b">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-purple-700">Contact Form</h3>
              <button
                onClick={() => setIsFormOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                ×
              </button>
            </div>
          </div>

          <form className="p-4 space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div>
              <input
                type="tel"
                placeholder="Phone*"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email*"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div>
              <textarea
                placeholder="Message"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-700 text-white py-2 px-4 rounded-md hover:bg-red-800 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}