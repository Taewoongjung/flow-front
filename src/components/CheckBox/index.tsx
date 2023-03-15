import {useLocalObservable, useObserver} from "mobx-react";
import {useEffect, useState} from "react";
import axios from "axios";

const CheckBox = (props:any) => {
    const state = useLocalObservable(() => ({
        lab: props.label
    }));

    const [isChecked, setIsChecked] = useState(false);
    const [doit, setDoIt] = useState("yet");

    const handleCheck = (event:any) => {
        if (event.target.checked === true) {
            setIsChecked(true);
            setDoIt("add");
        } else if (event.target.checked === false) {
            setIsChecked(false);
            setDoIt("delete")
        }
    }

    useEffect(() => {
        if (doit === "add") {
            addFixExtension().then(r => console.log(r))
            .catch(error => console.error(error));
        } else if(doit === "delete") {
            deleteFixExtension().then(r => console.log(r))
            .catch(error => console.error(error));
            setDoIt("yet");
        }
    }, [isChecked]);

    const addFixExtension = async () => {
        console.log("call add API");
        await axios.post(`http://localhost:8080/room/2`,
            {"extensionName": state.lab, "type": "fixed"}).then(r => console.log("success to add"));
    }

    const deleteFixExtension = async () => {
        console.log("call delete API");

        await axios.delete(`http://localhost:8080/room/2/extension/${state.lab}`)
            .then(r => console.log("success to delete"));
    }

    return useObserver(() => (
        <>
            <input type="checkbox" checked={isChecked} onChange={handleCheck} value={state.lab}/> <label>{state.lab}</label>&nbsp;&nbsp;
        </>
    ));
}

export default CheckBox;