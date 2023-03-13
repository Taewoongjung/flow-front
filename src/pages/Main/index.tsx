import {useObserver} from "mobx-react";
import {
    Container, CustomerExtensionBox,
    CustomExtension,
    CustomExtensionInput, CustomExtensionLabel, CustomExtensionSubmit,
    FixedExtension,
    MainContent,
    Table
} from "./style";


const Main = () => {

    return useObserver(() => (
        <Container>
            <div></div>
            <div></div>
            <div></div>
            <div></div>

            <MainContent>
                <Table>
                    <FixedExtension>
                        <td>고정 확장자</td>
                        <td>
                            <input type="checkbox" id="ex_chk"/>
                            <input type="checkbox" id="ex_chk"/>
                            <input type="checkbox" id="ex_chk"/>
                            <input type="checkbox" id="ex_chk"/>
                            <input type="checkbox" id="ex_chk"/>
                            <input type="checkbox" id="ex_chk"/>
                            <input type="checkbox" id="ex_chk"/>
                            <input type="checkbox" id="ex_chk"/>
                            <input type="checkbox" id="ex_chk"/>
                        </td>
                    </FixedExtension>
                    <CustomExtension>
                        <CustomExtensionLabel>커스텀 확장자</CustomExtensionLabel>
                        <td>
                            <CustomExtensionInput type="text"/>
                            <CustomExtensionSubmit type="submit" value="+추가"/>
                        </td>
                    </CustomExtension>
                    <CustomExtension>
                        <td></td>
                        <td>
                            <CustomerExtensionBox/>
                        </td>
                    </CustomExtension>
                </Table>
            </MainContent>
        </Container>
    ))
}

export default Main;