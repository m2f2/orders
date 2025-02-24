export interface EmailRecipientsProps {
            toRecipients: string[];
            addToRecipient: (email: string) => void;
            removeToRecipient: (email: string) => void;
            ccRecipients: string[];
            addCcRecipient: (email: string) => void;
            removeCcRecipient: (email: string) => void;
            isCcVisible: boolean;
            toggleCcVisibility: () => void;
};