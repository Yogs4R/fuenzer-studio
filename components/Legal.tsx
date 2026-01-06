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
            <p className="text-gray-400 mb-8">
              Last updated: January 6, 2026.
            </p>
            <div className="text-gray-400 leading-relaxed space-y-6 text-lg">
              <p>
                Thank you for playing Fuenzer Studio's games on the Roblox platform. This policy explains how we manage your data while you're in our games.
              </p>
              <h3 className="text-xl font-bold text-white mt-8">Data Collection</h3>
              <p>
                We do not collect personal data outside of what is provided by the Roblox platform (such as your Username and User ID) for game functionality, statistics, and save data. All gameplay data is stored securely using Roblox DataStores.
                Because we operate on the Roblox platform, most of your data is managed directly by Roblox Corporation. However, Fuenzer Studio may collect and store specific gameplay-related data (through the Roblox DataStore feature), such as:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Game Statistics:</strong> Level, XP, in-game currency, and inventory.</li>
                <li><strong>Preferences:</strong> Sound or graphics settings you saved in the game.</li>
                <li><strong>Activity Log:</strong> Technical data if you report a bug or glitch.</li>
              </ul>
              <h3 className="text-xl font-bold text-white mt-8">Data Usage</h3>
              <p>
                We strictly adhere to Roblox's Community Standards and Terms of Use. We do not share your in-game data with third parties unless required by law. 
                Your data is used solely to enhance your gameplay experience, track progress, and improve our services.
                The gameplay data we store is used to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Ensures your game progress (Save Data) is not lost when you log back in.</li>
                <li>Analyze which features are most popular for the development of the next update.</li>
              </ul>
              <h3 className="text-xl font-bold text-white mt-8">What We Do NOT Collect</h3>
              <p>
                We never have access to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Your Roblox account password.</li>
                <li>Payment information (Credit/Debit Card).</li>
                <li>Your real name or physical address</li>
                <li>Any data not explicitly provided by you within the game.</li>
              </ul>
              <h3 className="text-xl font-bold text-white mt-8">Safety & Children (COPPA)</h3>
              <p>
                We adhere to Roblox's security standards. We do not knowingly collect personal data from minors beyond what is permitted by Roblox's filtering and security systems. 
                Account security is entirely dependent on the Roblox platform's security systems.
              </p>
              <h3 className="text-xl font-bold text-white mt-8">Contact Us</h3>
              <p>
                If you have any questions about our privacy practices, please contact us via our community server or email us at <span className="font-semibold">dedekculesrbx@gmail.com</span>.
              </p>
            </div>
          </div>
        )}

        {page === 'terms' && (
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
              Terms of <span className="text-gradient">Service</span>
            </h1>
            <p className="text-gray-400 mb-8">
              Last updated: January 6, 2026.
            </p>
            <div className="text-gray-400 leading-relaxed space-y-6 text-lg">
              <p>
                By playing Fuenzer Studio games, you agree to comply with the Roblox Terms of Use and Community Standards.
              </p>
              <h3 className="text-xl font-bold text-white mt-8">Code of Conduct</h3>
              <p>
                Exploiting, cheating, or disrupting the experience for other players is strictly prohibited and may result in a permanent ban from our games. 
                We reserve the right to manage access to our experiences to ensure a safe and enjoyable environment for everyone.
                For the comfort of all players, you are strictly prohibited from:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Exploitation/Hacking:</strong> Using third-party scripts, injectors, or bug abuse to gain an unfair advantage.</li>
                <li><strong>Scamming:</strong> Deceiving other players in the trading system (if applicable).</li>
                <li><strong>Toxic Behaviour:</strong> Hate speech or harassment in game chat. Violation of this point may result in a permanent ban from all Fuenzer Studio games.</li>
              </ul>
              <h3 className="text-xl font-bold text-white mt-8">Microtransactions</h3>
              <p>
                Purchases made within our games (Gamepasses, Developer Products) are final and non-refundable, subject to Roblox's refund policies. All virtual items remain the property of Roblox/Fuenzer Studio and have no real-world monetary value.
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Robux:</strong> All purchases of Game Pass, Developer Products, or cosmetic items using Robux are processed solely by Roblox.</li>
                <li><strong>No Refunds:</strong> Per Roblox policy, Fuenzer Studio cannot manually process refunds. All purchases are final. Please ensure you read the item description before purchasing. But if you believe there has been an error, please contact Roblox support.</li>
                <li><strong>Licenses:</strong> When you purchase an in-game item, you are purchasing a limited license to use that virtual item in our game, not full ownership of the digital asset.</li>
              </ul>
              <h3 className="text-xl font-bold text-white mt-8">Intellectual Property Rights</h3>
              <p>
                All unique assets created by the Fuenzer Studio team (including custom meshes, scripts, map architecture, and UI designs) are our copyright. You are prohibited from stealing or copying our game assets for use in your own games without permission.
                But if we use standard Roblox assets (free models, decals, etc.), those assets remain the property of their respective creators.
              </p>
              <h3 className="text-xl font-bold text-white mt-8">Updates</h3>
              <p>
                We reserve the right to update these terms at any time. Continued use of our services constitutes acceptance of the new terms.
              </p>
              <h3 className="text-xl font-bold text-white mt-8">Disclaimers</h3>
              <p>
                Our games are provided "as is." We reserve the right to change, balance (nerf/buff), or remove any in-game features/items at any time for game balance reasons without compensation.
              </p>
              <h3 className="text-xl font-bold text-white mt-8">Contact Us</h3>
              <p>
                If you have any questions about these Terms of Service, please contact us via our community server or email us at <span className="font-semibold">dedekculesrbx@gmail.com</span>.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Legal;