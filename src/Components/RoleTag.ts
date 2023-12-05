import { withTheme } from "@material-ui/core";
import styled from "styled-components";

const RoleTag = withTheme(styled.span`
    text-transform: uppercase;
    color: ${(props: any) => props.theme.palette.primary.light};
    background: ${(props: any) => props.theme.palette.info.main};
    padding: 4px 6px;
    white-space: nowrap;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 700;
`);

export default RoleTag;
