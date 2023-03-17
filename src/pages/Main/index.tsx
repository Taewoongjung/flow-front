import { useObserver } from "mobx-react";
import {
    Container,
    CustomExtension,
    CustomExtensionInput,
    CustomExtensionLabel,
    CustomExtensionSubmit,
    FixedExtension,
    MainContent,
    Table
} from "./style";
import {useCallback, useEffect, useState} from "react";
import useInput from "../../hooks/useInput";
import CheckBox from "../../components/CheckBox";
import CustomExtensionBox from "../../components/CustomExtensionBox";
import axios from "axios";

const Main = () => {
    const extensions = ["bat", "cmd", "com", "cpl", "exe", "scr", "js"];

    const [customExtension, onChangeCustomExtension] = useInput<string>('');
    const [isClicked, setClick] = useState(false);

    const onClickAddCustomExtension = useCallback(async (e: any) => {
        await axios.post(`http://118.67.133.152/room/2`,
            {"extensionName": customExtension, "type": "custom"}).then(r => {
                console.log("successfully added");
        });
        setClick(true);
    }, [customExtension]);

    const getAllCustomExtensions = async () => {
        await axios.get(`http://118.67.133.152/room/2`)
            .then(response => {
                window.localStorage.setItem("customList", JSON.stringify(response.data));
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        if (isClicked) {
            getAllCustomExtensions();
            setClick(false);
        }
    },[isClicked]);


    return useObserver(() => (
        <Container>
            <div></div>
            <div></div>
            <div></div>
            <div></div>

            <MainContent>
                <Table>
                    <tbody>
                    <FixedExtension>
                        <td>고정 확장자</td>
                        <td>
                            { extensions.map((ext) => (<CheckBox label={ext} />)) }
                        </td>
                    </FixedExtension>
                    <CustomExtension>
                        <CustomExtensionLabel>커스텀 확장자</CustomExtensionLabel>
                        <td>
                            <CustomExtensionInput type="text" onChange={onChangeCustomExtension}/>
                            <CustomExtensionSubmit type="submit" onClick={onClickAddCustomExtension} value="+추가"/>
                        </td>
                    </CustomExtension>
                    <CustomExtension>
                        <td></td>
                        <td>
                            <CustomExtensionBox/>
                        </td>
                    </CustomExtension>
                    </tbody>
                </Table>
            </MainContent>
        </Container>
    ));
}

export default Main;
