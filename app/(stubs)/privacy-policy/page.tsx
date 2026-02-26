'use client';

import { Lock } from 'lucide-react';
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: '6rem 1rem',
        backgroundColor: '#0f172a',
        color: 'white',
        overflow: 'hidden',
        textAlign: 'center'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          opacity: 0.1,
          backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem',
          position: 'relative',
          zIndex: 10
        }}>
          <div style={{ maxWidth: '768px', margin: '0 auto' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.375rem 1rem',
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              borderRadius: '9999px',
              color: '#f87171',
              fontSize: '0.75rem',
              fontWeight: 'bold',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}>
              <Lock style={{ width: '12px', height: '12px' }} />
              Your Privacy Matters
            </div>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: 900,
              marginBottom: '1.5rem',
              lineHeight: 1.25,
              textShadow: '0 20px 25px rgba(0, 0, 0, 0.25)'
            }}>
              Privacy <span style={{
                color: 'transparent',
                backgroundImage: 'linear-gradient(to right, #ef4444, #f87171)',
                backgroundClip: 'text'
              }}>Policy</span>
            </h1>
            <p style={{
              fontSize: '1.125rem',
              color: '#cbd5e1',
              maxWidth: '672px',
              margin: '0 auto',
              lineHeight: 1.75
            }}>
              Understanding how we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section style={{
        padding: '4rem 1rem',
        backgroundColor: '#f9fafb'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <div style={{
            maxWidth: '896px',
            margin: '0 auto'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '3rem'
            }}>
              {/* Introduction */}
              <div style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '0.5rem',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
              }}>
                <p style={{
                  color: '#374151',
                  lineHeight: 1.75,
                  fontSize: '1.125rem'
                }}>
                  This Proforce1 Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                </p>
                <p style={{
                  color: '#374151',
                  lineHeight: 1.75,
                  fontSize: '1.125rem',
                  marginTop: '1rem'
                }}>
                  We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the Free Privacy Policy Generator.
                </p>
              </div>

              {/* Interpretation and Definitions */}
              <div style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '0.5rem',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
              }}>
                <h2 style={{
                  fontSize: '1.875rem',
                  fontWeight: 'bold',
                  color: '#1e293b',
                  marginBottom: '1.5rem'
                }}>Interpretation and Definitions</h2>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#1e293b',
                    marginBottom: '0.75rem'
                  }}>Interpretation</h3>
                  <p style={{ color: '#374151', lineHeight: 1.75 }}>
                    The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                  </p>
                </div>

                <div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#1e293b',
                    marginBottom: '0.75rem'
                  }}>Definitions</h3>
                  <p style={{ color: '#374151', marginBottom: '1rem' }}>
                    For the purposes of this Privacy Policy:
                  </p>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#374151' }}>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to PROFORCE1 PROTECHTION SERVICES.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Country</strong> refers to: California, United States</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Service</strong> refers to the Website.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Website</strong> refers to PROFORCE1 PROTECHTION SERVICES, accessible from https://proforce1protection.com//</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                  </ul>
                </div>
              </div>

              {/* Collecting and Using Your Personal Data */}
              <div style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '0.5rem',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
              }}>
                <h2 style={{
                  fontSize: '1.875rem',
                  fontWeight: 'bold',
                  color: '#1e293b',
                  marginBottom: '1.5rem'
                }}>Collecting and Using Your Personal Data</h2>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#1e293b',
                    marginBottom: '1rem'
                  }}>Types of Data Collected</h3>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      color: '#334155',
                      marginBottom: '0.75rem'
                    }}>Personal Data</h4>
                    <p style={{ color: '#374151', lineHeight: 1.75 }}>
                      While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                    </p>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      color: '#334155',
                      marginBottom: '0.75rem'
                    }}>Usage Data</h4>
                    <p style={{ color: '#374151', lineHeight: 1.75 }}>
                      Usage Data is collected automatically when using the Service.
                    </p>
                    <p style={{ color: '#374151', lineHeight: 1.75, marginTop: '0.75rem' }}>
                      Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                    </p>
                    <p style={{ color: '#374151', lineHeight: 1.75, marginTop: '0.75rem' }}>
                      When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
                    </p>
                    <p style={{ color: '#374151', lineHeight: 1.75, marginTop: '0.75rem' }}>
                      We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
                    </p>
                  </div>

                  <div>
                    <h4 style={{
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      color: '#334155',
                      marginBottom: '0.75rem'
                    }}>Tracking Technologies and Cookies</h4>
                    <p style={{ color: '#374151', lineHeight: 1.75 }}>
                      We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:
                    </p>

                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '0.75rem', color: '#374151' }}>
                      <li style={{ marginBottom: '0.5rem' }}><strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.</li>
                      <li style={{ marginBottom: '0.5rem' }}><strong>Web Beacons.</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).</li>
                    </ul>

                    <p style={{ color: '#374151', lineHeight: 1.75, marginTop: '1rem' }}>
                      Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. Learn more about cookies on the Free Privacy Policy website article.
                    </p>

                    <p style={{ color: '#374151', lineHeight: 1.75, marginTop: '1rem' }}>
                      We use both Session and Persistent Cookies for the purposes set out below:
                    </p>

                    <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div style={{
                        backgroundColor: '#f9fafb',
                        padding: '1rem',
                        borderRadius: '0.5rem',
                        border: '1px solid #e5e7eb'
                      }}>
                        <h5 style={{
                          fontWeight: 'bold',
                          color: '#1e293b',
                          fontSize: '1.125rem',
                          marginBottom: '0.5rem'
                        }}>Necessary / Essential Cookies</h5>
                        <p><strong>Type:</strong> Session Cookies</p>
                        <p><strong>Administered by:</strong> Us</p>
                        <p><strong>Purpose:</strong> These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</p>
                      </div>

                      <div style={{
                        backgroundColor: '#f9fafb',
                        padding: '1rem',
                        borderRadius: '0.5rem',
                        border: '1px solid #e5e7eb'
                      }}>
                        <h5 style={{
                          fontWeight: 'bold',
                          color: '#1e293b',
                          fontSize: '1.125rem',
                          marginBottom: '0.5rem'
                        }}>Cookies Policy / Notice Acceptance Cookies</h5>
                        <p><strong>Type:</strong> Persistent Cookies</p>
                        <p><strong>Administered by:</strong> Us</p>
                        <p><strong>Purpose:</strong> These Cookies identify if users have accepted the use of cookies on the Website.</p>
                      </div>

                      <div style={{
                        backgroundColor: '#f9fafb',
                        padding: '1rem',
                        borderRadius: '0.5rem',
                        border: '1px solid #e5e7eb'
                      }}>
                        <h5 style={{
                          fontWeight: 'bold',
                          color: '#1e293b',
                          fontSize: '1.125rem',
                          marginBottom: '0.5rem'
                        }}>Functionality Cookies</h5>
                        <p><strong>Type:</strong> Persistent Cookies</p>
                        <p><strong>Administered by:</strong> Us</p>
                        <p><strong>Purpose:</strong> These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</p>
                      </div>
                    </div>

                    <p style={{ color: '#374151', lineHeight: 1.75, marginTop: '1.5rem' }}>
                      For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.
                    </p>
                  </div>
                </div>

                <div style={{ marginTop: '2rem' }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#1e293b',
                    marginBottom: '1rem'
                  }}>Use of Your Personal Data</h3>
                  <p style={{ color: '#374151', lineHeight: 1.75 }}>
                    The Company may use Personal Data for the following purposes:
                  </p>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '0.75rem', color: '#374151' }}>
                    <li style={{ marginBottom: '0.5rem' }}><strong>To provide and maintain our Service,</strong> including to monitor the usage of our Service.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>To provide You with news, special offers and general information</strong> about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>To manage Your requests:</strong> To attend and manage Your requests to Us.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>For business transfers:</strong> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>For other purposes:</strong> We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</li>
                  </ul>

                  <p style={{ color: '#374151', lineHeight: 1.75, marginTop: '1.5rem' }}>
                    We may share Your personal information in the following situations:
                  </p>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '0.75rem', color: '#374151' }}>
                    <li style={{ marginBottom: '0.5rem' }}><strong>With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>For business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>With business partners:</strong> We may share Your information with Our business partners to offer You certain products, services or promotions.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>With Your consent:</strong> We may disclose Your personal information for any other purpose with Your consent.</li>
                  </ul>
                </div>
              </div>

              {/* Contact Us Section */}
              <div style={{
                background: 'linear-gradient(135deg, #fef2f2 0%, white 100%)',
                padding: '2rem',
                borderRadius: '0.75rem',
                border: '1px solid #fecaca',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}>
                <h2 style={{
                  fontSize: '1.875rem',
                  fontWeight: 'bold',
                  color: '#1e293b',
                  marginBottom: '1.5rem'
                }}>Contact Us</h2>
                <p style={{
                  color: '#374151',
                  marginBottom: '1.5rem',
                  fontSize: '1.125rem'
                }}>
                  If you have any questions about this Privacy Policy, You can contact us:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{
                      backgroundColor: '#fee2e2',
                      color: '#dc2626',
                      padding: '0.5rem',
                      borderRadius: '0.375rem',
                      marginRight: '0.75rem'
                    }}>
                      📧
                    </span>
                    <div>
                      <p style={{ fontWeight: 500, color: '#1e293b' }}>By email:</p>
                      <p style={{ color: '#dc2626', fontWeight: 600 }}>INFO@PROFORCE1PROTECTION.COM</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{
                      backgroundColor: '#fee2e2',
                      color: '#dc2626',
                      padding: '0.5rem',
                      borderRadius: '0.375rem',
                      marginRight: '0.75rem'
                    }}>
                      📞
                    </span>
                    <div>
                      <p style={{ fontWeight: 500, color: '#1e293b' }}>By phone number:</p>
                      <p style={{ color: '#dc2626', fontWeight: 600 }}>(800) 779-7691</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;