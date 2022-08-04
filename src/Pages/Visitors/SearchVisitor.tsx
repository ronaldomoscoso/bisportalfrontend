import { useContext } from "react";
import { AuthContext } from "../../Contexts/Auth/AuthContext";

interface props {
    filter: string;
}

export const SearchVisitor = (props: props) => {
    const auth = useContext(AuthContext);
    
    return (
        <div>
        </div>
    );
}
