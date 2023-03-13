import {useObserver} from "mobx-react";
import {
    Button,
    Container, Content,
    CustomerExtensionBox,
    CustomExtension,
    CustomExtensionInput,
    CustomExtensionLabel,
    CustomExtensionSubmit,
    FixedExtension,
    MainContent, RenderComponent,
    Table
} from "./style";
import {useCallback, useState} from "react";
import useInput from "../../hooks/useInput";

const Main = () => {

    const onClickAddHandler = useCallback((e:any) => {
        // axios.post(`http://localhost:8080/seats/${state.thisObject._seatNum}`,
        //     {customerId, startedTime, endTime}
        // )
    }, []);

    const [customerExtension, onChangeCustomerExtension] = useInput<string>('');
    const [customerExtensionArr, setCustomerExtensionArr] = useState<string[]>([]);
    const [arrSize, setArrSize] = useState<number>(0);

    const onClick = useCallback((e: any) => {
        // if (arrSize >= 200) {
        //     return alert("200개가 한계입니다.");
        // }
        setArrSize(customerExtensionArr.length);
        setCustomerExtensionArr((customerExtensionArr) => {
            return [...customerExtensionArr, customerExtension];
        });
    }, [arrSize, customerExtension]);

    const onClickButton = useCallback((e:any) => {
        console.log("? = ", e);
    },[]);

    const renderAddedComponents = () => {
        const renderedResult: JSX.Element[] = [];
        for (let i = 0; i < arrSize; i++) {
            renderedResult.push(
                <RenderComponent key={i}>
                    <span>{customerExtensionArr.at(i)}</span>&nbsp;<Button type="button" onClick={() => onClickButton(i)}>✕</Button>
                </RenderComponent>
            )
        }
        return renderedResult;
    }

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
                            <input type="checkbox" id="ex_chk"/> <label>bat</label>&nbsp;&nbsp;
                            <input type="checkbox" id="ex_chk"/> <label>cmd</label>&nbsp;&nbsp;
                            <input type="checkbox" id="ex_chk"/> <label>com</label>&nbsp;&nbsp;
                            <input type="checkbox" id="ex_chk"/> <label>cpl</label>&nbsp;&nbsp;
                            <input type="checkbox" id="ex_chk"/> <label>exe</label>&nbsp;&nbsp;
                            <input type="checkbox" id="ex_chk"/> <label>scr</label>&nbsp;&nbsp;
                            <input type="checkbox" id="ex_chk"/> <label>js</label>&nbsp;&nbsp;
                        </td>
                    </FixedExtension>
                    <CustomExtension>
                        <CustomExtensionLabel>커스텀 확장자</CustomExtensionLabel>
                        <td>
                            <CustomExtensionInput type="text" onChange={onChangeCustomerExtension}/>
                            <CustomExtensionSubmit type="submit" onClick={onClick} value="+추가"/>
                        </td>
                    </CustomExtension>
                    <CustomExtension>
                        <td></td>
                        <td>
                            <CustomerExtensionBox>
                                <>{arrSize}/200</><br/>
                                <Content>
                                    {renderAddedComponents()}
                                </Content>
                            </CustomerExtensionBox>
                        </td>
                    </CustomExtension>
                    </tbody>
                </Table>
            </MainContent>
        </Container>
    ));
}

export default Main;
