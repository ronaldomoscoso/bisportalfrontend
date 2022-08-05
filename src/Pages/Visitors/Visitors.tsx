import { SetStateAction, useContext, useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
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
    const [newVisid, setNewVisID] = useState(false);
    const [state, setState] = useState({
        visid: "",
        passportno: "",
        name: ""
    });
    const [name, setName] = useState('');
    let visitorinfo = new VisitorInfo();
    
    const handlesubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    useEffect(() => {
        // window.addEventListener('click', () => {alert('ok');setNewVisID(true)});
        const loadVisitor = async () => {
            if (props.id != '' && newVisid === false) {
                const response = await auth.getVisitor("LOADVISITOR", "visid", props.id);
                response.map((cmp: { [x: string]: string; }) => {
                    setState(state => ({...state, visid: cmp["VISID"], passportno: cmp["PASSPORTNO"], name: cmp["NAME"]}));
                })
            }
            else
            {
                setState(state => ({...state, visid: "", passportno: "", name: ""}));
            }

            };
            loadVisitor();
            // return () => {
            //     window.removeEventListener('click', () => {alert('remove')});
            // }
        }, [props.id]);

    const setNew = () => {
        props.id = '';
        setState(state => ({ ...state, visid: "", passportno: "", name: "" }));
        // auth.visitorinfo.companyno = companyno;
        // auth.visitorinfo.companyid = companyid;
    };

    return (
        <div>
            <input type="text"></input>
            <SearchVisitor visid={state.visid} passportno={state.passportno} name={state.name} />
            <BISEmpresa companyid='0013605EE83D76CA'/>
            <Button onClick={() => setNew()}>Novo</Button>
        </div>
    );
}
