export type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export interface ContactData {
  name: string;
  email: string;
  message: string;
}

export interface ContactState {
  status: FormStatus;
  message: string;
  errors?: {
    [K in keyof ContactData]?: string[];
  };
}
