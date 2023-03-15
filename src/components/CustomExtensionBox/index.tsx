import {useObserver} from "mobx-react";
import {Button, Content, MainBox, RenderComponent} from "./style";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";

const CustomExtensionBox = () => {

    const [clicked, setClick] = useState(false);

    const onClickButton = useCallback(async (extensionName:any) => {
        console.log("call delete API");
        console.log("name = ", extensionName);

        await axios.delete(`http://localhost:8080/room/2/extension/${extensionName}`)
            .then(r => {
                getAllCustomExtensions();
                setClick(true);
            });

        setClick(false);
    },[clicked]);

    const getAllCustomExtensions = async () => {
        await axios.get(`http://localhost:8080/room/2`)
        .then(response => {
            window.localStorage.setItem("aa", JSON.stringify(response.data));
        })
        .catch(error => {
            console.log(error);
        })
    }

    const renderAddedComponents = () => {
        const renderedResult: JSX.Element[] = [];

        const parsed = getParsedData();

        for (let i = 0; i < getCustomExtensionSize(); i++) {
            renderedResult.push(
                <RenderComponent key={i}>
                    <span>{parsed["extensionList"][i].name}</span>&nbsp;<Button type="button" onClick={() => onClickButton(parsed["extensionList"][i].name)}>✕</Button>
                </RenderComponent>
            )
        }

        return renderedResult;
    }

    function getCustomExtensionSize() {
        const parsedData = getParsedData();
        return parsedData["extensionList"]["length"];
    }

    function getParsedData() {
        const parsedJson:any = window.localStorage.getItem("aa");
        return JSON.parse(parsedJson);
    }

    useEffect(() => {
        if (window.localStorage.getItem("aa")) {
            renderAddedComponents();
        }
    }, [clicked]);

    return useObserver(() => (
        <>{
            window.localStorage.getItem("aa") &&
                <MainBox>
                    <>{getCustomExtensionSize()}/200</> <br/>
                    <Content>
                        {renderAddedComponents()}
                    </Content>
                </MainBox>
            }
        </>
    ));
}

export default CustomExtensionBox;