import styled from "@emotion/styled";

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(3, 1fr);
`;

export const MainContent = styled.div`
    margin-top: 30%;
`;

export const Table = styled.table`
    width: 100%
`;

export const FixedExtension = styled.tr`
    display: flex;
    gap: 10px;
`;

export const CustomExtension = styled.tr`
    display: flex;
    gap: 10px;
    margin-top: 20px;
`;

export const CustomExtensionLabel = styled.td`
    margin-top: 3%;
`;

export const CustomExtensionInput = styled.input`
    width: 50%;
    border-radius: 7px;
    border: 1px solid #bbb;
    margin: 10px 0;
    padding: 10px 12px;
    height: 5px;
`;

export const CustomExtensionSubmit = styled.input`
    width: 25%;
    border-radius: 7px;
    border: 1px solid #bbb;
    margin-top: 0px;
    margin: 10px 10px;
    height: 25px;
`;