/// <reference types="vite/client" />
import { useState, FormEvent } from 'react';
import { useWaitlist } from '../context/WaitlistContext';

export default function WaitlistModal() {
  const { isModalOpen, closeModal, web3FormsAccessKey } = useWaitlist();
  const [modalStep, setModalStep] = useState(1);
  const [email, setEmail] = useState('');
  const [github, setGithub] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isModalOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (github && !github.includes('github.com/')) {
      setError('Please enter a valid GitHub profile link (e.g., github.com/handle).');
      return;
    }

    setIsSubmitting(true);

    try {
      // We use Web3Forms to send emails directly from a static site without a backend.
      const accessKey = web3FormsAccessKey.trim();
      
      if (!accessKey) {
        console.error("Web3Forms Access Key is missing. Set VITE_WEB3FORMS_ACCESS_KEY before building.");
        setError('Signup service is not configured yet. Please try again later.');
        return;
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "New Orion Waitlist Signup",
          from_name: "Orion Observatory",
          email: email,
          github: github || "Not provided",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setModalStep(2);
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to send request. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    closeModal();
    setTimeout(() => {
      setModalStep(1);
      setEmail('');
      setGithub('');
      setError('');
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-[#222] border border-white/5 rounded-2xl w-full max-w-md p-8 relative shadow-2xl">
        {modalStep === 1 ? (
          <>
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-white">Orion</h3>
              <button 
                onClick={handleClose}
                className="text-secondary hover:text-white transition-colors"
                disabled={isSubmitting}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tighter text-white mb-4">Join the Observatory.</h2>
              <p className="text-secondary text-sm leading-relaxed">
                Secure your place for early access to the next generation of precision development tools.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="font-label text-xs tracking-widest text-secondary uppercase">Email Address</label>
                  <span className="text-[10px] text-[#10B981] uppercase tracking-wider">* Required</span>
                </div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="commander@orion.tech"
                  className="w-full bg-[#111] border border-white/5 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="font-label text-xs tracking-widest text-secondary uppercase mb-2 block">Github Profile (Optional)</label>
                <input 
                  type="text" 
                  value={github}
                  onChange={(e) => setGithub(e.target.value)}
                  placeholder="github.com/handle"
                  className="w-full bg-[#111] border border-white/5 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors"
                  disabled={isSubmitting}
                />
              </div>

              {error && <p className="text-error text-sm">{error}</p>}

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#4EDEA3] text-[#003824] py-4 rounded-lg font-bold tracking-wide hover:shadow-[0_0_20px_rgba(78,222,163,0.3)] transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Signing Up...' : 'Sign Up'} 
                {!isSubmitting && <span className="material-symbols-outlined text-sm">arrow_forward</span>}
              </button>

              <p className="text-center text-xs font-label tracking-widest text-secondary uppercase mt-6">
                Join 100+ Developers
              </p>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center text-center py-4">
            <div className="w-full flex justify-start mb-8">
              <h3 className="text-xl font-bold text-white">Orion</h3>
            </div>
            <div className="w-16 h-16 bg-[#4EDEA3] rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(78,222,163,0.2)]">
              <span className="material-symbols-outlined text-[#003824] text-3xl">check</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-white mb-4">Thank you for Signing Up</h2>
            <p className="text-secondary mb-10">We will be in touch soon.</p>
            
            <button 
              onClick={handleClose}
              className="w-full bg-[#4EDEA3] text-[#003824] py-4 rounded-lg font-bold tracking-wide hover:shadow-[0_0_20px_rgba(78,222,163,0.3)] transition-all"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
