import { useEffect, useState } from "react";
import { useApi } from "../../Hooks/useApi";
import { User } from "../../Classes/User";
import { AuthContext } from "./AuthContext";
import { VisitorInfo } from "../../Classes/VisitorInfo";
import { CompanyInfo } from "../../Classes/CompanyInfo";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const api = useApi();
    const [user, setUser] = useState<User | null>(null);
    const visitorinfo = new VisitorInfo();

    // useEffect(() => {
    //     const validateToken = async () => {
    //         const storageData = localStorage.getItem('authtoken');
    //         if (storageData) {
    //             const data = await api.validateToken(storageData);
    //             if (data.user) {
    //                 setUser(data.user);
    //             }
    //         }
    //     };
    //     validateToken();
    // }, [api]);

    const signin =  async (email: string, password: string) => {
        const data = await api.signin(email, password);
        if (data) {
            setUser(data);
            setToken(data.token);
            return true;
        }
        return false;
    }

    const signout = async () => {
        await api.logout();
        setUser(null);
        setToken('');
    }

    const getVisitor =  async (type: string, field: string, filter: string) => {
        let storageData = localStorage.getItem('authtoken');
        storageData = 'ronaldo'
        if (storageData) {
            const data = await api.getVisitor(storageData, type, field, filter);
            if (data) {
                return data;
            }
        }
        return null;
    }

    const getCompanies =  async (type: string, field: string, filter: string) => {
        let storageData = localStorage.getItem('authtoken');
        storageData = 'ronaldo'
        if (storageData) {
            const data = await api.getCompanies(storageData, type, field, filter);
            if (data) {
                setUser(data);
                return data;
            }
        }
        return null;
    }

    const getCompany =  async (type: string, field: string, filter: string) => {
        let storageData = localStorage.getItem('authtoken');
        storageData = 'ronaldo'
        if (storageData) {
            const data = await api.getCompany(storageData, type, field, filter);
            if (data) {
                setUser(data);
                return data;
            }
        }
        return null;
    }

    const setToken = (token: string) => {
        localStorage.setItem('authtoken', token);
    };


    return (
        <AuthContext.Provider value={{ user, signin, signout, getVisitor, getCompanies, getCompany, visitorinfo }}>
            {children}
        </AuthContext.Provider>
    );
}