import { useContext } from "react";
import { AuthContext } from "../../Contexts/Auth/AuthContext";
import { BISEmpresa } from "../Common/BISEmpresa";

interface Props {
    visid: string;
}

interface FormData {
    passportno: string;
}
export const Visitors = (props: Props) => {
    const auth = useContext(AuthContext);

    return (
        <div>
            <BISEmpresa companyid=''/>
        </div>
    );
}
