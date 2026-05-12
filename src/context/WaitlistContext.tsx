import { createContext, useContext, useState, ReactNode } from 'react';

interface WaitlistContextType {
  isModalOpen: boolean;
  web3FormsAccessKey: string;
  openModal: () => void;
  closeModal: () => void;
}

const WaitlistContext = createContext<WaitlistContextType | undefined>(undefined);

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? '';

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <WaitlistContext.Provider value={{ isModalOpen, web3FormsAccessKey, openModal, closeModal }}>
      {children}
    </WaitlistContext.Provider>
  );
}

export function useWaitlist() {
  const context = useContext(WaitlistContext);
  if (context === undefined) {
    throw new Error('useWaitlist must be used within a WaitlistProvider');
  }
  return context;
}
