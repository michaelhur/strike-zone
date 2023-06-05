import React from 'react';
import ReactDOM from 'react-dom';

import Dimmed from '@components/Dimmed/Dimmed';

import * as Styled from './Loading.styles';

function Loading() {
    return ReactDOM.createPortal(
        <Dimmed>
            <Styled.Root>
                <img src="/vite.svg" alt="로고" width={120} height={120} />
            </Styled.Root>
        </Dimmed>,
        document.querySelector('#root') as Element,
    );
}

export default Loading;
