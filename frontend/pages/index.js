import React, { useCallback, useEffect, useState } from 'react';
import {
    usePlaidLink,
    PlaidLinkOptions,
    PlaidLinkOnSuccess,
    PlaidLinkError,
    PlaidLinkOnSuccessMetadata
} from 'react-plaid-link';
import PageContainer from '../components/PageContainer';
import Image from 'next/image';
import styled from 'styled-components';
import PrimaryButton from '../components/PrimaryButton';
import { GAP_SIZE_MD, GAP_SIZE_XL } from '../utils/styled';
import Heading1 from '../components/Heading1';
import Paragraph from '../components/Paragraph';

const Page = ({ props }) => {
    const [linkToken, setLinkToken] = useState();

    useEffect(() => {
        console.log('=====>Do something after linkToken has changed====', linkToken);
    }, [linkToken]);

    const onClick = () => {
        // send token to server
        fetch("/api/plaid/create_link_token", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
        })  
            .then((response) => response.json())
            .then((data) => {
                console.log("-------link token-->", data);
                setLinkToken(data.link_token);
                // check for token then call exchange
            });
    };

    const exchangeToken = (public_token) => {
        fetch("/api/plaid/exchange_token", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({public_token: public_token}),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("-------access token message-->", data.message);
                // check for token then call exchange
            });
    };

    const onSuccess = useCallback((token, metadata) => {
        // send token to server
        console.log("------- token-->", token);
        exchangeToken(token);
        console.log("------- metadata-->", metadata);

    }, []);

    const onExit = useCallback((error) => {
        console.log("_______error_____", error);
    }, []);
    
    const config = {
        token: linkToken,     
        onSuccess,
        onExit
        // ...
    };
    
    const { open, ready, error } = usePlaidLink(config);

    useEffect(() => {
        if (ready) {
            open();
        }
    }, [ready, open]);


    return (
        <PageContainer>
            <StyledContentWrapper>
                <Image width="250px" height="200px" alt="Girl reading book" src="/illustrations/ReadingSideDoodle.svg"/>
                <Heading1 
                    textAlign="center">
                    Finally, all your bank accounts in one place.
                </Heading1>
                <Paragraph 
                    textAlign="center" 
                    maxWidth="350px"
                    margin="12px 0">
                    Getting that peace of mind knowing where your last paycheck went.
                </Paragraph>
                <PrimaryButton onClick={onClick}>Let&lsquo;s get started</PrimaryButton>
            </StyledContentWrapper>
        </PageContainer>
    );
}

const StyledContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${GAP_SIZE_XL};
    gap: ${GAP_SIZE_MD};
    position: relative;
`;

export default Page;