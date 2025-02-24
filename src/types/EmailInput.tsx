export interface EmailInputProps {
  label: string;
  placeholder: string;
  onAddRecipient: (email: string) => void;
  recipients: string[];
  onRemoveRecipient: (email: string) => void;
  isCcField?: boolean;
  className?: string; 
  inputClassName?: string;
  errorClassName?: string; 
  showLabel?: boolean;
}