
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsAndConditionsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Terms and Conditions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-gray-500">Last updated: December 10, 2025</p>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">1. Introduction</h2>
            <p>
              Welcome to Proforce1 Security (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;)! These Terms and Conditions (&quot;Terms&quot;) govern your use of our website located at [Your Website URL] (the &quot;Service&quot;) and any related services provided by Proforce1 Security.
            </p>
            <p>
              By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">2. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property of Proforce1 Security and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Proforce1 Security.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">3. Links To Other Web Sites</h2>
            <p>
              Our Service may contain links to third-party web sites or services that are not owned or controlled by Proforce1 Security.
            </p>
            <p>
              Proforce1 Security has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that Proforce1 Security shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">4. Termination</h2>
            <p>
              We may terminate or suspend your access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p>
              All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">5. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">6. Changes</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">7. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
