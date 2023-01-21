export interface RowProps {
  userList: {
    id: string;
    name: string;
    email: string;
    isAdmin: boolean;
  };
  reload(): void;
  index: number;
}

export interface PayloadProps {
  name?: string;
  email?: string;
  isAdmin: boolean;
}
