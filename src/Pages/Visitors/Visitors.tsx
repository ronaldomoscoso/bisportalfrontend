import { SetStateAction, useContext, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { VisitorInfo } from "../../Classes/VisitorInfo";
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
    const [data, setData] = useState([]);
    const [visid, setVisID] = useState<string | undefined>();
    const [name, setName] = useState('');
    var visitorinfo = new VisitorInfo('');
    
    useEffect(() => {
        const loadVisitor = async () => {
            if (props.visid != '') {
                const response = await auth.getVisitor("LOADVISITOR", "visid", props.visid);
                response.map((cmp: { [x: string]: string; }) => {
                    visitorinfo = new VisitorInfo(cmp["VISID"])
                })
                console.log(visitorinfo);
                setVisID(visitorinfo.VISID);
            }
        };
        loadVisitor();
        console.log(visid);
    }, [props.visid]);

    return (
        <div>
            <Form.Control
            placeholder="digite o n. do documento ou nome"
            aria-describedby="basic-addon2"
            id="search"
            />
            <BISEmpresa companyid=''/>
        </div>
    );
}
