import { createContext } from  'react';
import { CompanyInfo } from '../../Classes/CompanyInfo';
import { User } from '../../Classes/User';
import { VisitorInfo } from '../../Classes/VisitorInfo';

export type AuthContextType = {
    user: User | null;
    signin: (email: string, password: string) => Promise<boolean>; 
    signout: () => void;
    getVisitor: (type: string, field: string, filter: string) => Promise<[]>;
    getCompanies: (type: string, field: string, filter: string) => Promise<[]>;
    getCompany: (type: string, field: string, filter: string) => Promise<[]>;
    visitorinfo: VisitorInfo;
}

export const AuthContext = createContext<AuthContextType>(null!);