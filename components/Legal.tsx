import React from 'react';

interface LegalProps {
  page: 'privacy' | 'terms';
}

const Legal: React.FC<LegalProps> = ({ page }) => {
  return (
    <div className="bg-[#050505] min-h-[60vh] pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {page === 'privacy' && (
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <div className="text-gray-400 leading-relaxed space-y-6 text-lg">
              <p>
                At Fuenzer Studio, we value your privacy. This Privacy Policy explains how we collect, use, and protect your information when you interact with our Roblox games and community.
              </p>
              <h3 className="text-xl font-bold text-white mt-8">Data Collection</h3>
              <p>
                We do not collect personal data outside of what is provided by the Roblox platform (such as your Username and User ID) for game functionality, statistics, and save data. All gameplay data is stored securely using Roblox DataStores.
              </p>
              <h3 className="text-xl font-bold text-white mt-8">Data Usage</h3>
              <p>
                We strictly adhere to Roblox's Community Standards and Terms of Use. We do not share your in-game data with third parties unless required by law. Your data is used solely to enhance your gameplay experience, track progress, and improve our services.
              </p>
              <h3 className="text-xl font-bold text-white mt-8">Contact Us</h3>
              <p>
                If you have any questions about our privacy practices, please contact us via our community server.
              </p>
            </div>
          </div>
        )}

        {page === 'terms' && (
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
              Terms of <span className="text-gradient">Service</span>
            </h1>
            <div className="text-gray-400 leading-relaxed space-y-6 text-lg">
              <p>
                By playing Fuenzer Studio games, you agree to comply with the Roblox Terms of Use and Community Standards.
              </p>
              <h3 className="text-xl font-bold text-white mt-8">Code of Conduct</h3>
              <p>
                Exploiting, cheating, or disrupting the experience for other players is strictly prohibited and may result in a permanent ban from our games. We reserve the right to manage access to our experiences to ensure a safe and enjoyable environment for everyone.
              </p>
              <h3 className="text-xl font-bold text-white mt-8">Virtual Items & Purchases</h3>
              <p>
                Purchases made within our games (Gamepasses, Developer Products) are final and non-refundable, subject to Roblox's refund policies. All virtual items remain the property of Roblox/Fuenzer Studio and have no real-world monetary value.
              </p>
              <h3 className="text-xl font-bold text-white mt-8">Updates</h3>
              <p>
                We reserve the right to update these terms at any time. Continued use of our services constitutes acceptance of the new terms.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Legal;