import styled from 'styled-components/native';
import { colors } from '../../estilos';

export const Form = styled.View`
    padding: 30px;
    margin-top: 30px;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: colors.darkTransparent,
})`
background: #EEE;
border-radius: 4px;
border-color: transparent;
border-width: 1px;
border-color: #ddd;
padding: 0 20px;
height: 52px;
font-size: 16px;
color: #333;
margin-top: 15px;
`;
