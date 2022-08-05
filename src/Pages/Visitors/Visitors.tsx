import { SetStateAction, useContext, useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { VisitorInfo } from "../../Classes/VisitorInfo";
import { AuthContext } from "../../Contexts/Auth/AuthContext";
import { BISEmpresa } from "../Common/BISEmpresa";
import { SearchVisitor } from "./SearchVisitor";

interface Props {
    id: string;
}

interface FormData {
    passportno: string;
}
export const Visitors = (props: Props) => {
    const auth = useContext(AuthContext);
    const [state, setState] = useState({
        name: "",
        id: ""
    });
    const [name, setName] = useState('');
    let visitorinfo = new VisitorInfo();
    
    const handlesubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    useEffect(() => {
        const loadVisitor = async () => {
            if (props.id != '') {
                const response = await auth.getVisitor("LOADVISITOR", "visid", props.id);
                response.map((cmp: { [x: string]: string; }) => {
                    visitorinfo.VISID = cmp["VISID"];
                    visitorinfo.NAME = cmp["NAME"];
                })
                setState(state => ({...state, id: visitorinfo.VISID, name: visitorinfo.NAME}));
                return visitorinfo;
            }
            return null;
        };
        loadVisitor();
    }, [props.id]);

    return (
        <div>
            <SearchVisitor filter={""} />
            <Form.Control
            placeholder="digite o n. do documento ou nome"
            aria-describedby="basic-addon2"
            id="search"
            onChange={handlesubmit}
            // value={state.name}
            value={state.id}
            />
            <Form.Control
            placeholder="digite o n. do documento ou nome"
            aria-describedby="basic-addon2"
            id="search"
            onChange={handlesubmit}
            // value={state.name}
            value={state.name}
            />
            <BISEmpresa companyid='0013605EE83D76CA'/>
        </div>
    );
}
