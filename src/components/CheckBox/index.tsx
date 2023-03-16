import {useLocalObservable, useObserver} from "mobx-react";
import {useEffect, useState} from "react";
import axios from "axios";

const CheckBox = (props:any) => {
    const state = useLocalObservable(() => ({
        lab: props.label
    }));

    const [isChecked, setIsChecked] = useState(window.localStorage.getItem(`${state.lab}`) === 'true');
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
        await axios.post(`http://118.67.133.152:7777/room/2`,
            {"extensionName": state.lab, "type": "fixed"})
        .then(response => {
            console.log("successfully added");
            window.localStorage.setItem(`${state.lab}`, "true");
        })
    }
    const deleteFixExtension = async () => {
        await axios.delete(`http://118.67.133.152:7777/room/2/extension/${state.lab}`)
            .then(response => {
                console.log("successfully deleted");
                window.localStorage.setItem(`${state.lab}`, "false");
            });
    }

    return useObserver(() => (
        <>
            <> < input type="checkbox" checked={isChecked} onChange={handleCheck} value={state.lab}/> <label>{state.lab}</label>&nbsp;&nbsp;</>
        </>
    ));
}

export default CheckBox;