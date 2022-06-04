import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { IoChevronForwardCircleOutline } from "react-icons/io5";
import slideInLeft from '../../../../animation/slideInLeft';

import { 
    redirectToMainpage,
    redirectToLoading 
} from '../../../../reduxStore/page/authenticationPage/authenticationPageAction';

const TransactionProfileStyle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    background-color: #000000;
    animation: ${slideInLeft} 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`
const BackButton = styled.div`
    height: 10vh;
    width: 100vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: white;
`;
const ProfileContent = styled.div`
    height: 90vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;
const ProfileDetails = styled.div`
    height: 45vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;
    const ProfilePicture = styled.div`
        height: 200px;
        width: 200px;
        border-radius: 100px;
        
        display: flex;
        justify-content: center;
        align-items: center;

        border: 1px solid black;
        box-sizing: border-box;
        background-color: whitesmoke;
    `
    const ProfileEmail = styled.div`
        width: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        border-radius: 5px;
        color: white;
        font-weight: 900;
    `;
const Customercare = styled.div`
    border-radius: 15px;
    overflow: hidden;
`;

const Button = styled.div`
    width: 70vw;
    background-color: white;
    padding: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover{
        background-color: #bbb;
    }
`;
const logoStyle = {
    height:'30px',
    width:'30px',
    marginRight:'15px'
};


const TransactionProfile = () => {
    const dispatch = useDispatch();
    
    const { email } = useSelector( state => state.mainpageReducer );
    
    const logout = async () => {
        try{
            const response = await fetch( process.env.REACT_APP_BACKEND_DEVELOPMENT_URL+ '/logout',
                { credentials:'include' });
            if( response.ok ) dispatch( redirectToLoading() );
        } catch (e){ 
            console.log(e); 
        }
    }
    return (
        <TransactionProfileStyle>
            <BackButton onClick={ () => dispatch( redirectToMainpage() ) } > 
                <IoChevronForwardCircleOutline style={logoStyle} />
            </BackButton>
            <ProfileContent>
                <ProfileDetails>
                    <ProfilePicture> Profile picture </ProfilePicture>
                    <ProfileEmail> { email } </ProfileEmail>
                </ProfileDetails>
                <Customercare>
                    <Button> Help and Support </Button>
                    <Button> Report bug and feedback </Button>
                    <Button> About </Button>
                </Customercare>
                <Button  onClick={ () => logout() } style={{ borderRadius:'7px' }} > 
                    Log out 
                </Button>
            </ProfileContent>
        </TransactionProfileStyle>
  );
}

export default TransactionProfile;