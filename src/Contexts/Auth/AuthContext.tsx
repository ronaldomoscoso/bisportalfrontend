import { createContext } from  'react';
import { User } from '../../Classes/User';

export type AuthContextType = {
    user: User | null;
    signin: (email: string, password: string) => Promise<boolean>; 
    signout: () => void;
    getVisitor: (type: string, field: string, filter: string) => Promise<string>;
    getCompanies: (type: string, field: string, filter: string) => Promise<[]>;
    getCompany: (type: string, field: string, filter: string) => Promise<[]>;
    companyid: string
}

export const AuthContext = createContext<AuthContextType>(null!);